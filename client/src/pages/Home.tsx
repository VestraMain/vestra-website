import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Navbar,
  Hero,
  ProcessTimeline,
  CTASection,
  Button
} from "@/components";
import { 
  Rocket, 
  TrendingUp, 
  Award, 
  FileText, 
  DollarSign,
  Users,
  Globe,
  Zap,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Phone,
  User
} from "lucide-react";

const journeyCards = [
  {
    id: "start",
    title: "Ready to start your own business?",
    description: "Launch the right way: entity setup, compliance, brand, and a credible digital presence in days—not months.",
    features: [
      "Business registration & EIN",
      "Strategic business plan", 
      "Visual identity & website",
      "Essential tools"
    ],
    icon: Rocket,
    cta: "Launch My Business",
    href: "/start",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "certify",
    title: "Ready to certify your business?", 
    description: "Qualify for M/WBE, SBE, DBE, EBE, ACDBE and more. We handle the process—documents, submissions, and compliance.",
    features: [
      "Fast application support",
      "Document checklist & portal",
      "Multi-cert strategy",
      "Renewal reminders"
    ],
    icon: Award,
    cta: "Get Certified", 
    href: "/certify",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "contracts",
    title: "I'm certified, I need contracts!",
    description: "We help you find, bid, and win. From daily bid scans to proposal writing and submission.",
    features: [
      "Opportunity sourcing",
      "Proposal strategy", 
      "Submission management",
      "Capability statements"
    ],
    icon: FileText,
    cta: "Win Contracts",
    href: "/contracts", 
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "capital",
    title: "I'm looking for extra capital for my business",
    description: "Get capital-ready: improve your profile, package your story, and access smart funding.",
    features: [
      "Business credit setup",
      "Lender-ready docs",
      "Grants support",
      "Lines of credit"
    ],
    icon: DollarSign,
    cta: "Find Funding",
    href: "/capital",
    color: "from-emerald-500 to-emerald-600"
  }
];

const whyVestraFeatures = [
  {
    icon: Users,
    title: "Government & Community Insiders",
    description: "Led by experts with deep connections in government and community affairs"
  },
  {
    icon: Award, 
    title: "Certification Specialists",
    description: "Proven track record helping businesses achieve M/WBE, SBE, DBE, and other certifications"
  },
  {
    icon: Zap,
    title: "AI-Powered Growth",
    description: "Cutting-edge automation and AI tools to accelerate your business growth"
  },
  {
    icon: MessageCircle,
    title: "Bilingual & Culturally Fluent", 
    description: "Serving diverse communities with multilingual support and cultural understanding"
  },
  {
    icon: CheckCircle,
    title: "Execution Over Theory",
    description: "Results-driven approach focused on implementation and measurable outcomes"
  }
];

const processSteps = [
  {
    id: "assessment",
    title: "Quick Assessment",
    description: "Complete our comprehensive business assessment to identify opportunities and challenges.",
    details: ["Business profile analysis", "Goal identification", "Challenge mapping", "Opportunity scoring"],
    icon: User,
    duration: "5 minutes"
  },
  {
    id: "strategy-call",
    title: "Strategy Call", 
    description: "Schedule a personalized consultation with our experts to discuss your goals.",
    details: ["Expert consultation", "Custom strategy discussion", "Q&A session", "Next steps planning"],
    icon: Phone,
    duration: "30 minutes"
  },
  {
    id: "action-plan",
    title: "Action Plan & Proposal",
    description: "Receive a detailed roadmap and proposal tailored to your business needs.",
    details: ["Custom roadmap creation", "Timeline development", "Resource requirements", "Investment proposal"],
    icon: FileText,
    duration: "2-3 days"
  },
  {
    id: "onboarding",
    title: "Onboarding & Portal Access",
    description: "Get started with dedicated portal access and personalized onboarding.",
    details: ["Client portal setup", "Team introductions", "Process walkthrough", "Initial planning session"],
    icon: Zap,
    duration: "1 week"
  },
  {
    id: "execution",
    title: "Execution & Reporting",
    description: "We execute the plan while providing regular progress reports and updates.",
    details: ["Strategy implementation", "Weekly progress reports", "Ongoing optimization", "Success metrics tracking"],
    icon: TrendingUp,
    duration: "Ongoing"
  }
];

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Your Business. Certified. Connected. Growing."
        subtitle="From launching your idea to winning government contracts, Vestra Strategies is your end-to-end partner for certifications, bidding, capital, and AI-powered growth."
        description="Trusted by ambitious small businesses across Colorado and the U.S."
        primaryCta="Start My Assessment"
        secondaryCta="Book a Strategy Call"
        onPrimaryClick={() => window.location.href = "/start"}
        onSecondaryClick={() => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")}
        showVideo={false}
        features={[
          "Government & Community Insiders",
          "Certification Specialists", 
          "AI-Powered Growth Tools",
          "Bilingual & Culturally Fluent"
        ]}
      />

      {/* Journey Picker Section */}
      <section className="py-20 bg-gray-50" data-testid="journey-picker-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vestra-navy mb-4">
              Where are you in your business journey?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {journeyCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => window.location.href = card.href}
                data-testid={`journey-card-${card.id}`}
              >
                <div className="h-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-vestra-orange/30">
                  {/* Card Header */}
                  <div className={`p-6 bg-gradient-to-br ${card.color} text-white relative overflow-hidden`}>
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4"
                    >
                      <card.icon className="w-6 h-6" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-2">
                      {card.title}
                    </h3>
                    
                    {/* Decorative circles */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {card.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-vestra-orange mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button
                      className="w-full bg-vestra-navy hover:bg-vestra-blue text-white group-hover:bg-vestra-orange transition-all duration-300"
                      data-testid={`button-${card.id}`}
                    >
                      {card.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vestra Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vestra-navy mb-4">
              Why Vestra Strategies
            </h2>
            <p className="text-xl text-vestra-slate max-w-3xl mx-auto">
              Your success is our mission. We combine insider knowledge, proven expertise, 
              and cutting-edge technology to accelerate your business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyVestraFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-vestra-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <feature.icon className="w-8 h-8 text-vestra-orange" />
                </motion.div>
                <h3 className="text-xl font-bold text-vestra-navy mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government & Community Affairs Section */}
      <section className="py-20 bg-vestra-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Government & Community Affairs
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Led by Christian Jimenez, Kevin Vargas, and Angelica Rodriguez, our team brings 
                deep expertise in government relations and community engagement to help your 
                business thrive in the public sector.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-vestra-orange mr-3" />
                    <span>Community outreach</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-vestra-orange mr-3" />
                    <span>Stakeholder mapping</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-vestra-orange mr-3" />
                    <span>Multilingual communications</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-vestra-orange mr-3" />
                    <span>Survey design</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-vestra-orange mr-3" />
                    <span>Vendor inclusion strategies</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-vestra-orange mr-3" />
                    <span>Public-private partnerships</span>
                  </div>
                </div>
              </div>

              <Button
                className="bg-vestra-orange hover:bg-vestra-orange/90 text-white px-8 py-3"
                onClick={() => window.location.href = "/services#government"}
              >
                Explore Government & Community Affairs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
                <div className="aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-vestra-orange opacity-50" />
                </div>
                <div className="mt-6 text-center">
                  <h4 className="text-xl font-semibold mb-2">Expert Leadership</h4>
                  <p className="text-gray-300">
                    Our team combines decades of experience in government relations, 
                    community affairs, and public sector consulting.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <ProcessTimeline 
        title="Our Proven 5-Step Process"
        subtitle="From assessment to execution, we guide you through every step of your business transformation journey."
        steps={processSteps}
        variant="horizontal"
        showDuration={true}
        animated={true}
      />

      {/* Final CTA Band */}
      <CTASection 
        title="Ready to Transform Your Business?"
        description="Take the first step toward certification, contracts, and capital. Our team is ready to help you unlock new opportunities and achieve sustainable growth."
        primaryButton={{
          text: "Start My Assessment",
          onClick: () => window.location.href = "/start"
        }}
        secondaryButton={{
          text: "Talk to a Strategist",
          onClick: () => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")
        }}
        variant="gradient"
        showContactInfo={true}
        backgroundPattern={true}
      />

    </>
  );
}