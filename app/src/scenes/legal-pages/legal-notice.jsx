import React from "react"
import { useNavigate } from "react-router-dom"
import { HiArrowLeft } from "react-icons/hi2"

export default function LegalNotice() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-8 transition-colors">
          <HiArrowLeft className="h-5 w-5" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Legal Notice</h1>
          <p className="text-gray-600 mb-8">Mentions Légales</p>

          <div className="prose prose-indigo max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Edition of the site</h2>
              <p>This site is edited by:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                <li>
                  <strong>Owner:</strong> LAMOUREUX HUGO
                </li>
                <li>
                  <strong>Legal Form:</strong> Entrepreneur individuel (Micro-entreprise)
                </li>
                <li>
                  <strong>Address:</strong> 1 RUE GUISEPPE TERSIGNI, 69780 MIONS
                </li>
                <li>
                  <strong>SIRET:</strong> 980 320 865 00010
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Publication Director</h2>
              <p>
                <strong>Name:</strong> LAMOUREUX HUGO
              </p>
              <p>
                <strong>Contact:</strong> hugo.lamoureux18@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Hosting</h2>
              <p>This site and its API are hosted by:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                <li>
                  <strong>App (Frontend):</strong> GitHub Pages - GitHub Inc. (88 Colin P Kelly Jr St, San Francisco, CA 94107, USA)
                </li>
                <li>
                  <strong>API (Backend):</strong> Render - Render Services, Inc. (524 4th St, San Francisco, CA 94107, USA)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Intellectual Property</h2>
              <p>
                All content on this site (text, graphics, logos, icons, images, audio, video) is the property of the site owner or its content suppliers and protected by
                international copyright laws.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
