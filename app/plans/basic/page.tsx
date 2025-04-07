import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const basicFeatures = [
  {
    title: 'Secure cloud-hosted system',
    desc: 'A fully managed cloud solution with industry-standard encryption, regular security updates, and data protection measures to ensure your school\'s financial information remains private and secure at all times.',
  },
  {
    title: 'Student and profile management (up to 500 students)',
    desc: 'Easily register, update, and manage student records including contact information and enrollment details for up to 500 students.',
  },
  {
    title: 'Basic dashboard with financial overview',
    desc: 'At-a-glance visual summary of key financial metrics including collections, outstanding balances, and payment trends to help administrators quickly assess the school\'s financial health.',
  },
  {
    title: 'Fee structure management',
    desc: 'Create and manage various financial accounts (fees, library charges, fines, lab fees, class funds, trip expenses, etc.) and their structures. Easily assign these to individual students, groups, or entire grades with flexible scheduling options.',
  },
  {
    title: 'Receipt generation',
    desc: 'Automatically generate professional payment receipts that can be printed for distribution to parents. Each receipt includes payment details, student information, and running balances.',
  },
  {
    title: 'Standard financial reports',
    desc: 'Access pre-configured reports including collection summaries, outstanding balances, and student statements to gain insights into your school\'s financial performance.',
  },
  {
    title: 'Due payment alerts',
    desc: 'Automated notification system that alerts administrators about upcoming and overdue payments, helping maintain timely collection of fees.',
  },
  {
    title: 'Automated backups (weekly)',
    desc: 'Scheduled weekly backups of all your financial data to prevent data loss and ensure business continuity in case of unexpected events.',
  },
  {
    title: 'Staff login & role-based access control',
    desc: 'Secure multi-user access with customizable permission levels, allowing you to control which staff members can view, edit, or process different aspects of the system.',
  },
  {
    title: 'Student financial statements',
    desc: 'Generate comprehensive financial statements for each student showing all assigned charges, payments made, and current balances across all account types.',
  },
  {
    title: 'Academic year transition management',
    desc: 'Seamlessly transition between academic years while carrying forward relevant student data and outstanding balances for continuity in financial records.',
  },
  {
    title: 'Transaction history and audit logging',
    desc: 'Detailed tracking of all financial transactions with comprehensive audit trails for accountability and easy troubleshooting.',
  },
  {
    title: 'Basic student/parent portal access',
    desc: 'Self-service portal allowing parents and students to view their financial information, fee schedules, and payment history.',
  },
]

export default function BasicPlanPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-blue-700">Basic Plan</h1>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Perfect for small to medium-sized schools. Includes essential tools to manage students and finances with ease and security.
        </p>
        <div className="space-y-10">
          {basicFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="text-blue-600 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 mt-1">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/prebook"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          >
            Pre-Book Basic Plan
          </Link>
        </div>
      </div>
    </div>
  )
}
