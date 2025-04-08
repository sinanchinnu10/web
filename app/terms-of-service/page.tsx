import { Metadata } from "next";
import Link from "next/link";
import { FileTextIcon, ArrowLeftIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | CampusLedger",
  description: "Understand the terms and conditions for using our service.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen px-4 py-12 bg-background text-foreground">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-primary">
          <FileTextIcon className="w-6 h-6" />
          <h1 className="text-3xl font-bold">Terms of Service</h1>
        </div>

        <p className="text-muted-foreground">
          By accessing or using our services, you agree to be bound by these Terms of Service. Please read them carefully.
        </p>

        <div className="space-y-4 text-sm">
          <p>
            <strong>1. Use of Service:</strong> You agree to use our platform lawfully and in compliance with all applicable rules.
          </p>
          <p>
            <strong>2. User Responsibilities:</strong> You are responsible for maintaining the confidentiality of your account and activities.
          </p>
          <p>
            <strong>3. Modifications:</strong> We may update these terms from time to time. Continued use implies acceptance of the new terms.
          </p>
          <p>
            <strong>4. Termination:</strong> We reserve the right to suspend or terminate your access if you violate any part of this agreement.
          </p>
          <p>
            <strong>5. Contact:</strong> If you have questions about these terms, contact us at <a href="mailto:info@campusledger.live" className="underline">info@campusledger.live</a>.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-primary text-white rounded-full hover:bg-primary/90 transition"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Go to Home
        </Link>
      </div>
    </main>
  );
}
