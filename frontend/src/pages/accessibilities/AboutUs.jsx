import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold mb-8 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            About <span className="text-emerald-600">Verdura</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            We're building the bridge between environmental awareness and real-world impact. 
            A platform where individual actions meet organizational campaigns, creating measurable change for our planet.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full">
                <span className="text-emerald-600 text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  OUR MISSION
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Transforming Awareness Into Action
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                We exist to transform environmental awareness into tangible action. By connecting conscious individuals with verified organizations and providing transparent impact tracking, we make climate action accessible, measurable, and meaningful.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our platform addresses the growing disconnect between personal environmental impact awareness and real-world climate action, creating a structured ecosystem where every contribution counts.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full">
                <span className="text-emerald-600 text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  OUR VISION
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                A Coordinated Climate Movement
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                We envision a world where every person understands their environmental footprint and has the tools to reduce it. Where organizations can mobilize communities effectively, and where collective action creates visible, lasting change.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Through data-driven insights and verified campaigns, we're building a movement that transforms abstract environmental concerns into actionable, trackable activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <span className="text-emerald-600 text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                OUR APPROACH
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Data-Driven Environmental Engagement
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              We combine individual footprint tracking with organization-led campaigns, verified environmental data, and real-time impact reporting.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              This creates a complete ecosystem where awareness leads to participation, and participation leads to measurable results. Our platform supports both individual users tracking their personal impact and verified organizations managing environmental initiatives, ensuring accountability and transparency at every level.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
              Every interaction on Verdura is designed to connect personal responsibility with collective action, proving that individual choices matter when amplified through coordinated efforts.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Comprehensive tools for individuals and organizations to create meaningful environmental impact
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                For Individuals
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Track your environmental footprint based on lifestyle inputs including energy use, transportation, and consumption patterns. Participate in verified campaigns led by trusted organizations, from plantation drives to clean-up programs. View your personal impact dashboard with transparent metrics showing how your actions influence your overall environmental footprint. Earn recognition through badges and contribution levels as you make a difference.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                For Organizations
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Create and manage environmental campaigns with full transparency and accountability. Track volunteer participation, campaign progress, and engagement metrics. Publish authoritative content through our blog system to educate and inform the community. Operate as verified entities with email verification and role-based access, ensuring credibility in every initiative you launch.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Data-Driven Impact
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Access real-time environmental data including air pollution indices and climate indicators. See how local and global environmental conditions change over time. Connect your personal actions to broader environmental trends. Every metric is designed to provide clarity, motivation, and proof that collective action creates tangible change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Our Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-1 bg-emerald-600 mb-6"></div>
              <h3 className="text-xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Transparency First
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Every action on our platform translates to measurable environmental impact. We believe in complete transparency and accountability, from individual footprint calculations to organizational campaign results.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-1 bg-emerald-600 mb-6"></div>
              <h3 className="text-xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Verified Quality
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                All organizations on our platform undergo verification processes. Campaigns are structured, tracked, and reported with integrity, ensuring your participation contributes to legitimate environmental initiatives.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-1 bg-emerald-600 mb-6"></div>
              <h3 className="text-xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Community Power
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Collective action creates lasting change. We connect individuals and organizations to amplify environmental efforts, creating a coordinated movement where every contribution matters and every participant sees their impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
            Join Us in Creating Change
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Whether you're an individual looking to understand and reduce your environmental footprint, or an organization ready to mobilize communities for climate action, Verdura provides the tools, transparency, and community to make your efforts count. Together, we're proving that coordinated action creates measurable, lasting environmental change.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;