import React from "react"
import { useNavigate } from "react-router-dom"
import { HiArrowLeft } from "react-icons/hi2"

export default function Privacy() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-8 transition-colors">
          <HiArrowLeft className="h-5 w-5" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-indigo max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
              <p>We collect information that you provide directly to us through Google OAuth and your interactions with our service:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                <li>
                  <strong>Account Information:</strong> Your name, email address, and profile picture provided by Google during sign-in.
                </li>
                <li>
                  <strong>Google Calendar Data:</strong> We synchronize your calendar metadata (titles, timezones) and event details (summaries, descriptions, durations, locations,
                  attendees).
                </li>
                <li>
                  <strong>OAuth Tokens:</strong> We securely store Google Access and Refresh tokens to maintain your calendar synchronization.
                </li>
                <li>
                  <strong>Usage Information:</strong> Technical data about your device and how you interact with our service for performance and security monitoring.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect strictly to:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                <li>Provide the "Calendar Wrapped" analysis and dashboard.</li>
                <li>Calculate personal statistics (e.g., total meeting time, frequent collaborators).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Data Storage and Security</h2>
              <p>Your data is stored securely using industry-standard services:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                <li>
                  <strong>MongoDB Atlas:</strong> Our main database, providing encryption at rest and in transit.
                </li>
                <li>
                  <strong>Render:</strong> Hosts our API with secure connections.
                </li>
                <li>
                  <strong>Sentry:</strong> For real-time error tracking and performance monitoring.
                </li>
              </ul>
              <p className="mt-4">While we implement reasonable security measures, no system is impenetrable, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Information Sharing</h2>
              <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                <li>
                  <strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests
                </li>
                <li>
                  <strong>Business Transfers:</strong> We may share or transfer information in connection with a merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>With Your Consent:</strong> We may share information with your consent or at your direction
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to provide you with our services and as described in this Privacy Policy. When you delete your account,
                we will delete your personal information, except where we need to retain it to comply with legal obligations or resolve disputes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights and Choices</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside ml-4 space-y-2 mt-4">
                <li>
                  <strong>Access and Update:</strong> You can access and update your account information at any time through your account settings
                </li>
                <li>
                  <strong>Delete:</strong> You can request deletion of your account and personal information
                </li>
                <li>
                  <strong>Data Portability:</strong> You can request a copy of your personal information in a portable format
                </li>
                <li>
                  <strong>Opt-Out:</strong> You can opt-out of receiving promotional communications from us
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our service and store certain information. Cookies are files with a small amount of data that
                are sent to your browser from a website and stored on your device.
              </p>
              <p className="mt-4">You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Third-Party Links</h2>
              <p>
                Our service may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices of these
                third parties. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
              <p>
                Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a
                child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. International Data Transfers</h2>
              <p>
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data
                protection laws may differ. By using our service, you consent to this transfer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated"
                date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: <strong>hugo.lamoureux18@gmail.com</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
