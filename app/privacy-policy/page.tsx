import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheckIcon, ArrowLeftIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | CampusLedger",
  description: "Read our privacy practices and how we handle your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen px-4 py-12 bg-background text-foreground">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-2 text-primary">
          <ShieldCheckIcon className="w-6 h-6" />
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </div>

        <p className="text-muted-foreground">
          We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect your data when you use our services.
        </p>

        <div className="space-y-4 text-sm">
          <p>
            <strong>1. Information We Collect:</strong> We may collect personal information such as your name, email, and usage data when you interact with our platform.
          </p>
          <p>
            <strong>2. How We Use Your Information:</strong> Your data helps us improve our services, provide customer support, and communicate important updates.
          </p>
          <p>
            <strong>3. Data Security:</strong> We implement industry-standard measures to safeguard your data both in transit and at rest.
          </p>
          <p>
            <strong>4. Third-Party Services:</strong> We may use third-party services for analytics and support which are also required to handle your data responsibly.
          </p>
          <p>
            <strong>5. Changes:</strong> We may update this Privacy Policy from time to time. Any changes will be reflected on this page.
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
