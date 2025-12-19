import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Zap, Shield, Target, Users, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: any;
  highlight?: boolean;
}

interface FeatureListProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  layout?: "grid" | "list" | "checklist";
  showCTA?: boolean;
  ctaText?: string;
  onCTAClick?: () => void;
  variant?: "default" | "compact" | "detailed";
}

const defaultFeatures: Feature[] = [
  {
    id: "expert-guidance",
    title: "Expert Guidance",
    description: "Work with seasoned business consultants who bring decades of experience across multiple industries.",
    icon: Users,
    highlight: true
  },
  {
    id: "proven-strategies",
    title: "Proven Strategies", 
    description: "Implement battle-tested methodologies that have helped thousands of businesses achieve sustainable growth.",
    icon: Target
  },
  {
    id: "comprehensive-support",
    title: "Comprehensive Support",
    description: "From initial planning to execution and beyond, we provide end-to-end assistance for all your business needs.",
    icon: Shield
  },
  {
    id: "rapid-results",
    title: "Rapid Results",
    description: "See measurable improvements in your business performance within the first 90 days of implementation.",
    icon: Zap,
    highlight: true
  },
  {
    id: "growth-acceleration",
    title: "Growth Acceleration",
    description: "Scale your business faster with our proprietary frameworks and industry best practices.",
    icon: TrendingUp
  },
  {
    id: "certification-support",
    title: "Certification Support",
    description: "Achieve industry certifications and compliance standards that unlock new opportunities and markets.",
    icon: Award
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

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
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

export default function FeatureList({
  title = "Why Choose Vestra Strategies",
  subtitle = "We provide comprehensive business solutions that drive real results and sustainable growth for your organization.",
  features = defaultFeatures,
  layout = "grid",
  showCTA = true,
  ctaText = "Explore Our Services",
  onCTAClick,
  variant = "default"
}: FeatureListProps) {

  const getLayoutClasses = () => {
    switch (layout) {
      case "list":
        return "space-y-6";
      case "checklist":
        return "grid md:grid-cols-2 gap-4";
      default:
        return "grid md:grid-cols-2 lg:grid-cols-3 gap-8";
    }
  };

  const renderFeature = (feature: Feature, index: number) => {
    if (layout === "checklist") {
      return (
        <motion.div
          key={feature.id}
          variants={itemVariants}
          className="flex items-start space-x-3"
          data-testid={`feature-${feature.id}`}
        >
          <CheckCircle className="w-6 h-6 text-vestra-orange flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-semibold text-vestra-navy mb-1">{feature.title}</h4>
            {variant !== "compact" && (
              <p className="text-gray-600 text-sm">{feature.description}</p>
            )}
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div
        key={feature.id}
        variants={itemVariants}
        whileHover={{ y: -4 }}
        className={`group ${
          layout === "list" 
            ? "flex items-start space-x-6 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:border-vestra-orange/30 transition-all duration-300"
            : "text-center"
        } ${feature.highlight ? "ring-2 ring-vestra-orange/20" : ""}`}
        data-testid={`feature-${feature.id}`}
      >
        {feature.icon && (
          <motion.div
            whileHover={{ rotate: 12, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className={`${
              layout === "list" 
                ? "w-12 h-12 bg-vestra-orange/10 rounded-xl flex items-center justify-center flex-shrink-0"
                : "w-16 h-16 bg-vestra-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
            }`}
          >
            <feature.icon className={`${layout === "list" ? "w-6 h-6" : "w-8 h-8"} text-vestra-orange`} />
          </motion.div>
        )}

        <div className={layout === "list" ? "flex-1" : ""}>
          <h3 className={`font-bold text-vestra-navy mb-3 ${
            variant === "detailed" ? "text-xl" : "text-lg"
          }`}>
            {feature.title}
            {feature.highlight && (
              <span className="ml-2 inline-block w-2 h-2 bg-vestra-orange rounded-full" />
            )}
          </h3>
          
          {variant !== "compact" && (
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          )}

          {layout === "list" && showCTA && (
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <Button
                variant="ghost"
                size="sm"
                className="text-vestra-orange hover:text-vestra-navy hover:bg-vestra-orange/10"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-white" data-testid="feature-list-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-vestra-navy mb-4" data-testid="feature-list-title">
            {title}
          </h2>
          <p className="text-xl text-vestra-slate max-w-3xl mx-auto" data-testid="feature-list-subtitle">
            {subtitle}
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={getLayoutClasses()}
        >
          {features.map((feature, index) => renderFeature(feature, index))}
        </motion.div>

        {/* CTA Section */}
        {showCTA && layout !== "list" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              className="bg-vestra-orange hover:bg-vestra-orange/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              onClick={onCTAClick}
              data-testid="button-feature-list-cta"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        )}

        {/* Additional Info */}
        {variant === "detailed" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-50 rounded-2xl p-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-vestra-navy mb-4">
                Ready to Experience the Difference?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join over 250 businesses that have transformed their operations and achieved 
                remarkable growth with our strategic solutions and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  className="bg-vestra-navy hover:bg-vestra-blue text-white"
                  onClick={() => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")}
                  data-testid="button-schedule-consultation"
                >
                  Schedule Free Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white"
                  data-testid="button-view-case-studies"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}