"use client";

import { Calendar, Users, TrendingUp } from "lucide-react";

export function PreviousElectionsSection() {
  const previousElections = [
    {
      name: "Karnataka Elections",
      date: "November 20, 2024",
      totalVoters: "1.2M",
      turnout: "68%",
      status: "Completed",
      winner: "Party A",
    },
    {
      name: "Karnataka Elections",
      date: "October 15, 2024",
      totalVoters: "850K",
      turnout: "71%",
      status: "Completed",
      winner: "Party B",
    },
    {
      name: "Karnataka Elections",
      date: "September 10, 2024",
      totalVoters: "2.1M",
      turnout: "65%",
      status: "Completed",
      winner: "Party C",
    },
    {
      name: "Karnataka Elections",
      date: "August 5, 2024",
      totalVoters: "1.5M",
      turnout: "73%",
      status: "Completed",
      winner: "Party A",
    },
  ];

  return (
    <section
      id="previous"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent via-green-50/20 to-transparent"
    >
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Previous Elections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Historical data and results from completed elections
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {previousElections.map((election, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white border border-border hover:border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {election.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {election.date}
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  {election.status}
                </span>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    Total Voters
                  </div>
                  <span className="font-semibold text-foreground">
                    {election.totalVoters}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4" />
                    Turnout
                  </div>
                  <span className="font-semibold text-foreground">
                    {election.turnout}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Winner</span>
                  <span className="font-semibold text-amber-600">
                    {election.winner}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
