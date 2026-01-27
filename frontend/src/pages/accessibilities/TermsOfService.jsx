import React, { useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Shield, Users, CheckCircle } from 'lucide-react';

const TermsOfService = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: 'acceptance',
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: `By accessing and using Verdura ("the Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Platform. These terms apply to all users, including individual users and registered organizations.`
    },
    {
      id: 'definitions',
      icon: Shield,
      title: '2. Definitions',
      content: `"Platform" refers to the Verdura web-based environmental engagement system. "User" refers to any individual who creates an account on the Platform. "Organization" refers to verified NGOs, INGOs, or other environmental entities registered on the Platform. "Campaign" refers to environmental initiatives created and managed by Organizations. "Content" includes all data, text, information, and materials submitted to the Platform.`
    },
    {
      id: 'accounts',
      icon: Users,
      title: '3. User Accounts and Registration',
      content: `All users must create an account and verify their email address to access Platform features. You are responsible for maintaining the confidentiality of your account credentials. Organizations must undergo a verification process to ensure credibility and accountability. You agree to provide accurate, current, and complete information during registration. False information may result in account suspension or termination.`
    },
    {
      id: 'individual',
      icon: CheckCircle,
      title: '4. Individual User Rights and Responsibilities',
      content: `Individual users may track their environmental footprint based on lifestyle inputs including energy use, transportation, and consumption patterns. Users can view climate and pollution indicators, participate in campaigns, and access their personal dashboard showing impact metrics and participation history. Users acknowledge that footprint calculations are estimates based on provided data and may not represent exact measurements. Users are responsible for the accuracy of the lifestyle data they input into the Platform.`
    },
    {
      id: 'organizations',
      icon: Shield,
      title: '5. Organization Rights and Responsibilities',
      content: `Verified organizations may create and manage environmental campaigns, publish blog content, track volunteer participation, and monitor campaign metrics. Organizations must ensure all campaigns and content are legitimate, lawful, and aligned with environmental objectives. Organizations are prohibited from using the Platform for fraudulent activities, misleading campaigns, or commercial purposes unrelated to environmental impact. Verdura reserves the right to remove or suspend organization accounts that violate these terms.`
    },
    {
      id: 'campaigns',
      icon: Users,
      title: '6. Campaigns and Participation',
      content: `Campaigns represent structured environmental initiatives such as plantation drives, clean-up programs, awareness activities, or sustainability challenges. Users participate in campaigns voluntarily and at their own risk. Verdura is not responsible for the execution, safety, or outcomes of campaigns created by organizations. Organizations must provide accurate information about campaign activities, locations, and requirements. Users and organizations must comply with local laws and regulations when participating in or organizing campaigns.`
    },
    {
      id: 'content',
      icon: FileText,
      title: '7. Content and Intellectual Property',
      content: `Users and organizations retain ownership of content they submit to the Platform. By submitting content, you grant Verdura a non-exclusive, worldwide, royalty-free license to use, display, and distribute such content for Platform operations. Users may not post content that is illegal, defamatory, harassing, or infringes on intellectual property rights. Verdura reserves the right to remove content that violates these terms without prior notice. Blog posts and campaign information must be factual and not intentionally misleading.`
    },
    {
      id: 'data',
      icon: Shield,
      title: '8. Data Privacy and Protection',
      content: `Verdura collects and processes personal data in accordance with applicable privacy laws. User profile data, footprint tracking information, and participation history are stored securely using role-specific database tables. Environmental data such as air pollution indices and climate indicators are sourced from third-party providers and presented for informational purposes. Users have the right to access, update, or delete their personal data by contacting support. For detailed information on data handling, please refer to our Privacy Policy.`
    },
    {
      id: 'engagement',
      icon: CheckCircle,
      title: '9. User Engagement and Recognition',
      content: `The Platform includes engagement features such as badges, contribution levels, upvotes, and impact metrics. These features are designed to encourage participation and recognize contributions. Recognition elements do not represent formal certifications or endorsements. Verdura reserves the right to modify or remove recognition criteria at any time. Users may not manipulate engagement metrics through fraudulent means.`
    },
    {
      id: 'prohibited',
      icon: Shield,
      title: '10. Prohibited Conduct',
      content: `Users and organizations are prohibited from: using the Platform for illegal activities; impersonating other users or organizations; uploading malicious code or viruses; attempting to gain unauthorized access to Platform systems; harassing or threatening other users; spamming or sending unsolicited communications; scraping or automated data collection without permission; misrepresenting environmental impact or campaign outcomes.`
    },
    {
      id: 'disclaimer',
      icon: FileText,
      title: '11. Disclaimers and Limitations of Liability',
      content: `The Platform is provided "as is" without warranties of any kind. Verdura does not guarantee the accuracy of environmental footprint calculations, climate data, or third-party information. Verdura is not liable for damages arising from: use or inability to use the Platform; campaign participation or outcomes; user-generated content or organization activities; data loss or security breaches despite reasonable precautions. Maximum liability is limited to the amount paid by the user to access the Platform, if any.`
    },
    {
      id: 'termination',
      icon: Shield,
      title: '12. Account Termination',
      content: `Verdura reserves the right to suspend or terminate accounts that violate these Terms of Service. Users may delete their accounts at any time through account settings. Upon termination, user data will be handled in accordance with our Privacy Policy. Organizations whose verification status is revoked will lose access to organization-specific features.`
    },
    {
      id: 'modifications',
      icon: FileText,
      title: '13. Modifications to Terms',
      content: `Verdura may update these Terms of Service periodically. Users will be notified of significant changes via email or Platform notification. Continued use of the Platform after changes constitutes acceptance of updated terms. Users who do not agree to updated terms must discontinue use of the Platform.`
    },
    {
      id: 'governing',
      icon: Shield,
      title: '14. Governing Law and Dispute Resolution',
      content: `These Terms of Service are governed by the laws of the jurisdiction in which Verdura operates. Any disputes arising from these terms will be resolved through binding arbitration or in courts of competent jurisdiction. Users waive the right to participate in class-action lawsuits against Verdura.`
    },
    {
      id: 'contact',
      icon: Users,
      title: '15. Contact Information',
      content: `For questions about these Terms of Service, please contact us at legal@verdura.org. For technical support or account issues, email support@verdura.org. For organization verification inquiries, contact partnerships@verdura.org.`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Title Section */}
          <div className="bg-slate-800 px-8 py-10 border-b border-slate-700">
            <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
            <p className="text-slate-300 text-sm">Last Updated: January 21, 2026</p>
            <p className="text-slate-400 mt-4 text-sm leading-relaxed">
              Please read these Terms of Service carefully before using the Verdura platform. 
              By accessing or using our services, you agree to be bound by these terms.
            </p>
          </div>

          {/* Sections */}
          <div className="divide-y divide-gray-200">
            {sections.map((section) => {
              const Icon = section.icon;
              const isExpanded = expandedSection === section.id;
              
              return (
                <div key={section.id} className="transition-colors hover:bg-gray-50">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-8 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-inset"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-slate-700" />
                      </div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {section.title}
                      </h3>
                    </div>
                    <div className="ml-4">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-slate-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  
                  {isExpanded && (
                    <div className="px-8 pb-6 pt-2 bg-gray-50">
                      <div className="pl-14 pr-4">
                        <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Acknowledgment Section */}
          <div className="bg-slate-50 px-8 py-6 border-t border-gray-200">
            <div className="flex items-start gap-3 text-sm">
              <Shield className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
              <div className="text-gray-700">
                <p className="font-medium text-gray-900 mb-2">
                  By using Verdura, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
                <p className="text-gray-600">
                  If you have any questions or concerns about these terms, please contact our legal team at legal@verdura.org before using the Platform.
                </p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export { TermsOfService };
export default TermsOfService;