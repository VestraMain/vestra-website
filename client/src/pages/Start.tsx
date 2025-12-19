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
  Rocket, 
  CheckCircle, 
  FileText, 
  Palette, 
  Globe, 
  Settings,
  ArrowRight,
  Clock,
  DollarSign,
  Users,
  Star,
  Target
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const processSteps = [
  {
    id: "discovery",
    title: "Discovery",
    description: "Deep dive into your vision, target market, and competitive landscape.",
    icon: Target,
    duration: "2-3 days"
  },
  {
    id: "brand-workshop",
    title: "Brand Workshop",
    description: "Develop your brand identity, messaging, and visual elements.",
    icon: Palette,
    duration: "3-5 days"
  },
  {
    id: "build",
    title: "Build",
    description: "Create your business plan, website, and digital infrastructure.",
    icon: Settings,
    duration: "7-10 days"
  },
  {
    id: "launch",
    title: "Launch",
    description: "Go live with your complete business presence and systems.",
    icon: Rocket,
    duration: "1-2 days"
  },
  {
    id: "optimization",
    title: "Optimization",
    description: "Fine-tune and optimize based on initial performance data.",
    icon: Star,
    duration: "Ongoing"
  }
];

const packageIncludes = [
  "Business entity registration & EIN",
  "Professional business plan",
  "Complete brand identity package",
  "Professional website design",
  "CRM system setup & training",
  "Business banking recommendations",
  "Legal structure consultation",
  "Market analysis & positioning"
];

const addOnServices = [
  {
    title: "Professional Bookkeeping",
    description: "Monthly financial management and reporting",
    price: "$150/month",
    icon: FileText
  },
  {
    title: "Payment Processing Setup",
    description: "Secure payment gateway integration",
    price: "$200 setup",
    icon: DollarSign
  },
  {
    title: "Google Business Profile",
    description: "Complete local SEO optimization",
    price: "$300 setup",
    icon: Globe
  }
];

export default function Start() {
  const [formData, setFormData] = useState({
    legalName: "",
    ownershipStructure: "",
    yearsInBusiness: "",
    primaryGoals: "",
    referralSource: "",
    email: "",
    phone: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll contact you within 24 hours to schedule your discovery call."
    });
    console.log("Start package application:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Start Strong. Look Credible. Grow Faster."
        subtitle="Launch Your Business the Right Way"
        description="From entity setup to digital presence, we help you build a professional foundation that positions you for sustainable growth. Skip the guesswork and launch with confidence."
        primaryCta="Start My Business"
        secondaryCta="See What's Included"
        onPrimaryClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
        onSecondaryClick={() => document.getElementById('package-details')?.scrollIntoView({ behavior: 'smooth' })}
        showVideo={false}
        features={[
          "Complete business setup in 2-3 weeks",
          "Professional brand & website included", 
          "CRM system ready to go",
          "Ongoing optimization support"
        ]}
      />

      {/* Launch Package Section */}
      <section className="py-20 bg-white" id="package-details">
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
                  Complete Launch Package
                </h2>
                <p className="text-xl text-vestra-slate mb-8">
                  Everything you need to start your business professionally, all in one comprehensive package.
                </p>
                
                <div className="bg-gradient-to-br from-vestra-navy to-vestra-blue text-white rounded-2xl p-8 mb-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Launch Package</h3>
                      <p className="text-blue-200">Complete business setup & branding</p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold">$1,500</div>
                      <div className="text-blue-200">One-time investment</div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {packageIncludes.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-vestra-orange mr-3 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Process Steps */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-vestra-navy mb-8">Our 5-Step Launch Process</h3>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={step.id} className="flex items-start bg-gray-50 rounded-xl p-6">
                      <div className="w-12 h-12 bg-vestra-orange rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className="w-6 h-6 bg-vestra-navy text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                            {index + 1}
                          </div>
                          <h4 className="text-lg font-bold text-vestra-navy">{step.title}</h4>
                          <span className="text-sm text-vestra-orange ml-auto">{step.duration}</span>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Rail CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card className="border-vestra-orange/20 bg-vestra-orange/5">
                  <CardHeader>
                    <CardTitle className="text-vestra-navy flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-vestra-orange" />
                      Ready to Start?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Complete your application below and we'll schedule your discovery call within 24 hours.
                    </p>
                    <Button 
                      className="w-full bg-vestra-orange hover:bg-vestra-orange/90"
                      onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Start Application
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-vestra-navy">Questions?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Schedule a free consultation to discuss your specific needs.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white"
                      onClick={() => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")}
                    >
                      Book Strategy Call
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-vestra-navy mb-4">
              Optional Add-On Services
            </h2>
            <p className="text-xl text-vestra-slate">
              Enhance your package with these professional services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {addOnServices.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-vestra-orange/10 rounded-xl flex items-center justify-center mb-4">
                      <addon.icon className="w-6 h-6 text-vestra-orange" />
                    </div>
                    <CardTitle className="text-vestra-navy">{addon.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{addon.description}</p>
                    <div className="text-2xl font-bold text-vestra-orange">{addon.price}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white" id="application-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-vestra-navy mb-4">
              Start Your Business Launch Application
            </h2>
            <p className="text-xl text-vestra-slate">
              Tell us about your business vision and we'll create a customized launch plan
            </p>
          </motion.div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="legalName" className="text-vestra-navy font-medium">
                      Proposed Legal Business Name *
                    </Label>
                    <Input
                      id="legalName"
                      data-testid="input-legal-name"
                      value={formData.legalName}
                      onChange={(e) => handleInputChange('legalName', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="ownershipStructure" className="text-vestra-navy font-medium">
                      Preferred Ownership Structure *
                    </Label>
                    <Select value={formData.ownershipStructure} onValueChange={(value) => handleInputChange('ownershipStructure', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-ownership">
                        <SelectValue placeholder="Select structure" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="llc">LLC</SelectItem>
                        <SelectItem value="corporation">Corporation</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="yearsInBusiness" className="text-vestra-navy font-medium">
                      Years in Business (if existing) *
                    </Label>
                    <Select value={formData.yearsInBusiness} onValueChange={(value) => handleInputChange('yearsInBusiness', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-years">
                        <SelectValue placeholder="Select years" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">Starting new business</SelectItem>
                        <SelectItem value="0-1">Less than 1 year</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5+">5+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="referralSource" className="text-vestra-navy font-medium">
                      How did you hear about us? *
                    </Label>
                    <Select value={formData.referralSource} onValueChange={(value) => handleInputChange('referralSource', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-referral">
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google Search</SelectItem>
                        <SelectItem value="referral">Referral from client</SelectItem>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="networking">Networking Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
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
                  <Label htmlFor="primaryGoals" className="text-vestra-navy font-medium">
                    Primary Business Goals & Vision *
                  </Label>
                  <Textarea
                    id="primaryGoals"
                    data-testid="textarea-goals"
                    value={formData.primaryGoals}
                    onChange={(e) => handleInputChange('primaryGoals', e.target.value)}
                    rows={4}
                    className="mt-1"
                    placeholder="Describe your business vision, target market, and primary goals..."
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-vestra-orange hover:bg-vestra-orange/90 px-8"
                    data-testid="button-submit-application"
                  >
                    Submit Application
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
        title="Ready to Launch Your Business?"
        description="Join hundreds of entrepreneurs who've built successful businesses with our proven launch process. Let's turn your vision into reality."
        primaryButton={{
          text: "Start My Launch Package",
          onClick: () => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryButton={{
          text: "Schedule Strategy Call",
          onClick: () => window.location.href = "/contact"
        }}
        variant="navy"
        showContactInfo={true}
        backgroundPattern={true}
      />

    </>
  );
}