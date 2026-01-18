import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            About <span className="text-emerald-600">Verdu</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            We're building the bridge between environmental awareness and real-world impact. 
            A platform where individual actions meet organizational campaigns, creating measurable change for our planet.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                We exist to transform environmental awareness into tangible action. By connecting conscious individuals with verified organizations and providing transparent impact tracking, we make climate action accessible, measurable, and meaningful. Our platform addresses the growing disconnect between personal environmental impact awareness and real-world climate action, creating a structured ecosystem where every contribution counts.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                We envision a world where every person understands their environmental footprint and has the tools to reduce it. Where organizations can mobilize communities effectively, and where collective action creates visible, lasting change. Through data-driven insights and verified campaigns, we're building a movement that transforms abstract environmental concerns into actionable, trackable activities.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our Approach
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                We combine individual footprint tracking with organization-led campaigns, verified environmental data, and real-time impact reporting. This creates a complete ecosystem where awareness leads to participation, and participation leads to measurable results. Our platform supports both individual users tracking their personal impact and verified organizations managing environmental initiatives, ensuring accountability and transparency at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            What We Offer
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                For Individuals
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Track your environmental footprint based on lifestyle inputs including energy use, transportation, and consumption patterns. Participate in verified campaigns led by trusted organizations, from plantation drives to clean-up programs. View your personal impact dashboard with transparent metrics showing how your actions influence your overall environmental footprint. Earn recognition through badges and contribution levels as you make a difference.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                For Organizations
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Create and manage environmental campaigns with full transparency and accountability. Track volunteer participation, campaign progress, and engagement metrics. Publish authoritative content through our blog system to educate and inform the community. Operate as verified entities with email verification and role-based access, ensuring credibility in every initiative you launch.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            Our Commitment
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Transparency First
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Every action on our platform translates to measurable environmental impact. We believe in complete transparency and accountability, from individual footprint calculations to organizational campaign results.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Verified Quality
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                All organizations on our platform undergo verification processes. Campaigns are structured, tracked, and reported with integrity, ensuring your participation contributes to legitimate environmental initiatives.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Community Power
              </h3>
              <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Collective action creates lasting change. We connect individuals and organizations to amplify environmental efforts, creating a coordinated movement where every contribution matters and every participant sees their impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;