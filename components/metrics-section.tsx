"use client";

import { TrendingUp, Users, CheckCircle, BarChart3 } from "lucide-react";

export function MetricsSection() {
  const metrics = [
    {
      icon: Users,
      label: "Total Voters",
      value: "2.5M+",
      change: "+12% this month",
      color: "from-amber-600 to-orange-600",
    },
    {
      icon: CheckCircle,
      label: "Votes Cast",
      value: "1.8M+",
      change: "+8% this month",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: BarChart3,
      label: "Participation Rate",
      value: "72%",
      change: "+5% from last election",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: TrendingUp,
      label: "Districts Active",
      value: "50+",
      change: "All states covered",
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <section
      id="metrics"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Live Voting Metrics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-time statistics from India's secure voting platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white border border-border hover:border-amber-200 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {metric.label}
                </p>
                <p className="text-3xl font-bold text-foreground mb-2">
                  {metric.value}
                </p>
                <p className="text-xs text-green-600 font-medium">
                  {metric.change}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
