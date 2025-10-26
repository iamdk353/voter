"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { useState } from "react";

const page = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground">VoteIndia</span>
          </div>

          <Link href={"/"}>
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={() => {
                toast.success("Your vote has been added");
              }}
            >
              Logout
            </Button>
          </Link>
        </div>
      </nav>
      <VotingPanel />
    </div>
  );
};
export default page;

import { useEffect } from "react";

export function VotingPanel() {
  const [selectedParty, setSelectedParty] = useState<string | null>(null);
  const [voted, setVoted] = useState<boolean>(false);

  // Load from localStorage on client-side only
  useEffect(() => {
    const storedParty = localStorage.getItem("selectedParty");
    const storedVoted = localStorage.getItem("voted") === "true";
    if (storedParty) setSelectedParty(storedParty);
    if (storedVoted) setVoted(true);
  }, []);

  const parties = ["Party A", "Party B", "Party C", "Party D"];

  const handleVote = () => {
    if (selectedParty && !voted) {
      const beep = new Audio("/beep.mp3");
      beep.play();
      setVoted(true);
      localStorage.setItem("voted", "true");
      localStorage.setItem("selectedParty", selectedParty);
    }
  };

  const handleSelect = (party: string) => {
    if (!voted) {
      setSelectedParty(party);
      localStorage.setItem("selectedParty", party);
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Voting Panel</CardTitle>
        <CardDescription>Select your preferred party</CardDescription>
      </CardHeader>

      <CardContent>
        <RadioGroup
          value={selectedParty}
          onValueChange={handleSelect}
          className="flex flex-col space-y-2"
        >
          {parties.map((party) => (
            <div
              key={party}
              className="flex justify-between items-center border p-2 rounded"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value={party} id={party} disabled={voted} />
                <label htmlFor={party}>{party}</label>
              </div>
            </div>
          ))}
        </RadioGroup>

        <Button
          className="mt-4"
          disabled={!selectedParty || voted}
          onClick={handleVote}
        >
          {voted ? "Voted" : "Vote"}
        </Button>
      </CardContent>

      <CardFooter>
        <p className="text-sm text-gray-500">
          {voted ? `You voted for ${selectedParty}.` : "Choose wisely."}
        </p>
      </CardFooter>
    </Card>
  );
}
