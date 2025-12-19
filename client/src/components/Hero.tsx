import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: string;
  secondaryCta?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  showVideo?: boolean;
  backgroundImage?: string;
  features?: string[];
}

export default function Hero({
  title = "Transform Your Business Vision Into Reality",
  subtitle = "Strategic Solutions for Sustainable Growth",
  description = "From startup guidance to enterprise expansion, we provide comprehensive business solutions that drive measurable results. Join thousands of businesses that have achieved remarkable growth with our proven strategies.",
  primaryCta = "Start Your Journey",
  secondaryCta = "Watch Demo",
  onPrimaryClick,
  onSecondaryClick,
  showVideo = true,
  backgroundImage,
  features = [
    "Expert Business Consulting",
    "Certification Assistance",
    "Capital Access Solutions",
    "Growth Strategy Development"
  ]
}: HeroProps) {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        {backgroundImage ? (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-vestra-navy via-vestra-blue to-vestra-slate" />
        )}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-vestra-orange/20 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 10 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-vestra-orange/20 border border-vestra-orange/30 rounded-full text-vestra-orange font-medium text-sm mb-4">
                🚀 Serving 250+ Businesses
              </span>
              <h2 className="text-lg font-medium text-vestra-orange mb-2">
                {subtitle}
              </h2>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              data-testid="hero-title"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-gray-200 mb-8 leading-relaxed"
              data-testid="hero-description"
            >
              {description}
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-8"
            >
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-vestra-orange flex-shrink-0" />
                    <span className="text-gray-200">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-vestra-orange hover:bg-vestra-orange/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                onClick={onPrimaryClick}
                data-testid="button-hero-primary"
              >
                {primaryCta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {showVideo && (
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-vestra-navy px-8 py-4 text-lg font-semibold transition-all duration-300"
                  onClick={() => {
                    setShowVideoModal(true);
                    onSecondaryClick?.();
                  }}
                  data-testid="button-hero-secondary"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {secondaryCta}
                </Button>
              )}
            </motion.div>


          </motion.div>

          {/* Right Column - Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative">
              {/* Background Shape */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-vestra-orange/20 to-vestra-blue/20 rounded-full blur-3xl"
              />
              
              {/* Main Content Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8"
              >
                {/* Placeholder for Hero Image/Video */}
                <div className="aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-vestra-orange rounded-full flex items-center justify-center"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-vestra-orange mb-1">250+</div>
                    <div className="text-sm text-gray-300">Businesses Served</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-vestra-orange mb-1">98%</div>
                    <div className="text-sm text-gray-300">Success Rate</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
          data-testid="video-modal"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="bg-white rounded-lg p-1 max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Video Player Placeholder</p>
                <p className="text-sm opacity-75 mt-2">Integration with your video content</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}