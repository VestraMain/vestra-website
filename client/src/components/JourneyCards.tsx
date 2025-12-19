import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { 
  Lightbulb, 
  TrendingUp, 
  Award, 
  FileText, 
  DollarSign,
  ArrowRight,
  Users,
  Target,
  Shield,
  Briefcase,
  PiggyBank
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface JourneyCard {
  id: string;
  title: string;
  description: string;
  icon: any;
  href: string;
  color: string;
  features: string[];
  cta: string;
}

const journeyCards: JourneyCard[] = [
  {
    id: "start",
    title: "Start Your Business",
    description: "Launch your business with confidence using our comprehensive startup guidance and business formation services.",
    icon: Lightbulb,
    href: "/start",
    color: "from-blue-500 to-blue-600",
    features: [
      "Business plan development",
      "Legal structure guidance", 
      "Market research & analysis",
      "Initial funding strategies"
    ],
    cta: "Start Building"
  },
  {
    id: "grow",
    title: "Scale & Grow",
    description: "Accelerate your business growth with proven strategies, operational optimization, and market expansion plans.",
    icon: TrendingUp,
    href: "/grow",
    color: "from-green-500 to-green-600",
    features: [
      "Growth strategy development",
      "Operations optimization",
      "Market expansion planning",
      "Performance tracking"
    ],
    cta: "Accelerate Growth"
  },
  {
    id: "certify",
    title: "Get Certified",
    description: "Achieve industry certifications and compliance standards that open doors to new opportunities and markets.",
    icon: Award,
    href: "/certify",
    color: "from-purple-500 to-purple-600",
    features: [
      "Industry certifications",
      "Compliance assistance",
      "Quality standards",
      "Certification maintenance"
    ],
    cta: "Get Certified"
  },
  {
    id: "contracts",
    title: "Win Contracts",
    description: "Access government and corporate contracting opportunities with our proposal writing and compliance support.",
    icon: FileText,
    href: "/contracts",
    color: "from-orange-500 to-orange-600",
    features: [
      "Government contracting",
      "Proposal writing",
      "Compliance support",
      "Bid management"
    ],
    cta: "Win Contracts"
  },
  {
    id: "capital",
    title: "Secure Capital",
    description: "Access funding sources, prepare investor presentations, and secure the capital needed for your business growth.",
    icon: DollarSign,
    href: "/capital",
    color: "from-emerald-500 to-emerald-600",
    features: [
      "Funding source identification",
      "Investor presentations",
      "Financial modeling",
      "Due diligence support"
    ],
    cta: "Secure Funding"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

interface JourneyCardsProps {
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
}

export default function JourneyCards({ 
  title = "Your Business Journey",
  subtitle = "Choose the path that fits your current business stage and goals",
  showTitle = true 
}: JourneyCardsProps) {
  const [, navigate] = useLocation();

  const handleCardClick = (href: string) => {
    navigate(href);
  };

  return (
    <section className="py-20 bg-gray-50" data-testid="journey-cards-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-vestra-navy mb-4" data-testid="journey-title">
              {title}
            </h2>
            <p className="text-xl text-vestra-slate max-w-3xl mx-auto" data-testid="journey-subtitle">
              {subtitle}
            </p>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {journeyCards.map((card, index) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
              onClick={() => handleCardClick(card.href)}
              data-testid={`journey-card-${card.id}`}
            >
              <div className="relative h-full bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 group-hover:shadow-2xl group-hover:border-vestra-orange/30">
                {/* Card Header with Icon */}
                <div className={`relative p-6 bg-gradient-to-br ${card.color} text-white`}>
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4"
                  >
                    <card.icon className="w-6 h-6" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-2">
                    {card.title}
                  </h3>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {card.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {card.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-vestra-orange rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className="w-full bg-vestra-navy hover:bg-vestra-blue text-white group-hover:bg-vestra-orange transition-all duration-300"
                    data-testid={`button-journey-${card.id}`}
                  >
                    {card.cta}
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.div>
                  </Button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-vestra-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-vestra-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-vestra-orange" />
                </div>
                <h4 className="font-semibold text-vestra-navy mb-2">Expert Guidance</h4>
                <p className="text-sm text-gray-600">
                  Work with experienced consultants who understand your industry
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-vestra-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-vestra-orange" />
                </div>
                <h4 className="font-semibold text-vestra-navy mb-2">Proven Results</h4>
                <p className="text-sm text-gray-600">
                  Track record of helping businesses achieve their goals
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-vestra-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-vestra-orange" />
                </div>
                <h4 className="font-semibold text-vestra-navy mb-2">End-to-End Support</h4>
                <p className="text-sm text-gray-600">
                  Comprehensive solutions from start to finish
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}