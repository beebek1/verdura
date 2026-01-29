import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Cookie Policy</h1>
          <p className="text-gray-600 text-sm sm:text-base">Last Updated: January 25, 2025</p>
        </div>

        {/* Policy Content Card */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Cookie Policy explains how Verdura ("we," "us," or "our") uses cookies and similar tracking technologies when you visit our website or use our services. By using our platform, you consent to the use of cookies as described in this policy.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services.
            </p>
          </section>

          {/* What are Cookies */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">What Are Cookies?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cookies help us understand how you use our site, remember your preferences, and improve your overall experience on our platform.
            </p>
          </section>

          {/* How We Use Cookies */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">How We Use Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              At Verdura, we use cookies primarily for authentication purposes. Specifically, we use:
            </p>
            
            <div className="border-l-4 border-green-600 pl-4 bg-green-50 p-4 rounded-r-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Authentication Tokens (Login Cookies)</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                When you log into your Verdura account, we store an authentication token (login token) in your browser. This token is essential for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Keeping you logged in while you navigate our website</li>
                <li>Maintaining your session security</li>
                <li>Verifying your identity when accessing protected pages and features</li>
                <li>Enabling you to manage campaigns and volunteer activities</li>
                <li>Ensuring secure access to your account settings and personal information</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                <span className="font-semibold">Important:</span> These authentication cookies are strictly necessary for the website to function. Without them, you would need to log in on every page you visit, which would significantly impact your user experience.
              </p>
            </div>
          </section>

          {/* Cookie Duration */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Cookie Duration</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our authentication token is a session cookie that:
            </p>
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div>
                <span className="font-semibold text-gray-800">Duration:</span>
                <span className="text-gray-600"> Remains active for the duration of your login session or until you explicitly log out.</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Security:</span>
                <span className="text-gray-600"> The token is encrypted and securely stored to protect your account.</span>
              </div>
              <div>
                <span className="font-semibold text-gray-800">Automatic Expiration:</span>
                <span className="text-gray-600"> For security purposes, the token may expire after a period of inactivity, requiring you to log in again.</span>
              </div>
            </div>
          </section>

          {/* No Third-Party Cookies */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Third-Party Cookies</h2>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Good news!</span> We do not use any third-party cookies, tracking cookies, analytics cookies, or advertising cookies. Your privacy is important to us, and we only use the essential authentication token necessary for you to access and use our platform securely.
              </p>
            </div>
          </section>

          {/* Managing Cookies */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Managing Your Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              While you can manage cookies through your browser settings, please note:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
              <li>If you disable or delete the authentication cookie, you will be automatically logged out</li>
              <li>You will need to log in again to access your account and use Verdura's features</li>
              <li>Blocking this cookie will prevent you from using the platform while logged in</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              To log out and clear your authentication token, simply click the "Log out" button in your account settings or profile menu.
            </p>
          </section>

          {/* Updates to Policy */}
          <section className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. Any changes will be posted on this page with an updated "Last Updated" date.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-green-50 rounded-lg p-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="text-gray-700 space-y-2">
              <p><span className="font-semibold">Email:</span> privacy@verdura.com</p>
              <p><span className="font-semibold">Address:</span> Impact Venture, Inc., 123 Green Street, Environmental City, EC 12345</p>
              <p><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
            </div>
          </section>
        </div>

        {/* Simple Summary Box */}
        <div className="bg-white border-2 border-green-600 rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
            <span className="text-green-600 mr-2">✓</span> Simple & Transparent
          </h3>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">In summary:</span> We only use one essential cookie - your login token - to keep you securely logged in to your Verdura account. That's it. No tracking, no analytics, no advertising cookies.
          </p>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;