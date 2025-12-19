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
  CardTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea
} from "@/components";
import { 
  TrendingUp, 
  CheckCircle, 
  Bot, 
  MessageCircle, 
  Star,
  BarChart3,
  ArrowRight,
  Clock,
  Zap,
  Target,
  Phone,
  Mail
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const packageFeatures = [
  "Go High Level CRM system setup",
  "AI-powered chat widget integration", 
  "Automated SMS & email follow-up sequences",
  "Review collection & reputation booster",
  "Lead tracking & pipeline management",
  "Performance analytics dashboard",
  "Mobile app access for on-the-go management",
  "Custom landing pages for lead capture"
];

const successMetrics = [
  {
    title: "Consistent Booked Calls",
    description: "Automated lead nurturing ensures prospects are qualified and ready to book",
    icon: Phone,
    metric: "3x more qualified leads"
  },
  {
    title: "Faster Response Times", 
    description: "AI chat responds instantly, even outside business hours",
    icon: Zap,
    metric: "24/7 response guarantee"
  },
  {
    title: "Clear Sales Pipeline",
    description: "Visual pipeline shows exactly where each lead stands in your process",
    icon: BarChart3,
    metric: "Complete visibility"
  },
  {
    title: "Improved Close Rate",
    description: "Nurturing sequences educate prospects before they speak with you",
    icon: Target,
    metric: "40% higher close rate"
  }
];

export default function Grow() {
  const [formData, setFormData] = useState({
    currentLeads: "",
    closeRate: "",
    serviceArea: "",
    existingTools: "",
    monthlyRevenue: "",
    biggestChallenge: "",
    email: "",
    phone: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Growth Assessment Submitted!",
      description: "We'll analyze your current setup and contact you within 24 hours with recommendations."
    });
    console.log("Growth package application:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Put Lead Generation on Autopilot."
        subtitle="AI-Powered Growth Systems That Work While You Sleep"
        description="Stop chasing leads and start attracting them. Our AI-powered system captures, qualifies, and nurtures prospects automatically, so you can focus on closing deals and growing your business."
        primaryCta="Start Growing Now"
        secondaryCta="See How It Works"
        onPrimaryClick={() => document.getElementById('growth-form')?.scrollIntoView({ behavior: 'smooth' })}
        onSecondaryClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}
        showVideo={false}
        features={[
          "AI responds to leads 24/7",
          "Automated follow-up sequences", 
          "Complete CRM integration",
          "Real-time performance tracking"
        ]}
      />

      {/* AI Lead Gen Package Section */}
      <section className="py-20 bg-white" id="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Package */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl font-bold text-vestra-navy mb-4">
                  AI Lead Generation Package
                </h2>
                <p className="text-xl text-vestra-slate mb-8">
                  Transform your lead generation with AI automation that works around the clock to grow your business.
                </p>
                
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-2xl p-8 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">AI Growth System</h3>
                      <p className="text-green-100">Complete automation setup & ongoing support</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">$997</div>
                      <div className="text-green-100 text-sm mb-2">Setup fee</div>
                      <div className="text-2xl font-bold">+ $150/mo</div>
                      <div className="text-green-100 text-sm">Ongoing support</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {packageFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Success Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-vestra-navy mb-8">What Success Looks Like</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {successMetrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-vestra-orange rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                          <metric.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-vestra-navy mb-2">{metric.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{metric.description}</p>
                          <div className="text-vestra-orange font-semibold text-sm">{metric.metric}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Rail CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-vestra-navy flex items-center">
                      <Bot className="w-5 h-5 mr-2 text-green-600" />
                      Ready to Automate?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Complete your growth assessment and we'll show you exactly how to 3x your leads.
                    </p>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => document.getElementById('growth-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Start Growth Assessment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-vestra-navy">Free Demo Available</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      See the AI system in action with a personalized demo of your industry.
                    </p>
                    <Button variant="outline" className="w-full border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white">
                      Book Demo Call
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-vestra-navy mb-4">
              How Our AI Growth System Works
            </h2>
            <p className="text-xl text-vestra-slate">
              From setup to scale, we handle every aspect of your lead generation automation
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
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-vestra-navy mb-3">AI Captures Leads</h3>
              <p className="text-gray-600">
                Your AI assistant engages visitors 24/7, qualifies prospects, and collects contact information automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-vestra-navy mb-3">Smart Follow-Up</h3>
              <p className="text-gray-600">
                Automated SMS and email sequences nurture leads with relevant content based on their interests and behavior.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-vestra-navy mb-3">You Close Deals</h3>
              <p className="text-gray-600">
                Qualified, educated prospects book calls with you automatically. Focus your time on closing, not chasing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Growth Assessment Form */}
      <section className="py-20 bg-white" id="growth-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-vestra-navy mb-4">
              Free Growth Assessment
            </h2>
            <p className="text-xl text-vestra-slate">
              Tell us about your current lead generation and we'll create a custom automation strategy for your business
            </p>
          </motion.div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="currentLeads" className="text-vestra-navy font-medium">
                      How many leads do you get monthly? *
                    </Label>
                    <Select value={formData.currentLeads} onValueChange={(value) => handleInputChange('currentLeads', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-current-leads">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-10">0-10 leads</SelectItem>
                        <SelectItem value="11-25">11-25 leads</SelectItem>
                        <SelectItem value="26-50">26-50 leads</SelectItem>
                        <SelectItem value="51-100">51-100 leads</SelectItem>
                        <SelectItem value="100+">100+ leads</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="closeRate" className="text-vestra-navy font-medium">
                      What's your current close rate? *
                    </Label>
                    <Select value={formData.closeRate} onValueChange={(value) => handleInputChange('closeRate', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-close-rate">
                        <SelectValue placeholder="Select percentage" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-10">0-10%</SelectItem>
                        <SelectItem value="11-20">11-20%</SelectItem>
                        <SelectItem value="21-30">21-30%</SelectItem>
                        <SelectItem value="31-50">31-50%</SelectItem>
                        <SelectItem value="50+">50%+</SelectItem>
                        <SelectItem value="unsure">Not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="serviceArea" className="text-vestra-navy font-medium">
                      Primary service area *
                    </Label>
                    <Input
                      id="serviceArea"
                      data-testid="input-service-area"
                      value={formData.serviceArea}
                      onChange={(e) => handleInputChange('serviceArea', e.target.value)}
                      placeholder="e.g., Denver Metro, Colorado, National"
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthlyRevenue" className="text-vestra-navy font-medium">
                      Monthly revenue range *
                    </Label>
                    <Select value={formData.monthlyRevenue} onValueChange={(value) => handleInputChange('monthlyRevenue', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-monthly-revenue">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-5k">$0 - $5,000</SelectItem>
                        <SelectItem value="5k-15k">$5,000 - $15,000</SelectItem>
                        <SelectItem value="15k-30k">$15,000 - $30,000</SelectItem>
                        <SelectItem value="30k-50k">$30,000 - $50,000</SelectItem>
                        <SelectItem value="50k+">$50,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-vestra-navy font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-testid="input-email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-vestra-navy font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-testid="input-phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="existingTools" className="text-vestra-navy font-medium">
                    Current lead generation tools (if any)
                  </Label>
                  <Textarea
                    id="existingTools"
                    data-testid="textarea-existing-tools"
                    value={formData.existingTools}
                    onChange={(e) => handleInputChange('existingTools', e.target.value)}
                    rows={3}
                    className="mt-1"
                    placeholder="List any CRM, marketing automation, or lead generation tools you currently use..."
                  />
                </div>

                <div>
                  <Label htmlFor="biggestChallenge" className="text-vestra-navy font-medium">
                    What's your biggest challenge with lead generation? *
                  </Label>
                  <Textarea
                    id="biggestChallenge"
                    data-testid="textarea-biggest-challenge"
                    value={formData.biggestChallenge}
                    onChange={(e) => handleInputChange('biggestChallenge', e.target.value)}
                    rows={4}
                    className="mt-1"
                    placeholder="Describe your main lead generation challenges and what you'd like to improve..."
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 px-8"
                    data-testid="button-submit-assessment"
                  >
                    Get My Growth Plan
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
        title="Ready to Put Growth on Autopilot?"
        description="Stop chasing leads and start attracting them. Our AI-powered system works 24/7 to fill your pipeline with qualified prospects ready to buy."
        primaryButton={{
          text: "Start Growing Now",
          onClick: () => document.getElementById('growth-form')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryButton={{
          text: "See Live Demo",
          onClick: () => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")
        }}
        variant="gradient"
        showContactInfo={true}
        backgroundPattern={true}
      />

    </>
  );
}