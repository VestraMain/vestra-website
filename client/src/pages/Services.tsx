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
  Award, 
  FileText, 
  Users, 
  Rocket,
  Bot,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Clock,
  Target,
  Building
} from "lucide-react";

const services = [
  {
    id: "certifications",
    title: "Small Business Certifications",
    price: "$4,500",
    priceDetails: "$2,500 + $400/mo × 6 months",
    description: "Navigate complex certification processes with expert guidance for M/WBE, SBE, DBE, EBE, and ACDBE certifications.",
    icon: Award,
    color: "purple",
    features: [
      "Eligibility assessment & strategy",
      "Document preparation & review", 
      "Application submission & tracking",
      "Agency communication handling",
      "Compliance support & renewals"
    ],
    link: "/certify",
    timeline: "3-6 months to completion"
  },
  {
    id: "contracts",
    title: "Government Contracts Bidding",
    price: "$700/Month",
    priceDetails: "Complete monthly bidding support",
    description: "Complete bidding support from opportunity identification to proposal submission and contract management.",
    icon: FileText,
    color: "orange",
    features: [
      "Daily bid opportunity scanning",
      "Proposal strategy & development",
      "Technical writing & submission",
      "SAM profile optimization",
      "Past performance documentation"
    ],
    link: "/contracts",
    timeline: "Ongoing monthly support"
  },
  {
    id: "outreach",
    title: "Community Outreach",
    price: "Project-specific",
    priceDetails: "Custom pricing based on scope",
    description: "Strategic community engagement and outreach programs tailored to your business goals and target audience.",
    icon: Users,
    color: "blue",
    features: [
      "Community needs assessment",
      "Outreach strategy development",
      "Event planning & execution",
      "Partnership facilitation",
      "Impact measurement & reporting"
    ],
    link: "/contact",
    timeline: "Varies by project scope"
  },
  {
    id: "launch",
    title: "Launch Your Business",
    price: "$1,500",
    priceDetails: "One-time comprehensive package",
    description: "Complete business setup from entity registration to digital presence, positioning you for sustainable growth.",
    icon: Rocket,
    color: "green",
    features: [
      "Business entity registration & EIN",
      "Professional business plan",
      "Complete brand identity package",
      "Professional website design",
      "CRM system setup & training"
    ],
    link: "/start",
    timeline: "2-3 weeks to launch"
  }
];

const colorClasses = {
  purple: {
    bg: "from-purple-600 to-purple-700",
    icon: "bg-purple-100 text-purple-600",
    button: "bg-purple-600 hover:bg-purple-700",
    border: "border-purple-200 bg-purple-50"
  },
  orange: {
    bg: "from-orange-500 to-red-600", 
    icon: "bg-orange-100 text-orange-600",
    button: "bg-orange-600 hover:bg-orange-700",
    border: "border-orange-200 bg-orange-50"
  },
  blue: {
    bg: "from-blue-600 to-blue-700",
    icon: "bg-blue-100 text-blue-600", 
    button: "bg-blue-600 hover:bg-blue-700",
    border: "border-blue-200 bg-blue-50"
  },
  green: {
    bg: "from-green-600 to-green-700",
    icon: "bg-green-100 text-green-600",
    button: "bg-green-600 hover:bg-green-700", 
    border: "border-green-200 bg-green-50"
  },
  emerald: {
    bg: "from-emerald-500 to-emerald-600",
    icon: "bg-emerald-100 text-emerald-600",
    button: "bg-emerald-600 hover:bg-emerald-700",
    border: "border-emerald-200 bg-emerald-50"
  }
};

export default function Services() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Comprehensive Business Services"
        subtitle="Everything You Need to Start, Grow, and Scale"
        description="From business launch to government contracting, our comprehensive suite of services helps entrepreneurs and businesses achieve their goals with expert guidance and proven strategies."
        primaryCta="Explore Services"
        secondaryCta="Schedule Consultation"
        onPrimaryClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
        onSecondaryClick={() => window.location.href = "/contact"}
        showVideo={false}
        features={[
          "Expert guidance at every stage",
          "Proven strategies and processes", 
          "Comprehensive support packages",
          "Results-driven approach"
        ]}
      />

      {/* Services Grid */}
      <section className="py-20 bg-gray-50" id="services-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vestra-navy mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-vestra-slate max-w-3xl mx-auto">
              Choose from our comprehensive range of business services designed to help you start strong, grow smart, and scale successfully.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const colors = colorClasses[service.color as keyof typeof colorClasses];
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={index === 2 ? "lg:col-span-2 xl:col-span-1" : ""}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colors.icon}`}>
                          <service.icon className="w-7 h-7" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-vestra-navy">{service.price}</div>
                          <div className="text-sm text-gray-500">{service.priceDetails}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl text-vestra-navy group-hover:text-vestra-orange transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <div className="space-y-3 mb-6">
                        <h4 className="font-semibold text-sm text-vestra-navy">What's Included:</h4>
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {service.timeline}
                        </div>
                      </div>

                      <Button 
                        className={`w-full ${colors.button}`}
                        onClick={() => window.location.href = service.link}
                        data-testid={`button-${service.id}`}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-vestra-navy mb-4">
              Why Choose Vestra Strategies?
            </h2>
            <p className="text-xl text-vestra-slate">
              Our comprehensive approach sets us apart from typical consultants
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-vestra-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-vestra-navy mb-4">Results-Driven Approach</h3>
              <p className="text-gray-600">
                We don't just provide advice - we execute strategies and measure results to ensure your success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-vestra-navy rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-vestra-navy mb-4">Government Expertise</h3>
              <p className="text-gray-600">
                Our team includes former government insiders who understand the systems from the inside out.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-vestra-navy mb-4">Technology-Powered</h3>
              <p className="text-gray-600">
                We leverage the latest AI and automation technologies to give your business a competitive edge.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
        title="Ready to Transform Your Business?"
        description="Choose the service that fits your needs, or let us create a custom solution that combines multiple services for maximum impact."
        primaryButton={{
          text: "Schedule Consultation",
          onClick: () => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")
        }}
        secondaryButton={{
          text: "View All Services",
          onClick: () => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })
        }}
        variant="gradient"
        showContactInfo={true}
        backgroundPattern={true}
      />

    </>
  );
}