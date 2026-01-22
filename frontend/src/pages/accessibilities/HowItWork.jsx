    import React from 'react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            How <span className="text-emerald-600">Verdu</span> Works
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            A seamless ecosystem connecting individuals and organizations for maximum environmental impact through transparent tracking and verified campaigns.
          </p>
        </div>
      </section>

      {/* For Individuals */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            For Individuals
          </h2>
          
          <div className="space-y-12">
            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Create Your Account
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Sign up with email verification to create your personal environmental profile. Your account gives you access to footprint tracking tools, campaign participation features, and your personalized impact dashboard. The verification process ensures the integrity of our community and the accuracy of collective impact data.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Track Your Environmental Footprint
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Input your lifestyle data including energy consumption, transportation methods, and daily consumption patterns. Our system calculates your estimated environmental footprint based on these inputs, providing you with a clear baseline understanding of your personal impact. Update your information regularly to see how lifestyle changes affect your overall footprint over time.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Explore Environmental Data
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Access real-time climate and pollution indicators relevant to your region and globally. View air quality indices, climate trends, and environmental metrics that contextualize your personal impact within broader environmental challenges. This data helps you understand the urgency and importance of climate action.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Join Verified Campaigns
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Browse campaigns created by verified organizations including plantation drives, clean-up programs, awareness initiatives, and sustainability challenges. Each campaign provides detailed information about goals, location, timeline, and expected impact. Register your participation to contribute to organized environmental efforts with confidence in their legitimacy.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Monitor Your Impact Dashboard
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Your personal dashboard reflects how your actions influence your environmental footprint. View your participation history, earned badges, contribution levels, and how campaign involvement offsets aspects of your calculated footprint. The dashboard provides transparent, measurable proof that your efforts create real change.
              </p>
            </div>

            <div className="border-l-4 border-emerald-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Stay Informed Through Blogs
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Read authoritative articles and updates published by verified organizations. Blog posts cover environmental topics, campaign results, success stories, and educational content. Many posts link directly to specific campaigns, allowing you to learn about initiatives and participate seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Organizations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            For Organizations
          </h2>
          
          <div className="space-y-12">
            <div className="border-l-4 border-teal-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Register as Verified Entity
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Organizations undergo a verification process including email confirmation and credential validation. This ensures that all campaigns and content on the platform come from legitimate, accountable entities. Verified status builds trust with individual users and maintains the integrity of the environmental action ecosystem.
              </p>
            </div>

            <div className="border-l-4 border-teal-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Create Environmental Campaigns
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Design and launch structured environmental initiatives through our campaign management system. Define campaign objectives, locations, timelines, volunteer needs, and expected outcomes. Whether organizing plantation drives, community clean-ups, awareness programs, or sustainability challenges, the platform provides tools to structure and manage your initiative professionally.
              </p>
            </div>

            <div className="border-l-4 border-teal-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Track Volunteer Participation
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Monitor who has registered for your campaigns in real-time. Access participant lists, track attendance, and manage volunteer communications efficiently. The platform maintains accurate records of participation, enabling you to recognize contributors and measure community engagement levels.
              </p>
            </div>

            <div className="border-l-4 border-teal-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Monitor Campaign Progress
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Track your campaign from launch to completion with detailed progress metrics. Update milestones, record achievements, and document outcomes. This transparency shows participants and supporters exactly how their involvement contributed to environmental goals, building credibility for future initiatives.
              </p>
            </div>

            <div className="border-l-4 border-teal-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Analyze Engagement Metrics
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Access comprehensive analytics including campaign reach, views, upvotes, and participation rates. Understand which initiatives resonate most with the community, identify trends in environmental engagement, and refine your approach based on data-driven insights. These metrics help optimize future campaigns for greater impact.
              </p>
            </div>

            <div className="border-l-4 border-teal-600 pl-6">
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Publish Educational Content
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Use the blog system to share authoritative articles, campaign updates, research findings, and environmental education. Link blog posts to specific campaigns to provide context and encourage participation. Position your organization as a thought leader while keeping the community informed and engaged with relevant, high-quality content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Platform Ecosystem */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            The Platform Ecosystem
          </h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Shared Authentication System
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Both individuals and organizations use a common authentication system with email verification. This unified approach ensures security while maintaining distinct role-based permissions. User data is stored in separate profile tables to accommodate the different information requirements of each user type.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Role-Based Access Control
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                The platform enforces strict role-based permissions ensuring individuals and organizations can only access features relevant to their account type. This maintains platform integrity, prevents misuse, and ensures that campaign creation and management remain the domain of verified organizations while individuals focus on participation and personal impact tracking.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Modular Architecture
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our backend is built with a modular architecture using controllers, routes, and middleware. This design ensures maintainability as the platform grows, enables rapid feature development, and provides scalability to handle increasing users and campaigns. The structured approach guarantees reliable performance and seamless user experiences.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Data Integration
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                Environmental data such as air pollution indices and climate indicators integrate seamlessly with user profiles and campaign information. This creates a holistic view where personal actions, organizational initiatives, and real-world environmental conditions connect meaningfully, transforming abstract concerns into concrete, actionable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Result */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            The Result
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed text-center" style={{ fontFamily: "'Inter', sans-serif" }}>
            By integrating environmental data with participatory campaigns and measurable outcomes, Verdu transforms abstract environmental concerns into actionable, trackable activities. The platform provides a structured, transparent, and scalable digital solution for coordinated climate action, impact tracking, and environmental awareness. Every feature works together to create an ecosystem where awareness becomes action, action becomes impact, and impact becomes lasting change.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;