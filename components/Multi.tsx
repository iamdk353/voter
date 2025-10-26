"use client";
import React, { useState, useEffect } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";

import { RefreshCcw } from "lucide-react";
import Router from "next/router";

const loadingStates = [
  { text: "Fetching Aadhaar details securely" },
  { text: "Verifying 12-digit Aadhaar number" },
  { text: "Retrieving Voter ID from Election Commission database" },
  { text: "Cross-verifying demographic data" },
  { text: "Linking Aadhaar with Voter ID record" },
  { text: "Encrypting and saving link status" },
  { text: "Linkage completed successfully" },
];
import { useRouter } from "next/navigation";
export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (loading) {
      const timeout = setTimeout(
        () => setLoading(false),
        loadingStates.length * 1000 + 100
      );
      setVerified(true);
      return () => clearTimeout(timeout);
    }

    if (!loading && verified) {
      const redirectTimeout = setTimeout(() => {
        router.push("vote");
      }, 1500);
      return () => clearTimeout(redirectTimeout);
    }
  }, [loading, verified, router]);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center space-y-4">
      <Loader loadingStates={loadingStates} loading={loading} duration={1000} />

      {verified ? (
        <div className=" flex flex-col items-center">
          <RefreshCcw
            style={{ animation: "spin 1s linear infinite reverse" }}
          />
          <p>Syncing Data</p>
        </div>
      ) : (
        <button
          onClick={() => setLoading(true)}
          disabled={loading}
          className="bg-primary text-black text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center disabled:opacity-60"
          style={{
            boxShadow:
              "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
          }}
        >
          Click to Verify
        </button>
      )}
    </div>
  );
}
