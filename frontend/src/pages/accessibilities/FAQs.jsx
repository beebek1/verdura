import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is Verdura?",
          answer: "Verdura is a web-based environmental engagement platform that connects individuals and organizations through data-driven environmental action. We help you track your personal environmental footprint, participate in verified campaigns, and see measurable impact from your efforts."
        },
        {
          question: "How do I create an account?",
          answer: "Creating an account is simple. Choose whether you're registering as an individual or organization, provide your email address and basic information, then verify your email. Individual accounts give you access to footprint tracking and campaign participation, while organization accounts enable campaign creation and management."
        },
        {
          question: "Is Verdura free to use?",
          answer: "Yes, Verdura is free for individual users to track their footprint and participate in campaigns. Organizations can also register and create campaigns at no cost. Our mission is to make environmental action accessible to everyone."
        },
        {
          question: "What makes Verdura different from other environmental platforms?",
          answer: "Verdura uniquely combines personal footprint tracking with verified organizational campaigns and real environmental data. You can see exactly how your participation in campaigns reduces your calculated footprint, creating a transparent connection between awareness, action, and impact."
        }
      ]
    },
    {
      category: "For Individuals",
      questions: [
        {
          question: "How does footprint tracking work?",
          answer: "You input lifestyle data including your energy consumption, transportation methods, and daily consumption patterns. Our system calculates your estimated environmental footprint based on these inputs, providing a clear baseline. As you update your information and participate in campaigns, you can see how your footprint changes over time."
        },
        {
          question: "How do I join a campaign?",
          answer: "Browse available campaigns created by verified organizations. Each campaign includes detailed information about goals, location, timeline, and expected impact. Simply click to register your participation. Your involvement will be tracked and reflected in your personal impact dashboard."
        },
        {
          question: "What are badges and contribution levels?",
          answer: "Badges and contribution levels are recognition elements that reflect your engagement and impact. As you participate in campaigns and reduce your footprint, you earn badges for various achievements. Contribution levels show your overall involvement in the environmental movement on our platform."
        },
        {
          question: "Can I see how my actions reduce my footprint?",
          answer: "Yes, your personal dashboard shows transparent metrics connecting your campaign participation to footprint reduction. When you participate in a tree planting campaign, waste reduction initiative, or other verified activity, the impact is reflected in your overall environmental footprint calculation."
        },
        {
          question: "How accurate is the footprint calculation?",
          answer: "Our footprint calculations are based on established environmental impact methodologies and research. While they provide estimates rather than exact measurements, they offer valuable insights into your environmental impact and how different lifestyle choices affect your footprint."
        }
      ]
    },
    {
      category: "For Organizations",
      questions: [
        {
          question: "Who can register as an organization?",
          answer: "NGOs, INGOs, environmental groups, and other verified entities working on environmental initiatives can register as organizations. All organizations undergo a verification process including email confirmation and credential validation to ensure legitimacy."
        },
        {
          question: "What is the verification process?",
          answer: "The verification process includes email confirmation, credential validation, and review of your organization's environmental mission and activities. This ensures that all campaigns on our platform come from legitimate, accountable entities, building trust with individual users."
        },
        {
          question: "What types of campaigns can we create?",
          answer: "You can create various environmental initiatives including plantation drives, community clean-ups, awareness programs, sustainability challenges, waste reduction campaigns, and other structured environmental activities. Each campaign should have clear goals, timelines, and measurable outcomes."
        },
        {
          question: "How do we track campaign participation?",
          answer: "Our platform provides real-time tracking of volunteer registrations, participant lists, and engagement metrics. You can monitor who has signed up, track attendance, and manage volunteer communications efficiently through your organization dashboard."
        },
        {
          question: "Can we publish content beyond campaigns?",
          answer: "Yes, organizations can publish blog posts covering environmental topics, campaign results, success stories, and educational content. Many posts can be linked to specific campaigns, allowing you to inform the community and encourage participation simultaneously."
        },
        {
          question: "What analytics are available?",
          answer: "You have access to comprehensive analytics including campaign reach, views, upvotes, participation rates, and engagement trends. These metrics help you understand which initiatives resonate most with the community and optimize future campaigns for greater impact."
        }
      ]
    },
    {
      category: "Campaigns & Participation",
      questions: [
        {
          question: "How are campaigns verified?",
          answer: "All campaigns are created by verified organizations that have undergone our credential validation process. This ensures that every campaign on the platform represents a legitimate environmental initiative with clear goals and accountability."
        },
        {
          question: "Can I participate in multiple campaigns?",
          answer: "Absolutely. You can participate in as many campaigns as you'd like. Each participation is tracked separately in your dashboard, and all contributions count toward your overall impact metrics and badge achievements."
        },
        {
          question: "What happens after I register for a campaign?",
          answer: "After registration, your participation is recorded in both your personal dashboard and the campaign's participant list. Organizations can communicate updates and details about the campaign. Upon completion, your contribution is reflected in your impact metrics."
        },
        {
          question: "Can campaigns be local or must they be global?",
          answer: "Campaigns can be local, regional, national, or global. Many campaigns are location-specific, such as community clean-ups or local plantation drives. Others may be awareness campaigns or challenges that anyone can participate in regardless of location."
        }
      ]
    },
    {
      category: "Data & Privacy",
      questions: [
        {
          question: "What environmental data does Verdura provide?",
          answer: "We integrate real-time environmental data including air pollution indices, climate indicators, and other environmental metrics relevant to your region and globally. This data helps contextualize your personal impact within broader environmental challenges."
        },
        {
          question: "How is my personal information used?",
          answer: "Your personal information is used solely to provide platform services including footprint tracking, campaign participation, and personalized impact reporting. We maintain strict privacy standards and never share your data with third parties without consent."
        },
        {
          question: "Can I delete my account?",
          answer: "Yes, you can delete your account at any time. Contact our support team at support@verdura.com and we'll process your request. Note that deleting your account will remove your participation history and impact data permanently."
        },
        {
          question: "Is my footprint data private?",
          answer: "Yes, your individual footprint data is private and only visible to you. While aggregate, anonymous data may be used for platform analytics and environmental insights, your specific personal information and footprint details remain confidential."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What browsers are supported?",
          answer: "Verdura works on all modern web browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend keeping your browser updated to the latest version."
        },
        {
          question: "I'm having trouble logging in. What should I do?",
          answer: "First, ensure you've verified your email address. If you've forgotten your password, use the password reset option. If problems persist, contact our technical support team at support@verdura.com with details about the issue."
        },
        {
          question: "How do I update my profile information?",
          answer: "Log into your account and navigate to your profile settings. You can update your personal information, lifestyle inputs for footprint tracking, and communication preferences. Changes are saved automatically."
        },
        {
          question: "Can I access Verdura on mobile devices?",
          answer: "Yes, Verdura is fully responsive and works on smartphones and tablets. Simply access the platform through your mobile browser for the same functionality you'd have on desktop."
        }
      ]
    }
  ];

  let globalIndex = 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-bold mb-8 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
            Frequently Asked <span className="text-emerald-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Find answers to common questions about using Verdura, tracking your impact, and participating in environmental campaigns.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className="inline-block px-4 py-2 bg-emerald-50 rounded-full mb-4">
                  <span className="text-emerald-600 text-sm font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {category.category.toUpperCase()}
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {category.category}
                </h2>
              </div>
              
              <div className="space-y-4">
                {category.questions.map((faq) => {
                  const currentIndex = globalIndex++;
                  return (
                    <div
                      key={currentIndex}
                      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="text-xl font-semibold text-gray-900 pr-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {faq.question}
                        </span>
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-xl transition-transform duration-300 ${openIndex === currentIndex ? 'rotate-180' : ''}`}>
                          <span>{openIndex === currentIndex ? '−' : '+'}</span>
                        </div>
                      </button>
                      
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openIndex === currentIndex ? 'max-h-96 border-t border-gray-100' : 'max-h-0'
                        }`}
                      >
                        <div className="px-8 py-6 bg-gradient-to-br from-emerald-50/30 to-teal-50/30">
                          <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              If you couldn't find the answer you were looking for, our support team is here to help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mb-6"></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Email Support
              </h3>
              <p className="text-gray-600 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                support@verdura.com
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mb-6"></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Response Time
              </h3>
              <p className="text-gray-600 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                Within 24-48 hours
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mb-6"></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                Contact Page
              </h3>
              <p className="text-gray-600 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                Visit our contact page
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;