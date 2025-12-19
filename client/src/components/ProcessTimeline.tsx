import { motion } from "framer-motion";
import { CheckCircle, Clock, ArrowRight, Users, FileText, Zap, TrendingUp, Award } from "lucide-react";

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: any;
  duration: string;
  details: string[];
  status?: "completed" | "current" | "upcoming";
}

interface ProcessTimelineProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  variant?: "vertical" | "horizontal";
  showDuration?: boolean;
  animated?: boolean;
}

const defaultSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery & Assessment",
    description: "We analyze your current business situation, goals, and challenges to create a tailored strategic plan.",
    icon: Users,
    duration: "1-2 weeks",
    details: [
      "Business assessment and audit",
      "Market analysis and competitive research",
      "Goal setting and priority identification",
      "Resource evaluation and gap analysis"
    ],
    status: "completed"
  },
  {
    id: "strategy",
    title: "Strategy Development",
    description: "Our experts develop a comprehensive roadmap with actionable strategies aligned with your objectives.",
    icon: FileText,
    duration: "2-3 weeks",
    details: [
      "Strategic plan creation",
      "Implementation roadmap design",
      "Resource allocation planning",
      "Risk assessment and mitigation"
    ],
    status: "current"
  },
  {
    id: "implementation",
    title: "Implementation & Execution",
    description: "We work alongside your team to execute the strategy and ensure successful implementation.",
    icon: Zap,
    duration: "4-12 weeks",
    details: [
      "Phase-by-phase execution",
      "Team training and support",
      "Process optimization",
      "Quality assurance and testing"
    ],
    status: "upcoming"
  },
  {
    id: "optimization",
    title: "Monitoring & Optimization",
    description: "Continuous monitoring and optimization to ensure sustained growth and improved performance.",
    icon: TrendingUp,
    duration: "Ongoing",
    details: [
      "Performance tracking and analytics",
      "Regular strategy reviews",
      "Continuous improvement initiatives",
      "Adaptation to market changes"
    ],
    status: "upcoming"
  },
  {
    id: "success",
    title: "Success & Growth",
    description: "Achieve your business goals and establish sustainable growth patterns for long-term success.",
    icon: Award,
    duration: "3-6 months",
    details: [
      "Goal achievement verification",
      "Growth pattern establishment",
      "Long-term sustainability planning",
      "Success celebration and next phase planning"
    ],
    status: "upcoming"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const stepVariants = {
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
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function ProcessTimeline({
  title = "Our Proven 5-Step Process",
  subtitle = "A systematic approach to transforming your business and achieving sustainable growth through strategic planning and expert execution.",
  steps = defaultSteps,
  variant = "vertical",
  showDuration = true,
  animated = true
}: ProcessTimelineProps) {

  const getStatusIcon = (status?: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case "current":
        return <Clock className="w-6 h-6 text-vestra-orange animate-pulse" />;
      default:
        return <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />;
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "completed":
        return "border-green-500 bg-green-50";
      case "current":
        return "border-vestra-orange bg-vestra-orange/5";
      default:
        return "border-gray-300 bg-gray-50";
    }
  };

  if (variant === "horizontal") {
    return (
      <section className="py-20 bg-white" data-testid="process-timeline-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-vestra-navy mb-4" data-testid="process-title">
              {title}
            </h2>
            <p className="text-xl text-vestra-slate max-w-4xl mx-auto" data-testid="process-subtitle">
              {subtitle}
            </p>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200 hidden lg:block" />
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid lg:grid-cols-5 gap-8"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  className="relative"
                  data-testid={`process-step-${step.id}`}
                >
                  {/* Step Number/Icon */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center mx-auto ${getStatusColor(step.status)}`}
                    >
                      <step.icon className="w-8 h-8 text-vestra-orange" />
                    </motion.div>
                    <div className="absolute -top-2 -right-2">
                      {getStatusIcon(step.status)}
                    </div>
                    {/* Step Number */}
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-vestra-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-vestra-navy mb-2">
                      {step.title}
                    </h3>
                    {showDuration && (
                      <div className="text-sm text-vestra-orange font-medium mb-3">
                        {step.duration}
                      </div>
                    )}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    {step.details && step.details.length > 0 && (
                      <ul className="text-xs text-gray-500 space-y-1">
                        {step.details.slice(0, 2).map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center justify-center">
                            <div className="w-1 h-1 bg-vestra-orange rounded-full mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Arrow (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 text-gray-400">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Vertical Timeline
  return (
    <section className="py-20 bg-white" data-testid="process-timeline-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-vestra-navy mb-4" data-testid="process-title">
            {title}
          </h2>
          <p className="text-xl text-vestra-slate" data-testid="process-subtitle">
            {subtitle}
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={stepVariants}
                className="relative flex items-start"
                data-testid={`process-step-${step.id}`}
              >
                {/* Timeline Node */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-16 h-16 rounded-2xl border-2 flex items-center justify-center ${getStatusColor(step.status)}`}
                  >
                    <step.icon className="w-8 h-8 text-vestra-orange" />
                  </motion.div>
                  <div className="absolute -top-2 -right-2">
                    {getStatusIcon(step.status)}
                  </div>
                  {/* Step Number */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-vestra-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-vestra-navy">
                        {step.title}
                      </h3>
                      {showDuration && (
                        <span className="text-sm text-vestra-orange font-medium bg-vestra-orange/10 px-3 py-1 rounded-full">
                          {step.duration}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    {step.details && step.details.length > 0 && (
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: detailIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle className="w-4 h-4 text-vestra-orange mr-3 flex-shrink-0" />
                            {detail}
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-vestra-orange/5 rounded-2xl p-8 border border-vestra-orange/20">
            <h3 className="text-2xl font-bold text-vestra-navy mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's begin with a comprehensive assessment of your business and create 
              a customized plan for achieving your goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-vestra-orange hover:bg-vestra-orange/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              data-testid="button-start-process"
            >
              Start Discovery Process
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}