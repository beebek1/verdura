import React, { useState } from 'react';

export default function PrivacyPolicy() {
  const [expandedSection, setExpandedSection] = useState(null);
  const lastUpdated = "January 18, 2026";

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last Updated: {lastUpdated}</p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to our Environmental Engagement Platform. We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This Privacy Policy explains our practices regarding data collection and usage for both individual users and registered organizations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using our platform, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Section 1: Information We Collect */}
        <Section
          title="1. Information We Collect"
          expanded={expandedSection === 1}
          onToggle={() => toggleSection(1)}
        >
          <h3 className="font-semibold text-gray-900 mb-3">1.1 Account Information</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Email address (verified through our authentication system)</li>
            <li>Username and password (encrypted)</li>
            <li>User role designation (individual user or organization)</li>
            <li>Profile information specific to your account type</li>
          </ul>

          <h3 className="font-semibold text-gray-900 mb-3">1.2 Environmental Footprint Data</h3>
          <p className="text-gray-700 mb-2">For individual users, we collect lifestyle inputs to estimate your environmental impact:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Energy consumption patterns</li>
            <li>Transportation habits and methods</li>
            <li>Consumption and purchasing behaviors</li>
            <li>Other voluntary lifestyle information you provide</li>
          </ul>

          <h3 className="font-semibold text-gray-900 mb-3">1.3 Campaign and Engagement Data</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Campaign participation history and volunteer activities</li>
            <li>Blog post interactions (views, upvotes)</li>
            <li>Earned badges and contribution levels</li>
            <li>Campaign creation and management data (for organizations)</li>
          </ul>

          <h3 className="font-semibold text-gray-900 mb-3">1.4 Usage and Analytics Data</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Platform navigation and feature usage patterns</li>
            <li>Device information and browser type</li>
            <li>IP address and general location data</li>
            <li>Session duration and interaction metrics</li>
          </ul>
        </Section>

        {/* Section 2: How We Use Your Information */}
        <Section
          title="2. How We Use Your Information"
          expanded={expandedSection === 2}
          onToggle={() => toggleSection(2)}
        >
          <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Account Management:</strong> To create, maintain, and secure your account with role-based access control</li>
            <li><strong>Environmental Tracking:</strong> To calculate and display your estimated environmental footprint and personal impact metrics</li>
            <li><strong>Campaign Coordination:</strong> To facilitate participation in environmental initiatives and track volunteer engagement</li>
            <li><strong>Content Delivery:</strong> To provide relevant blog posts, climate data, and pollution indicators</li>
            <li><strong>Platform Improvement:</strong> To analyze usage patterns and enhance user experience</li>
            <li><strong>Communication:</strong> To send important updates about campaigns, platform changes, and environmental initiatives (with opt-out options)</li>
            <li><strong>Verification:</strong> To ensure credibility and accountability, particularly for organizational accounts</li>
          </ul>
        </Section>

        {/* Section 3: Data Storage and Security */}
        <Section
          title="3. Data Storage and Security"
          expanded={expandedSection === 3}
          onToggle={() => toggleSection(3)}
        >
          <p className="text-gray-700 mb-4">
            We implement industry-standard security measures to protect your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>All passwords are encrypted using secure hashing algorithms</li>
            <li>Email verification is required for all accounts</li>
            <li>Role-specific data is stored in separate, secured profile tables</li>
            <li>Access controls limit data access to authorized personnel only</li>
            <li>Regular security audits and updates to our infrastructure</li>
            <li>Secure transmission of data using HTTPS encryption</li>
          </ul>
          <p className="text-gray-700">
            While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but are committed to using reasonable measures to safeguard your data.
          </p>
        </Section>

        {/* Section 4: Data Sharing and Disclosure */}
        <Section
          title="4. Data Sharing and Disclosure"
          expanded={expandedSection === 4}
          onToggle={() => toggleSection(4)}
        >
          <h3 className="font-semibold text-gray-900 mb-3">4.1 Public Information</h3>
          <p className="text-gray-700 mb-4">
            Certain information is publicly visible on the platform by design:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Organization profiles and campaign details</li>
            <li>Blog posts and associated campaign information</li>
            <li>Public engagement metrics (campaign reach, views, upvotes)</li>
            <li>User badges and contribution levels (if you choose to display them)</li>
          </ul>

          <h3 className="font-semibold text-gray-900 mb-3">4.2 We Do Not Sell Your Data</h3>
          <p className="text-gray-700 mb-4">
            We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>

          <h3 className="font-semibold text-gray-900 mb-3">4.3 Limited Disclosure</h3>
          <p className="text-gray-700 mb-2">We may share your information only in the following circumstances:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>With Organizations:</strong> When you participate in campaigns, organizations can see participation metrics and volunteer engagement data</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
            <li><strong>Platform Operations:</strong> With trusted service providers who assist in operating our platform (under strict confidentiality agreements)</li>
            <li><strong>Safety and Security:</strong> To protect the rights, property, or safety of our users and the platform</li>
          </ul>
        </Section>

        {/* Section 5: Your Rights and Choices */}
        <Section
          title="5. Your Rights and Choices"
          expanded={expandedSection === 5}
          onToggle={() => toggleSection(5)}
        >
          <p className="text-gray-700 mb-4">You have the following rights regarding your personal data:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information in your profile</li>
            <li><strong>Deletion:</strong> Request deletion of your account and associated data (subject to legal retention requirements)</li>
            <li><strong>Data Portability:</strong> Request your data in a structured, commonly used format</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from non-essential communications at any time</li>
            <li><strong>Privacy Settings:</strong> Control the visibility of certain profile information and metrics</li>
          </ul>
          <p className="text-gray-700 mt-4">
            To exercise any of these rights, please contact us using the information provided in the Contact section below.
          </p>
        </Section>

        {/* Section 6: Cookies and Tracking */}
        <Section
          title="6. Cookies and Tracking Technologies"
          expanded={expandedSection === 6}
          onToggle={() => toggleSection(6)}
        >
          <p className="text-gray-700 mb-4">
            We use cookies and similar tracking technologies to enhance your experience on our platform:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for authentication and core platform functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how users interact with the platform</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          </ul>
          <p className="text-gray-700">
            You can control cookie settings through your browser preferences, though disabling certain cookies may limit platform functionality.
          </p>
        </Section>

        {/* Section 7: Children's Privacy */}
        <Section
          title="7. Children's Privacy"
          expanded={expandedSection === 7}
          onToggle={() => toggleSection(7)}
        >
          <p className="text-gray-700">
            Our platform is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without parental consent, we will take steps to delete that information promptly. If you believe we have inadvertently collected such information, please contact us immediately.
          </p>
        </Section>

       

        {/* Section 9: Changes to This Policy */}
        <Section
          title="9. Changes to This Privacy Policy"
          expanded={expandedSection === 9}
          onToggle={() => toggleSection(9)}
        >
          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make significant changes, we will:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Update the "Last Updated" date at the top of this policy</li>
            <li>Notify you through the platform or via email</li>
            <li>Provide a summary of material changes where appropriate</li>
          </ul>
          <p className="text-gray-700 mt-4">
            We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
          </p>
        </Section>

        {/* Section 10: Contact Us */}
        <Section
          title="10. Contact Us"
          expanded={expandedSection === 10}
          onToggle={() => toggleSection(10)}
        >
          <p className="text-gray-700 mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-gray-700"><strong>Email:</strong> privacy@environmentalplatform.com</p>
            <p className="text-gray-700"><strong>Support:</strong> support@environmentalplatform.com</p>
            <p className="text-gray-700 mt-2">
              We will respond to your inquiry within 30 days of receipt.
            </p>
          </div>
        </Section>

        {/* Footer */}
        
      </div>
    </div>
  );
}

function Section({ title, expanded, onToggle, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <svg
          className={`w-6 h-6 text-gray-600 transition-transform ${expanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {expanded && (
        <div className="px-8 pb-6">
          <div className="pt-4 border-t border-gray-100">
            {children}
          </div>
        </div>
      
    )}
    </div>
  );
}