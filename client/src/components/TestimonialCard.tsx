import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  industry?: string;
  results?: string[];
}

interface TestimonialCardProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
  layout?: "single" | "carousel" | "grid";
  showRating?: boolean;
  showResults?: boolean;
  autoplay?: boolean;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    title: "CEO",
    company: "TechStart Solutions",
    content: "Vestra Strategies transformed our business from a struggling startup to a thriving company. Their strategic guidance and certification support opened doors we never thought possible. We secured $2M in funding and landed our first major government contract within 6 months.",
    rating: 5,
    industry: "Technology",
    results: ["$2M funding secured", "First government contract", "300% revenue growth"]
  },
  {
    id: "marcus-rodriguez",
    name: "Marcus Rodriguez", 
    title: "Founder",
    company: "GrowthCorp Manufacturing",
    content: "The team at Vestra helped us navigate complex compliance requirements and achieve ISO certification. This was crucial for expanding into international markets. Their expertise saved us months of trial and error.",
    rating: 5,
    industry: "Manufacturing",
    results: ["ISO certification achieved", "International expansion", "50% cost reduction"]
  },
  {
    id: "jennifer-watson",
    name: "Jennifer Watson",
    title: "President",
    company: "Innovate Consulting",
    content: "Outstanding support throughout our growth phase. Vestra's capital solutions team connected us with the right investors and helped structure a deal that maintained our company vision while providing the resources we needed to scale.",
    rating: 5,
    industry: "Consulting",
    results: ["Series A funding", "Team expansion", "Market leadership"]
  },
  {
    id: "david-kim",
    name: "David Kim",
    title: "Owner",
    company: "Precision Engineering",
    content: "From business plan development to securing our first major contracts, Vestra was with us every step of the way. Their practical approach and deep industry knowledge made all the difference in our success.",
    rating: 5,
    industry: "Engineering",
    results: ["Major contracts secured", "Operational efficiency", "Quality certifications"]
  }
];

export default function TestimonialCard({
  testimonials = defaultTestimonials,
  title = "What Our Clients Say",
  subtitle = "Discover how businesses like yours have achieved remarkable growth with our strategic solutions.",
  layout = "carousel",
  showRating = true,
  showResults = true,
  autoplay = false
}: TestimonialCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1" data-testid="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  const renderTestimonial = (testimonial: Testimonial, index: number) => (
    <motion.div
      key={testimonial.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 relative group hover:shadow-xl transition-all duration-300"
      data-testid={`testimonial-card-${testimonial.id}`}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 w-8 h-8 bg-vestra-orange/10 rounded-full flex items-center justify-center">
        <Quote className="w-4 h-4 text-vestra-orange" />
      </div>

      {/* Rating */}
      {showRating && (
        <div className="mb-4">
          {renderStars(testimonial.rating)}
        </div>
      )}

      {/* Content */}
      <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
        "{testimonial.content}"
      </blockquote>

      {/* Results */}
      {showResults && testimonial.results && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-6 bg-gray-50 rounded-lg p-4"
        >
          <h4 className="font-semibold text-vestra-navy mb-3 text-sm">Key Results:</h4>
          <ul className="space-y-2">
            {testimonial.results.map((result, resultIndex) => (
              <li key={resultIndex} className="flex items-center text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-vestra-orange rounded-full mr-3 flex-shrink-0" />
                {result}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Author Info */}
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-vestra-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-vestra-orange font-bold text-lg">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <h4 className="font-semibold text-vestra-navy">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">
            {testimonial.title}, {testimonial.company}
          </p>
          {testimonial.industry && (
            <p className="text-vestra-orange text-sm font-medium mt-1">
              {testimonial.industry}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (layout === "single") {
    return (
      <section className="py-20 bg-gray-50" data-testid="testimonial-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-vestra-navy mb-4">
              {title}
            </h2>
            <p className="text-xl text-vestra-slate">
              {subtitle}
            </p>
          </motion.div>
          {renderTestimonial(testimonials[0], 0)}
        </div>
      </section>
    );
  }

  if (layout === "carousel") {
    return (
      <section className="py-20 bg-gray-50" data-testid="testimonial-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-vestra-navy mb-4">
              {title}
            </h2>
            <p className="text-xl text-vestra-slate">
              {subtitle}
            </p>
          </motion.div>

          <div className="relative">
            {/* Testimonial */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {renderTestimonial(testimonials[currentIndex], 0)}
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                className="border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white"
                data-testid="button-testimonial-prev"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-vestra-orange" : "bg-gray-300"
                    }`}
                    data-testid={`button-testimonial-dot-${index}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                className="border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white"
                data-testid="button-testimonial-next"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Grid layout
  return (
    <section className="py-20 bg-gray-50" data-testid="testimonial-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-vestra-navy mb-4">
            {title}
          </h2>
          <p className="text-xl text-vestra-slate">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index))}
        </div>
      </div>
    </section>
  );
}