import { CheckCircle } from "lucide-react";
import { MetricsSection } from "@/components/metrics-section";
import { PreviousElectionsSection } from "@/components/previous-elections-section";
import { UpcomingElectionsSection } from "@/components/upcoming-elections-section";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-amber-50/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground">VoteIndia</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#metrics"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Metrics
            </a>
            <a
              href="#previous"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Previous Elections
            </a>
            <a
              href="#upcoming"
              className="text-sm text-muted-foreground hover:text-foreground transition"
            >
              Upcoming Elections
            </a>
            <Link
              href="app/Booth"
              className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-md transition"
            >
              Go to Booth
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200">
            <div className="w-2 h-2 rounded-full bg-green-600"></div>
            <span className="text-sm text-green-700 font-medium">
              Live Voting Platform
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
            India's{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-green-600 bg-clip-text text-transparent">
              Democratic Voice
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Participate in elections with transparency and security. Track
            voting metrics, explore past elections, and stay informed about
            upcoming voting events.
          </p>
        </div>
      </section>

      {/* Metrics Section */}
      <MetricsSection />

      {/* Previous Elections Section */}
      <PreviousElectionsSection />

      {/* Upcoming Elections Section */}
      <UpcomingElectionsSection />

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-foreground">VoteIndia</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 VoteIndia. Secure voting for a stronger democracy.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
