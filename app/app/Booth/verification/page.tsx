"use client";
import { MultiStepLoaderDemo } from "@/components/Multi";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { data } from "./mock";

import Image from "next/image";
const page = () => {
  const [voter, setVoter] = useState<any>(null);

  useEffect(() => {
    const addhar = localStorage.getItem("addhar");
    if (addhar) {
      const result = data.find(
        (v) => v.addhar === parseInt(addhar as string, 10)
      );
      setVoter(result);
    }
  }, []);

  console.log(voter);
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-full  flex gap-[7rem] p-[7rem]">
        <div className=" flex-1">
          <Card className="min-w-md shadow-md rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  Aadhaar Credentials
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  This is based on mock data
                </CardDescription>
              </div>
              <CardAction>
                <Image
                  height={120}
                  width={120}
                  src="/aadhaar.svg"
                  alt="Aadhaar"
                  className="rounded-full border border-gray-100 bg-gray-50 p-2"
                />
              </CardAction>
            </CardHeader>
            <CardContent className="mt-2 space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">Aadhaar Number:</span>
                <span>{voter?.addhar}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>{" "}
                <span>{voter?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">DOB:</span>
                <span>{voter?.dob}</span>
              </div>
            </CardContent>
            <div className="p-4 pt-0"></div>
          </Card>
        </div>
        <div className="flex flex-col justify-center items-center">
          <MultiStepLoaderDemo />
        </div>
        <div className=" flex-1">
          <Card className="min-w-md shadow-md rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  Voter ID Credentials
                </CardTitle>
                <CardDescription className="text-sm text-gray-500">
                  This is based on mock data
                </CardDescription>
              </div>
              <CardAction>
                <Image
                  height={120}
                  width={120}
                  src="/voter.svg"
                  alt="Aadhaar"
                  className="rounded-full border border-gray-100 bg-gray-50 p-2"
                />
              </CardAction>
            </CardHeader>
            <CardContent className="mt-2 space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">Aadhaar Number:</span>
                <span>{voter?.voterID}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Name:</span>{" "}
                <span>{voter?.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">DOB:</span>
                <span>{voter?.dob}</span>
              </div>
            </CardContent>
            <div className="p-4 pt-0"></div>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default page;
