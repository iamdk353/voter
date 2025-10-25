"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, AlertCircle } from "lucide-react";

export function UpcomingElectionsSection() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeRemaining = (electionDate: Date) => {
    const now = currentTime;
    const diff = electionDate.getTime() - now.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    if (diff <= 0) {
      return { text: "Election Day!", isNow: true };
    }
    if (days > 0) {
      return {
        text: `${days}d ${hours}h ${minutes}m ${seconds}s`,
        isNow: false,
      };
    } else if (hours > 0) {
      return { text: `${hours}h ${minutes}m ${seconds}s`, isNow: false };
    } else if (minutes > 0) {
      return { text: `${minutes}m ${seconds}s`, isNow: false };
    } else {
      return { text: `${seconds}s`, isNow: false };
    }
  };

  const upcomingElections = [
    {
      id: 1,
      name: "Karnataka Assembly Elections",
      date: "2025-10-25",
      time: "08:00 AM",
      location: "Karnataka",
      expectedVoters: "3.2M",
      districts: 38,
    },
    {
      id: 2,
      name: "Karnataka By-Elections",
      date: "2025-12-10",
      time: "07:00 AM",
      location: "Karnataka",
      expectedVoters: "1.8M",
      districts: 12,
    },
    {
      id: 3,
      name: "Karnataka Assembly Elections (Phase 2)",
      date: "2025-10-26",
      time: "08:00 AM",
      location: "Karnataka",
      expectedVoters: "2.5M",
      districts: 24,
    },
    {
      id: 4,
      name: "Karnataka Municipal Elections",
      date: "2026-02-20",
      time: "07:30 AM",
      location: "Karnataka",
      expectedVoters: "1.5M",
      districts: 30,
    },
    {
      id: 5,
      name: "Bangalore Urban Local Body Elections",
      date: "2026-03-18",
      time: "08:00 AM",
      location: "Bangalore",
      expectedVoters: "1.2M",
      districts: 10,
    },
    {
      id: 6,
      name: "Mysuru District Panchayat Elections",
      date: "2026-04-25",
      time: "07:30 AM",
      location: "Mysuru",
      expectedVoters: "850K",
      districts: 7,
    },
    {
      id: 7,
      name: "Karnataka Legislative Council Elections",
      date: "2026-05-30",
      time: "08:00 AM",
      location: "Karnataka",
      expectedVoters: "2.1M",
      districts: 20,
    },
    {
      id: 8,
      name: "Tumakuru Local Body Elections",
      date: "2026-06-15",
      time: "07:00 AM",
      location: "Tumakuru",
      expectedVoters: "600K",
      districts: 5,
    },
    {
      id: 9,
      name: "Belagavi Rural Elections",
      date: "2026-07-10",
      time: "08:00 AM",
      location: "Belagavi",
      expectedVoters: "950K",
      districts: 8,
    },
    {
      id: 10,
      name: "Karnataka Lok Sabha Elections",
      date: "2026-08-25",
      time: "07:30 AM",
      location: "Karnataka",
      expectedVoters: "4.5M",
      districts: 42,
    },
  ];

  return (
    <section
      id="upcoming"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Upcoming Elections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about upcoming voting events with scheduled dates and
            times
          </p>
        </div>

        <div className="space-y-6">
          {upcomingElections.map((election) => {
            const electionDate = new Date(election.date);
            const timeRemaining = getTimeRemaining(electionDate);
            const now = currentTime;
            const isUrgent =
              (electionDate.getTime() - now.getTime()) /
                (1000 * 60 * 60 * 24) <=
              7;

            return (
              <div
                key={election.id}
                className={`group p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                  isUrgent
                    ? "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 hover:border-amber-300"
                    : "bg-white border-border hover:border-amber-200"
                } hover:shadow-lg`}
              >
                {/* Small Countdown Timer */}
                <div className="mb-4 inline-block">
                  <div
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${
                      timeRemaining.isNow
                        ? "bg-green-100 text-green-700 border border-green-300"
                        : isUrgent
                        ? "bg-red-100 text-red-700 border border-red-300"
                        : "bg-blue-100 text-blue-700 border border-blue-300"
                    }`}
                  >
                    ⏱️ {timeRemaining.text}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 items-start">
                  {/* Election Info */}
                  <div className="md:col-span-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-foreground">
                          {election.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {electionDate.toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                      {isUrgent && (
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                          <AlertCircle className="w-3 h-3" />
                          Upcoming
                        </div>
                      )}
                    </div>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          {election.location}
                        </span>
                      </p>
                      <p className="text-muted-foreground">
                        Expected Voters:{" "}
                        <span className="font-semibold text-foreground">
                          {election.expectedVoters}
                        </span>
                      </p>
                      <p className="text-muted-foreground">
                        Districts:{" "}
                        <span className="font-semibold text-foreground">
                          {election.districts}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-border">
                        <div className="flex-shrink-0">
                          <Calendar className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            Voting Date
                          </p>
                          <p className="text-xl font-bold text-foreground">
                            {electionDate.toLocaleDateString("en-IN", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/50 border border-border">
                        <div className="flex-shrink-0">
                          <Clock className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                            Voting Time
                          </p>
                          <p className="text-xl font-bold text-foreground">
                            {election.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
