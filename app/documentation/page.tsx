import { Metadata } from "next";
import Link from "next/link";
import { RocketIcon, ArrowLeftIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation | CampusLedger",
  description: "Coming soon – stay tuned for detailed documentation about our product.",
};

export default function DocumentationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-background to-muted">
      <div className="text-center max-w-xl space-y-6 p-6 border border-border rounded-2xl shadow-lg bg-background/80 backdrop-blur">
        <div className="flex justify-center">
          <RocketIcon className="h-12 w-12 text-primary animate-bounce" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Documentation Coming Soon</h1>
        <p className="text-muted-foreground text-lg">
          We’re working hard to put everything together. Our documentation will be live very soon!
        </p>
        <p className="text-sm text-muted-foreground italic">Stay tuned 🚀</p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
