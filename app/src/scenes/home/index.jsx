import React from "react"
import { HiSparkles } from "react-icons/hi2"

export default function Home() {
  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-lg bg-indigo-600 flex items-center justify-center">
            <HiSparkles className="text-white h-6 w-6" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome to Boilerplate</h1>
            <p className="text-gray-600">Your modern application dashboard</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Setup</h3>
            <p className="text-sm text-gray-600">Get started quickly with our pre-configured template</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customizable</h3>
            <p className="text-sm text-gray-600">Easily adapt the template to your needs</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-lg transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure</h3>
            <p className="text-sm text-gray-600">Built with security best practices</p>
          </div>
        </div>
      </div>
    </div>
  )
}
