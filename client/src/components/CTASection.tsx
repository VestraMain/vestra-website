import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryButton?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
  variant?: "default" | "orange" | "navy" | "gradient";
  showContactInfo?: boolean;
  backgroundPattern?: boolean;
}

export default function CTASection({
  title = "Ready to Transform Your Business?",
  description = "Join thousands of successful businesses that have achieved remarkable growth with our strategic solutions. Let's discuss how we can help you reach your goals.",
  primaryButton = {
    text: "Get Started Today",
    href: "/start"
  },
  secondaryButton = {
    text: "Schedule Consultation",
    onClick: () => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")
  },
  variant = "default",
  showContactInfo = true,
  backgroundPattern = true
}: CTASectionProps) {

  const getVariantClasses = () => {
    switch (variant) {
      case "orange":
        return "bg-vestra-orange text-white";
      case "navy":
        return "bg-vestra-navy text-white";
      case "gradient":
        return "bg-gradient-to-r from-vestra-navy via-vestra-blue to-vestra-orange text-white";
      default:
        return "bg-gray-50 text-vestra-navy";
    }
  };

  const getButtonVariant = () => {
    return variant === "default" ? "default" : "secondary";
  };

  return (
    <section 
      className={`relative py-20 overflow-hidden ${getVariantClasses()}`}
      data-testid="cta-section"
    >
      {/* Background Pattern */}
      {backgroundPattern && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-current rounded-full"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              data-testid="cta-title"
            >
              {title}
            </h2>
            <p 
              className={`text-lg md:text-xl leading-relaxed mb-8 ${
                variant === "default" ? "text-vestra-slate" : "text-white/90"
              }`}
              data-testid="cta-description"
            >
              {description}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className={`px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                variant === "default" 
                  ? "bg-vestra-orange hover:bg-vestra-orange/90 text-white" 
                  : "bg-white text-vestra-navy hover:bg-gray-100"
              }`}
              onClick={primaryButton.onClick}
              data-testid="button-cta-primary"
            >
              {primaryButton.text}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            {secondaryButton && (
              <Button
                variant={getButtonVariant()}
                size="lg"
                className={`px-8 py-4 text-lg font-semibold transition-all duration-300 ${
                  variant === "default"
                    ? "border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-vestra-navy"
                }`}
                onClick={secondaryButton.onClick}
                data-testid="button-cta-secondary"
              >
                <Calendar className="w-5 h-5 mr-2" />
                {secondaryButton.text}
              </Button>
            )}
          </motion.div>

          {/* Contact Information */}
          {showContactInfo && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="border-t border-current/20 pt-8"
            >
              <p className={`text-sm mb-4 ${
                variant === "default" ? "text-vestra-slate" : "text-white/80"
              }`}>
                Or contact us directly:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="tel:+17203834221"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-2 transition-colors duration-300 ${
                    variant === "default" 
                      ? "text-vestra-orange hover:text-vestra-navy" 
                      : "text-white hover:text-white/80"
                  }`}
                  data-testid="link-cta-phone"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">(720) 383-4221</span>
                </motion.a>

                <motion.a
                  href="mailto:main@vestrastrategies.com"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center space-x-2 transition-colors duration-300 ${
                    variant === "default" 
                      ? "text-vestra-orange hover:text-vestra-navy" 
                      : "text-white hover:text-white/80"
                  }`}
                  data-testid="link-cta-email"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">main@vestrastrategies.com</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-20 -left-20 w-40 h-40 bg-current/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-current/5 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
}