import { Shield, Lock, Eye, Heart, Database, UserX } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src="/icon2.png" alt="EmoMate" className="h-12 w-auto" />
            </Link>

            <nav className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-card to-background py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your safety, anonymity, and emotional well-being are at the heart of
            everything we do.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: January 2026
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-16">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Our Commitment to Anonymity
              </h2>
              <p className="text-muted-foreground mb-4">
                EmoMate is built as a safe, anonymous, and judgment-free space.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">
                  We do not require your real name, phone number, or identity.
                </strong>{" "}
                Your emotions matter — not who you are in the real world.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6">
                Information We Collect
              </h2>

              <Card className="p-6 mb-6">
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-3">
                  <UserX className="w-5 h-5 text-primary" />
                  What We Don’t Collect
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real name or identity</li>
                  <li>• Phone number or address</li>
                  <li>• Social media accounts</li>
                  <li>• Photos or identity proofs</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  What We Collect (Minimal & Anonymous)
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>→ Anonymous user ID (session management)</li>
                  <li>→ Device & browser info (compatibility)</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Conversations & Emotional Safety
              </h2>
              <p className="text-muted-foreground mb-4">
                Your conversations are private, confidential, and handled with
                care.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ No ads, no tracking, no selling chats</li>
                <li>✓ Listeners see only anonymous usernames</li>
                <li>✓ Safety action only in extreme harm situations</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-2">
                We use industry-standard security, encryption, and access
                control.
              </p>
              <p className="text-muted-foreground">
                Data is retained only as long as necessary and can be deleted on
                request.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <Card className="p-8 bg-muted/30">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              Questions about privacy? We’re here.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:support@emomate.com" className="text-primary">
                emomate9@gmail.com
              </a>
            </p>
          </Card>
        </section>

        <section className="text-center py-8">
          <p className="text-muted-foreground">
            💙 Thank you for trusting EmoMate. You’re never alone.
          </p>
        </section>
      </main>

      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 EmoMate. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
