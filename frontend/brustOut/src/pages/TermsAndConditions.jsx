import React from "react";
import { Link } from "react-router-dom";

export default function TermsAndConditions() {
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

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground">
            Effective Date: January 14, 2026
          </p>
          <p className="text-muted-foreground">
            Last Updated: January 14, 2026
          </p>
        </div>

        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-3">
              Welcome to EmoMate. By accessing or using EmoMate, you agree to be
              legally bound by these Terms & Conditions. If you do not agree,
              you must immediately stop using the Platform.
            </p>
            <p>
              EmoMate provides anonymous, peer-to-peer emotional support where
              users can connect with trained listeners .
            </p>
          </section>

          <section className="border-2 border-red-500 rounded-lg p-6 bg-red-500/5">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">
              2. Critical Disclaimer – Not Medical Services
            </h2>
            <p className="font-semibold mb-3">
              EMOMATE DOES NOT PROVIDE MEDICAL, PSYCHOLOGICAL, OR THERAPEUTIC
              SERVICES.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Listeners are NOT doctors, therapists, or licensed
                professionals.
              </li>
              <li>
                EmoMate is NOT a substitute for professional mental health care.
              </li>
              <li>Support provided is emotional support only.</li>
              <li>
                Do not use EmoMate for medical or mental health emergencies.
              </li>
            </ul>
          </section>

          <section className="border-2 border-red-500 rounded-lg p-6 bg-red-500/5">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">
              3. Emergency & Suicide Policy
            </h2>

            <p className="font-semibold mb-4">
              If you are in immediate danger, contact emergency services.
            </p>

            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Emergency (India): 112</li>
              <li>Suicide Helpline: 9152987821</li>
              <li>Vandrevala Foundation: 1860 2662 345</li>
            </ul>

            <p className="mb-3">
              If a user expresses suicidal thoughts, self-harm intent, or
              threats to others:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                EmoMate may <strong>break anonymity</strong> if required to
                protect life.
              </li>
              <li>
                Relevant data may be shared with government authorities, police,
                or emergency services.
              </li>
              <li>
                This may occur <strong>without prior notice</strong>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              4. Zero Tolerance Code of Conduct
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Abusive or hateful language</li>
              <li>Harassment or threats</li>
              <li>Sexual or explicit content</li>
              <li>Promotion of self-harm or violence</li>
              <li>Illegal activities or impersonation</li>
            </ul>
            <p className="mt-3 font-semibold">
              Violations result in immediate suspension or permanent ban.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              5. User Responsibility
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for your own actions.</li>
              <li>You will seek professional help when needed.</li>
              <li>EmoMate is not liable for emotional outcomes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              6. Privacy & Anonymity
            </h2>
            <p>
              EmoMate offers anonymity by default, but anonymity is not absolute
              and may be revoked in emergency or legal situations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              7. Account Termination
            </h2>
            <p>
              EmoMate may suspend or permanently terminate accounts without
              notice for policy violations or safety concerns.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. All disputes shall
              fall under Indian jurisdiction.
            </p>
          </section>

          <section className="border-2 border-secondary rounded-lg p-6 bg-primary/5">
            <h2 className="text-2xl font-semibold mb-4">9. Acknowledgment</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You understand EmoMate is not a medical service</li>
              <li>You accept emergency intervention policies</li>
              <li>You agree to all Terms & Conditions</li>
            </ul>
          </section>
        </div>

        <div className="w-full border-t border-border mt-12" />

        <div className="pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 EmoMate. All rights reserved.</p>
          <p className="mt-2">
            These Terms are legally binding. Please read them carefully.
          </p>
        </div>
      </div>
    </div>
  );
}
