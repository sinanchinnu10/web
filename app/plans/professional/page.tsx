import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const proFeatures = [
  {
    title: 'Enhanced student capacity (up to 2000 students)',
    desc: 'Expanded system capacity to handle up to 2000 student records, ideal for larger schools or growing institutions.',
  },
  {
    title: 'Store inventory management',
    desc: 'Complete school store solution including inventory tracking, sales processing, and financial integration. Manage school supplies, uniforms, and other items with automatic stock updates.',
  },
  {
    title: 'Advanced financial analytics and visualizations',
    desc: 'In-depth data analysis tools with customizable charts and graphs to visualize trends, forecast future revenue, and make data-driven decisions.',
  },
  {
    title: 'Document uploads to transactions',
    desc: 'Attach digital copies of payment receipts, invoices, or other relevant documents directly to financial transactions for comprehensive record-keeping.',
  },
  {
    title: 'Custom report generation',
    desc: 'Create personalized reports with flexible parameters to meet your specific reporting needs beyond the standard report templates.',
  },
  {
    title: 'Premium dashboard with forecasting',
    desc: 'Enhanced administrative dashboard with predictive analytics to forecast future fee collection, identify potential revenue gaps, and plan financial strategies proactively.',
  },
  {
    title: 'Automated daily backups',
    desc: 'More frequent automated backups (daily instead of weekly) for enhanced data protection and disaster recovery capabilities.',
  },
  {
    title: 'Bulk payment processing',
    desc: 'Efficiently process multiple payments simultaneously through file uploads or batch entry, saving significant time during peak collection periods.',
  },
  {
    title: '10GB storage',
    desc: 'Expanded storage capacity for documents, reports, and system data to accommodate growing needs of larger institutions.',
  },
  {
    title: 'Priority customer support',
    desc: 'Dedicated support channel with faster response times and priority issue resolution to minimize any potential system downtime.',
  },
  {
    title: 'Customizable receipt templates',
    desc: 'Design and customize payment receipt templates with your school\'s branding, specific fields, and layout requirements.',
  },
]

export default function ProfessionalPlanPage() {
  return (
    <div className="min-h-screen bg-yellow-50/15 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-yellow-700">Professional Plan</h1>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
          Designed for large and growing institutions needing advanced features, analytics, and high performance.
        </p>
        <div className="space-y-10">
          {proFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircle2 className="text-yellow-500 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-700 mt-1">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/preorder"
            className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-yellow-600 transition"
          >
            Pre-Book Professional Plan
          </Link>
        </div>
      </div>
    </div>
  )
}
