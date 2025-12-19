import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Navbar,
  Hero,
  CTASection,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { 
  Award, 
  FileText, 
  Users, 
  Rocket,
  Bot,
  ArrowRight,
  Calendar,
  Clock,
  User,
  BookOpen
} from "lucide-react";

const resourceCategories = {
  certifications: {
    title: "Business Certifications",
    icon: Award,
    color: "purple",
    description: "Navigate the complex world of business certifications with expert insights and practical guidance.",
    articles: [
      {
        title: "The Complete Guide to M/WBE Certification: Requirements, Benefits, and Application Process",
        preview: "Learn everything you need to know about Minority and Women Business Enterprise certification, from eligibility requirements to maximizing your competitive advantage.",
        readTime: "8 min read",
        author: "Christian Jimenez",
        date: "November 2024",
        category: "Certification Guide"
      },
      {
        title: "DBE vs SBE vs EBE: Which Business Certification is Right for Your Company?",
        preview: "Compare Disadvantaged Business Enterprise, Small Business Enterprise, and Emerging Business Enterprise certifications to choose the best path forward.",
        readTime: "6 min read", 
        author: "Karen Licona",
        date: "October 2024",
        category: "Certification Strategy"
      },
      {
        title: "5 Common Mistakes That Kill Your Certification Application (And How to Avoid Them)",
        preview: "Avoid these costly errors that cause 60% of certification applications to fail. Learn what evaluators really look for in successful applications.",
        readTime: "5 min read",
        author: "Angelica Rodriguez", 
        date: "September 2024",
        category: "Application Tips"
      },
      {
        title: "How ACDBE Certification Opens Airport Concession Opportunities Worth Millions",
        preview: "Discover how Airport Concessions Disadvantaged Business Enterprise certification can unlock lucrative airport business opportunities.",
        readTime: "7 min read",
        author: "Kevin Vargas",
        date: "August 2024", 
        category: "Opportunity Analysis"
      },
      {
        title: "Maintaining Your Business Certifications: Renewal Requirements and Compliance Best Practices",
        preview: "Protect your certification investment with proven strategies for renewal compliance, record keeping, and ongoing eligibility maintenance.",
        readTime: "4 min read",
        author: "Kevin Vargas",
        date: "July 2024",
        category: "Compliance"
      }
    ]
  },
  contracts: {
    title: "Government Contracts",
    icon: FileText,
    color: "orange", 
    description: "Master government contracting with insider strategies for finding, bidding, and winning lucrative contracts.",
    articles: [
      {
        title: "The Government Contractor's Playbook: How to Find and Win Your First Federal Contract",
        preview: "Step-by-step guide to entering the government contracting market, from SAM registration to proposal submission and everything in between.",
        readTime: "12 min read",
        author: "Christian Jimenez",
        date: "November 2024",
        category: "Getting Started"
      },
      {
        title: "SAM.gov Mastery: Optimizing Your Profile to Win More Bids",
        preview: "Transform your System for Award Management profile from invisible to irresistible. Learn the secrets that government buyers use to find contractors.",
        readTime: "9 min read",
        author: "Kevin Vargas", 
        date: "October 2024",
        category: "Profile Optimization"
      },
      {
        title: "Writing Winning Proposals: The 7-Step Formula That Wins 40% More Government Contracts",
        preview: "Master the art and science of proposal writing with proven templates, evaluation criteria insights, and competitive positioning strategies.",
        readTime: "15 min read",
        author: "Angelica Rodriguez",
        date: "September 2024", 
        category: "Proposal Writing"
      },
      {
        title: "Subcontracting Success: How to Build Profitable Relationships with Prime Contractors",
        preview: "Build a sustainable subcontracting business by developing strategic partnerships with established prime contractors in your industry.",
        readTime: "8 min read",
        author: "Karen Licona",
        date: "August 2024",
        category: "Subcontracting"
      },
      {
        title: "Past Performance Documentation: Building the Resume That Wins Million-Dollar Contracts",
        preview: "Create compelling past performance narratives that demonstrate your capability and reliability to government evaluation teams.",
        readTime: "6 min read",
        author: "Christian Jimenez",
        date: "July 2024",
        category: "Documentation"
      }
    ]
  },
  outreach: {
    title: "Community Outreach",
    icon: Users,
    color: "blue",
    description: "Build meaningful community connections that drive business growth and social impact.",
    articles: [
      {
        title: "Strategic Community Engagement: How Local Relationships Drive Business Growth",
        preview: "Transform community involvement from charitable activity to strategic business development with proven engagement frameworks and measurement systems.",
        readTime: "10 min read",
        author: "Angelica Rodriguez",
        date: "November 2024",
        category: "Strategy"
      },
      {
        title: "Corporate Social Responsibility That Actually Generates ROI for Small Businesses",
        preview: "Design CSR programs that create genuine community impact while building brand awareness, customer loyalty, and competitive advantages.",
        readTime: "7 min read",
        author: "Kevin Vargas",
        date: "October 2024", 
        category: "CSR Programs"
      },
      {
        title: "Partnership Power: Building Alliances with Community Organizations and Local Government",
        preview: "Develop strategic partnerships with nonprofits, community groups, and municipal organizations that amplify your outreach impact and business opportunities.",
        readTime: "9 min read",
        author: "Karen Licona",
        date: "September 2024",
        category: "Partnerships"
      },
      {
        title: "Event Marketing That Matters: Planning Community Events That Build Your Business",
        preview: "Create community events that generate authentic engagement, build local brand awareness, and establish your business as a community leader.",
        readTime: "8 min read", 
        author: "Angelica Rodriguez",
        date: "August 2024",
        category: "Event Planning"
      },
      {
        title: "Measuring Community Impact: KPIs and Metrics That Matter for Business and Community Success",
        preview: "Develop measurement systems that track both community impact and business outcomes, proving ROI and guiding future outreach investments.",
        readTime: "5 min read",
        author: "Christian Jimenez",
        date: "July 2024",
        category: "Measurement"
      }
    ]
  },
  launch: {
    title: "Business Launch",
    icon: Rocket,
    color: "green",
    description: "Launch your business with confidence using proven strategies for setup, branding, and early growth.",
    articles: [
      {
        title: "The Entrepreneur's Launch Checklist: 50 Essential Steps to Start Your Business Right",
        preview: "Complete guide to business formation, from entity selection and registration to banking, insurance, and legal compliance requirements.",
        readTime: "14 min read",
        author: "Tobias Lopez",
        date: "November 2024", 
        category: "Business Setup"
      },
      {
        title: "LLC vs Corporation vs Partnership: Choosing the Right Business Structure for Your Goals",
        preview: "Navigate entity selection with clear comparisons of tax implications, liability protection, operational flexibility, and growth considerations.",
        readTime: "11 min read",
        author: "Christian Jimenez",
        date: "October 2024",
        category: "Legal Structure"
      },
      {
        title: "Building a Brand That Sells: Visual Identity, Messaging, and Market Positioning for New Businesses",
        preview: "Create a compelling brand that attracts your ideal customers and differentiates you from competitors in crowded markets.",
        readTime: "10 min read",
        author: "Karen Licona", 
        date: "September 2024",
        category: "Branding"
      },
      {
        title: "First-Year Financial Management: Bookkeeping, Cash Flow, and Tax Strategy for New Business Owners",
        preview: "Establish financial systems and practices that support growth while maintaining compliance and maximizing tax advantages.",
        readTime: "9 min read",
        author: "Kevin Vargas",
        date: "August 2024",
        category: "Financial Management"
      },
      {
        title: "Digital Foundation: Website, CRM, and Technology Stack Essentials for Modern Businesses",
        preview: "Build a technology foundation that scales with your business growth, from website development to customer management systems.",
        readTime: "7 min read",
        author: "Angelica Rodriguez",
        date: "July 2024",
        category: "Technology"
      }
    ]
  }
};

const colorClasses = {
  purple: "text-purple-600 bg-purple-100",
  orange: "text-orange-600 bg-orange-100", 
  blue: "text-blue-600 bg-blue-100",
  green: "text-green-600 bg-green-100",
  emerald: "text-emerald-600 bg-emerald-100"
};

export default function Resources() {
  const [activeTab, setActiveTab] = useState("certifications");

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Business Resources & Insights"
        subtitle="Expert Knowledge to Accelerate Your Success"
        description="Access our comprehensive library of guides, strategies, and insights from government contracting experts and business development specialists. Stay ahead with actionable content that drives results."
        primaryCta="Explore Resources"
        secondaryCta="Subscribe to Updates"
        onPrimaryClick={() => document.getElementById('resources-content')?.scrollIntoView({ behavior: 'smooth' })}
        onSecondaryClick={() => window.location.href = "/contact"}
        showVideo={false}
        features={[
          "Expert insights from industry professionals",
          "Step-by-step implementation guides", 
          "Real-world case studies and examples",
          "Regularly updated content"
        ]}
      />

      {/* Resources Content */}
      <section className="py-20 bg-gray-50" id="resources-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-vestra-navy mb-4">
              Knowledge Center
            </h2>
            <p className="text-xl text-vestra-slate max-w-3xl mx-auto">
              Explore our collection of expert-written articles, guides, and resources organized by business development focus area.
            </p>
          </motion.div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-8 bg-white border border-gray-200 p-1">
              {Object.entries(resourceCategories).map(([key, category]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex items-center space-x-2 data-[state=active]:bg-vestra-navy data-[state=active]:text-white"
                  data-testid={`tab-${key}`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(resourceCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Category Header */}
                  <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-200">
                    <div className="flex items-start">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mr-6 ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                        <category.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-vestra-navy mb-3">{category.title}</h3>
                        <p className="text-gray-600 text-lg">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Articles Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.articles.map((article, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                          <CardHeader>
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses[category.color as keyof typeof colorClasses]}`}>
                                {article.category}
                              </span>
                              <div className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {article.readTime}
                              </div>
                            </div>
                            <CardTitle className="text-lg leading-tight group-hover:text-vestra-orange transition-colors">
                              {article.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 mb-6 line-clamp-3">{article.preview}</p>
                            
                            <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                              <div className="flex items-center">
                                <User className="w-4 h-4 mr-2" />
                                {article.author}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {article.date}
                              </div>
                            </div>

                            <Button 
                              variant="outline" 
                              className="w-full border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white"
                              data-testid={`button-read-${index}`}
                            >
                              Read Article
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-vestra-navy to-vestra-blue rounded-2xl p-8 text-white">
              <BookOpen className="w-16 h-16 mx-auto mb-6 text-vestra-orange" />
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl text-blue-200 mb-8">
                Get the latest business development insights, government contracting updates, and expert strategies delivered to your inbox.
              </p>
              
              <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                  data-testid="input-newsletter-email"
                />
                <Button 
                  className="bg-vestra-orange hover:bg-vestra-orange/90 text-white"
                  data-testid="button-subscribe-newsletter"
                >
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm text-blue-200 mt-4">
                No spam, unsubscribe anytime. Join 1,200+ business owners getting weekly insights.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
        title="Need Personalized Guidance?"
        description="While our resources provide valuable insights, sometimes you need expert guidance tailored to your specific situation. Let's discuss your business goals and create a custom strategy."
        primaryButton={{
          text: "Schedule Consultation", 
          onClick: () => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")
        }}
        secondaryButton={{
          text: "View Our Services",
          onClick: () => window.location.href = "/services"
        }}
        variant="navy"
        showContactInfo={true}
        backgroundPattern={true}
      />

    </>
  );
}