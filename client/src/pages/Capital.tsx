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
  DollarSign, 
  CheckCircle, 
  TrendingUp, 
  FileText, 
  CreditCard,
  Building,
  ArrowRight,
  Clock,
  Target,
  Award,
  PieChart,
  Banknote
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const capitalServices = [
  {
    title: "Credit Profile Setup",
    description: "Establish and optimize business credit separate from personal credit",
    icon: CreditCard,
    outcomes: ["Business credit score 80+", "Trade lines established", "Payment history built"]
  },
  {
    title: "Financial Package Development",
    description: "Professional financial documents that tell your business story",
    icon: FileText,
    outcomes: ["Lender-ready financials", "Cash flow projections", "Business plan updates"]
  },
  {
    title: "Funding Source Mapping",
    description: "Identify the best funding sources for your specific needs and situation",
    icon: Target,
    outcomes: ["Personalized funding roadmap", "Lender introductions", "Application prioritization"]
  },
  {
    title: "Grant Identification & Support",
    description: "Research and apply for relevant grants and funding programs",
    icon: Award,
    outcomes: ["Grant opportunity research", "Application assistance", "Compliance support"]
  }
];

const fundingTypes = [
  {
    type: "SBA Loans",
    description: "Small Business Administration guaranteed loans with favorable terms",
    minAmount: "$5,000",
    maxAmount: "$5M+",
    bestFor: ["Equipment purchases", "Working capital", "Real estate", "Business acquisition"]
  },
  {
    type: "Business Lines of Credit",
    description: "Flexible credit lines for ongoing business expenses and cash flow",
    minAmount: "$10,000",
    maxAmount: "$500K+",
    bestFor: ["Cash flow gaps", "Inventory purchases", "Seasonal expenses", "Growth opportunities"]
  },
  {
    type: "Equipment Financing",
    description: "Specialized financing for business equipment and machinery",
    minAmount: "$5,000", 
    maxAmount: "$1M+",
    bestFor: ["Manufacturing equipment", "Technology upgrades", "Vehicles", "Medical equipment"]
  },
  {
    type: "Government Grants",
    description: "Non-repayable funding from federal, state, and local programs",
    minAmount: "$1,000",
    maxAmount: "$500K+",
    bestFor: ["Research & development", "Minority-owned businesses", "Rural businesses", "Export development"]
  }
];

const successOutcomes = [
  {
    title: "Clear Financial Story",
    description: "Professional presentation of your business financials and growth potential",
    icon: PieChart
  },
  {
    title: "Higher Approval Odds",
    description: "Strategic approach to lender selection and application timing",
    icon: TrendingUp
  },
  {
    title: "Better Terms & Rates",
    description: "Improved credit profile and presentation leads to more favorable terms",
    icon: Banknote
  }
];

export default function Capital() {
  const [formData, setFormData] = useState({
    businessName: "",
    currentRevenue: "",
    fundingAmount: "",
    fundingPurpose: "",
    timeframe: "",
    currentLoans: "",
    creditScore: "",
    certifications: [] as string[],
    collateralAvailable: "",
    previousFunding: "",
    email: "",
    phone: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Capital Assessment Submitted!",
      description: "Our capital specialists will review your needs and contact you within 24 hours with funding recommendations."
    });
    console.log("Capital application:", formData);
  };

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCertificationToggle = (cert: string) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.includes(cert)
        ? prev.certifications.filter(c => c !== cert)
        : [...prev.certifications, cert]
    }));
  };

  const certificationOptions = [
    "M/WBE", "SBE", "DBE", "ACDBE", "EBE", "8(a)", "HUBZone", "VOSB", "SDVOSB", "WOSB"
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <Hero 
        title="Capital That Matches Your Next Move."
        subtitle="Smart Funding Solutions for Growing Businesses"
        description="From improving your credit profile to accessing smart funding, we help you secure the capital you need to grow. Our specialists work with you to tell your financial story in a way that opens doors."
        primaryCta="Get Funding Roadmap"
        secondaryCta="Explore Options"
        onPrimaryClick={() => document.getElementById('capital-form')?.scrollIntoView({ behavior: 'smooth' })}
        onSecondaryClick={() => document.getElementById('funding-types')?.scrollIntoView({ behavior: 'smooth' })}
        showVideo={false}
        features={[
          "Business credit optimization",
          "Professional financial packages", 
          "Grant identification & support",
          "Strategic lender introductions"
        ]}
      />

      {/* Capital Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl font-bold text-vestra-navy mb-4">
                  Comprehensive Capital Solutions
                </h2>
                <p className="text-xl text-vestra-slate mb-8">
                  We help you build a strong financial foundation and access the right funding for your business goals.
                </p>
                
                <div className="space-y-8">
                  {capitalServices.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200"
                    >
                      <div className="flex items-start">
                        <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-vestra-navy mb-2">{service.title}</h3>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {service.outcomes.map((outcome, outcomeIndex) => (
                              <span
                                key={outcomeIndex}
                                className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full"
                              >
                                {outcome}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Success Outcomes */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-vestra-navy mb-8">What You Can Expect</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {successOutcomes.map((outcome, index) => (
                    <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                      <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <outcome.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-vestra-navy mb-3">{outcome.title}</h4>
                      <p className="text-gray-600 text-sm">{outcome.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Rail CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <Card className="border-emerald-200 bg-emerald-50">
                  <CardHeader>
                    <CardTitle className="text-vestra-navy flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-emerald-600" />
                      Ready for Capital?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Complete our capital assessment and get your personalized funding roadmap.
                    </p>
                    <Button 
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                      onClick={() => document.getElementById('capital-form')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Start Assessment
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-vestra-navy">Credit Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Get a free business credit analysis and improvement recommendations.
                    </p>
                    <Button variant="outline" className="w-full border-vestra-navy text-vestra-navy hover:bg-vestra-navy hover:text-white">
                      Free Credit Review
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Types */}
      <section className="py-20 bg-gray-50" id="funding-types">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-vestra-navy mb-4">
              Funding Options We Support
            </h2>
            <p className="text-xl text-vestra-slate">
              From traditional loans to government grants, we help you access the right funding for your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {fundingTypes.map((funding, index) => (
              <motion.div
                key={funding.type}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-vestra-navy">{funding.type}</CardTitle>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Range</div>
                        <div className="text-lg font-bold text-emerald-600">
                          {funding.minAmount} - {funding.maxAmount}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{funding.description}</p>
                    <div>
                      <h5 className="font-semibold text-sm text-vestra-navy mb-2">Best for:</h5>
                      <div className="flex flex-wrap gap-2">
                        {funding.bestFor.map((use, useIndex) => (
                          <span
                            key={useIndex}
                            className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Assessment Form */}
      <section className="py-20 bg-white" id="capital-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-vestra-navy mb-4">
              Business Capital Assessment
            </h2>
            <p className="text-xl text-vestra-slate">
              Tell us about your funding needs and we'll create a personalized capital strategy
            </p>
          </motion.div>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="businessName" className="text-vestra-navy font-medium">
                      Business Name *
                    </Label>
                    <Input
                      id="businessName"
                      data-testid="input-business-name"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      className="mt-1"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="currentRevenue" className="text-vestra-navy font-medium">
                      Current Annual Revenue *
                    </Label>
                    <Select value={formData.currentRevenue} onValueChange={(value) => handleInputChange('currentRevenue', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-current-revenue">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-50k">$0 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1 million</SelectItem>
                        <SelectItem value="1m+">$1 million+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="fundingAmount" className="text-vestra-navy font-medium">
                      Funding Amount Needed *
                    </Label>
                    <Select value={formData.fundingAmount} onValueChange={(value) => handleInputChange('fundingAmount', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-funding-amount">
                        <SelectValue placeholder="Select amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-25k">Under $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="500k+">$500,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="timeframe" className="text-vestra-navy font-medium">
                      Funding Timeframe *
                    </Label>
                    <Select value={formData.timeframe} onValueChange={(value) => handleInputChange('timeframe', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-timeframe">
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (within 30 days)</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-12-months">6-12 months</SelectItem>
                        <SelectItem value="flexible">Flexible timing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="currentLoans" className="text-vestra-navy font-medium">
                      Current Business Debt *
                    </Label>
                    <Select value={formData.currentLoans} onValueChange={(value) => handleInputChange('currentLoans', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-current-loans">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No current debt</SelectItem>
                        <SelectItem value="under-25k">Under $25,000</SelectItem>
                        <SelectItem value="25k-100k">$25,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k+">$250,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="creditScore" className="text-vestra-navy font-medium">
                      Business Credit Score (if known)
                    </Label>
                    <Select value={formData.creditScore} onValueChange={(value) => handleInputChange('creditScore', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-credit-score">
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="not-established">Not established</SelectItem>
                        <SelectItem value="under-600">Under 600</SelectItem>
                        <SelectItem value="600-650">600-650</SelectItem>
                        <SelectItem value="650-700">650-700</SelectItem>
                        <SelectItem value="700-750">700-750</SelectItem>
                        <SelectItem value="750+">750+</SelectItem>
                        <SelectItem value="unknown">Don't know</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="collateralAvailable" className="text-vestra-navy font-medium">
                      Collateral Available *
                    </Label>
                    <Select value={formData.collateralAvailable} onValueChange={(value) => handleInputChange('collateralAvailable', value)}>
                      <SelectTrigger className="mt-1" data-testid="select-collateral">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="real-estate">Real estate</SelectItem>
                        <SelectItem value="equipment">Equipment/machinery</SelectItem>
                        <SelectItem value="inventory">Inventory</SelectItem>
                        <SelectItem value="accounts-receivable">Accounts receivable</SelectItem>
                        <SelectItem value="personal-guarantee">Personal guarantee only</SelectItem>
                        <SelectItem value="none">No collateral available</SelectItem>
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
                  <Label htmlFor="fundingPurpose" className="text-vestra-navy font-medium">
                    What will you use the funding for? *
                  </Label>
                  <Textarea
                    id="fundingPurpose"
                    data-testid="textarea-funding-purpose"
                    value={formData.fundingPurpose}
                    onChange={(e) => handleInputChange('fundingPurpose', e.target.value)}
                    rows={3}
                    className="mt-1"
                    placeholder="Describe how you plan to use the funding (equipment, inventory, expansion, working capital, etc.)"
                    required
                  />
                </div>

                <div>
                  <Label className="text-vestra-navy font-medium">
                    Current Certifications (Select all that apply)
                  </Label>
                  <div className="mt-3 grid md:grid-cols-5 gap-3">
                    {certificationOptions.map((cert) => (
                      <label 
                        key={cert} 
                        className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg border border-gray-200 hover:bg-gray-50"
                      >
                        <input
                          type="checkbox"
                          checked={formData.certifications.includes(cert)}
                          onChange={() => handleCertificationToggle(cert)}
                          className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                          data-testid={`checkbox-cert-${cert.toLowerCase()}`}
                        />
                        <span className="text-sm font-medium text-vestra-navy">{cert}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="previousFunding" className="text-vestra-navy font-medium">
                    Previous Funding Experience
                  </Label>
                  <Textarea
                    id="previousFunding"
                    data-testid="textarea-previous-funding"
                    value={formData.previousFunding}
                    onChange={(e) => handleInputChange('previousFunding', e.target.value)}
                    rows={3}
                    className="mt-1"
                    placeholder="Tell us about any previous loans, grants, or funding you've received..."
                  />
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 px-8"
                    data-testid="button-submit-capital"
                  >
                    Get My Funding Roadmap
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
        title="Ready to Fuel Your Growth?"
        description="Don't let funding challenges hold back your business potential. Our capital specialists help you access the resources you need to achieve your goals."
        primaryButton={{
          text: "Get Funding Roadmap",
          onClick: () => document.getElementById('capital-form')?.scrollIntoView({ behavior: 'smooth' })
        }}
        secondaryButton={{
          text: "Free Credit Analysis",
          onClick: () => window.open("https://calendar.app.google/Ri5z1qhifeFsryV87", "_blank")
        }}
        variant="gradient"
        showContactInfo={true}
        backgroundPattern={true}
      />

    </>
  );
}