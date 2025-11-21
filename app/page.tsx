import { CheckCircle, Lock, Users, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-amber-50/30">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-foreground">
                VoteIndia
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                Features
              </a>
              <a
                href="#security"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                Security
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-foreground transition"
              >
                Contact
              </a>
            </div>
            <Link href={"/signup"}>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  <span className="text-sm text-green-700 font-medium">
                    Secure & Transparent
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                  Your Vote,{" "}
                  <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-green-600 bg-clip-text text-transparent">
                    Your Voice
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Participate in India's democratic process with a secure,
                  transparent, and accessible online voting platform. Your vote
                  matters.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={"/signup"}>
                  <Button
                    size="lg"
                    className="bg-amber-600 hover:bg-amber-700 text-white gap-2"
                  >
                    Start Voting <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:bg-muted bg-transparent"
                >
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">2.5M+</p>
                  <p className="text-sm text-muted-foreground">Votes Cast</p>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Districts</p>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative h-96 md:h-full min-h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 via-orange-50/20 to-green-100/40 rounded-3xl blur-3xl"></div>
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-white to-amber-50/50 border border-border p-8 flex flex-col justify-center items-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">
                    SECURE VOTING
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    Cast Your Vote
                  </p>
                </div>
                <div className="w-full space-y-3">
                  <div className="h-2 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full w-3/4"></div>
                  <div className="h-2 bg-muted rounded-full w-2/3"></div>
                  <div className="h-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </section> 

        {/* Features Section */}
        <section
          id="features"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Why Choose VoteIndia?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with security, accessibility, and transparency at its core
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Bank-Level Security",
                description:
                  "End-to-end encryption and multi-factor authentication ensure your vote is secure and anonymous.",
              },
              {
                icon: Users,
                title: "Accessible to All",
                description:
                  "Designed for everyone. Multiple language support and accessibility features for all citizens.",
              },
              {
                icon: BarChart3,
                title: "Real-Time Results",
                description:
                  "Transparent vote counting with live results dashboard. Every vote is counted and verified.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white border border-border hover:border-amber-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mb-4 group-hover:from-amber-200 group-hover:to-orange-200 transition">
                  <feature.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Security Section */}
        <section
          id="security"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                  Security You Can Trust
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our platform uses advanced cryptographic techniques and
                  blockchain verification to ensure every vote is secure,
                  anonymous, and tamper-proof.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  "256-bit AES Encryption",
                  "Blockchain Verification",
                  "Multi-Factor Authentication",
                  "Audit Trail Logging",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 via-emerald-50/20 to-teal-100/40 rounded-3xl blur-3xl"></div>
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-white to-green-50/50 border border-border p-8 flex flex-col justify-center items-center space-y-6">
                <Lock className="w-16 h-16 text-green-600" />
                <div className="text-center space-y-2">
                  <p className="text-sm font-semibold text-muted-foreground">
                    ENCRYPTION STANDARD
                  </p>
                  <p className="text-2xl font-bold text-foreground">
                    Military Grade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-500 to-green-600 opacity-90"></div>
            <div className="relative px-8 md:px-16 py-16 md:py-20 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
                Ready to Make Your Vote Count?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Join millions of Indians exercising their democratic right
                through a secure, transparent platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-white text-amber-600 hover:bg-gray-100 font-semibold"
                >
                  Start Voting Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-foreground">VoteIndia</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Secure voting for a stronger democracy.
                </p>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-foreground text-sm">Product</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-foreground transition">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-foreground text-sm">Company</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-foreground transition">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="font-semibold text-foreground text-sm">Legal</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-foreground transition">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-foreground transition">
                      Compliance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2025 VoteIndia. All rights reserved.
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition text-sm"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition text-sm"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition text-sm"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
