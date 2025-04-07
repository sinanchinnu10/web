import { Metadata } from "next";
import Link from "next/link";
import { UsersIcon, ArrowLeftIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | CampusLedger",
  description: "Learn more about the team and mission behind CampusLedger.",
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-background text-foreground">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Heading */}
        <div className="flex items-center gap-3">
          <UsersIcon className="w-7 h-7 text-primary" />
          <h1 className="text-4xl font-bold">About Us</h1>
        </div>

        {/* Mission Statement */}
        <section className="space-y-4">
          <p className="text-muted-foreground">
            <strong>CampusLedger</strong> is built with the vision of revolutionizing the way educational institutions manage their finances. We offer an all-in-one solution that simplifies accounting processes, streamlines reporting, and ensures transparency in financial operations.
          </p>
          <p className="text-muted-foreground">
            Our goal is to empower campuses to efficiently manage fee collection, staff salary, ledgers, and more with minimal effort and maximum accuracy.
          </p>
        </section>

        {/* Features */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Core Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-sm text-muted-foreground">
            <li>Student Fee Management</li>
            <li>Staff Salary Management</li>
            <li>Department-wise Ledger</li>
            <li>Voucher Entry (Income/Expense)</li>
            <li>Bank & Cash Book</li>
            <li>Daybook & General Ledger</li>
            <li>Financial Reports (Balance Sheet, P&L, Trial Balance)</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">📊 Reports</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-sm text-muted-foreground">
            <li>Fee Due Report</li>
            <li>Salary Report</li>
            <li>Ledger Summary</li>
            <li>Voucher Reports</li>
            <li>Bank Reconciliation</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">🧾 Vouchers</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>Receipt, Payment, Journal, Contra</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">🏦 Accounts</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-sm text-muted-foreground">
            <li>Multiple Bank & Cash Accounts</li>
            <li>Account Heads (Customizable)</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">🧑‍💼 User Management</h2>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>Roles & Permissions</li>
            <li>Secure Login</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">⚙️ Others</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-sm text-muted-foreground">
            <li>Audit Logs</li>
            <li>Export to PDF/Excel</li>
            <li>Data Backup & Restore</li>
          </ul>
        </section>

        {/* Back to Home */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
