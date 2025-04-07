'use client'

import { useEffect } from 'react'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function PreOrderPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://forms.gle/pJS9Z3i5TUwgSdVx8' // replace with your actual form URL
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-purple-100 text-center px-4">
      <div className="p-6 bg-white rounded-2xl shadow-xl max-w-md w-full space-y-6">
        <div className="animate-pulse text-blue-600">
          <Loader2 className="w-12 h-12 mx-auto animate-spin" />
        </div>
        <h1 className="text-2xl font-bold">Redirecting to Pre-Order Form</h1>
        <p className="text-gray-600">Please wait while we redirect you to the pre-booking form. This may take a few seconds.</p>
        <p className="text-sm text-gray-400">If you are not redirected, <a href="https://forms.gle/pJS9Z3i5TUwgSdVx8" className="text-blue-600 underline">click here</a>.</p>
      </div>
    </div>
  )
}
