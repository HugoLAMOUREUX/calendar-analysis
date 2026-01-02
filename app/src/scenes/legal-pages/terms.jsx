import React from "react"
import { useNavigate } from "react-router-dom"
import { HiArrowLeft } from "react-icons/hi2"

export default function Terms() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-8 transition-colors">
          <HiArrowLeft className="h-5 w-5" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-indigo max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials (information or software) on this application for personal, non-commercial transitory viewing only. This
                is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained in the application</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Account</h2>
              <p>
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the
                Terms, which may result in immediate termination of your account on our service.
              </p>
              <p className="mt-4">
                You are responsible for safeguarding the password that you use to access the service and for any activities or actions under your password. You agree not to
                disclose your password to any third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Storage</h2>
              <p>
                Our service uses MongoDB Atlas for secure data storage. We implement industry-standard security measures to protect your data. However, no method of transmission
                over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Prohibited Activities</h2>
              <p>You agree not to engage in any of the following activities:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                <li>Using the service for any unlawful purpose</li>
                <li>Attempting to gain unauthorized access to any portion of the service</li>
                <li>Interfering with or disrupting the service or servers</li>
                <li>Uploading viruses or other malicious code</li>
                <li>Collecting or tracking personal information of others</li>
                <li>Spamming, phishing, or engaging in similar activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
              <p>
                The service and its original content, features, and functionality are and will remain the exclusive property of the service provider and its licensors. The service
                is protected by copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the
                Terms. Upon termination, your right to use the service will immediately cease.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
              <p>
                In no event shall the service provider, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special,
                consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Disclaimer</h2>
              <p>
                Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" basis. The service is provided without warranties of any
                kind, whether express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days'
                notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us at: <strong>hugo.lamoureux18@gmail.com</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
