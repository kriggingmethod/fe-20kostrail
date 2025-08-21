import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Home, MapPin, MessageSquare, Filter, Users, Code, TrendingUp, DollarSign, Award, Heart, Clock, Zap, Shield, CheckCircle } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Kos Trail",
    subtitle: "Intelligent Housing Discovery",
    content: "A smarter way to find home in Indonesia",
    icon: Home,
    type: "title"
  },
  {
    id: 2,
    title: "Vision",
    subtitle: "A smarter way to find home.",
    content: "In a world where finding the right place to live shouldn't be a struggle, we envision seamless connections between renters and their perfect space.",
    type: "vision"
  },
  {
    id: 3,
    title: "Problem",
    subtitle: "Searching for a kos is fragmented, impersonal, and exhausting.",
    content: "Traditional rental search is broken. Students and professionals waste weeks scrolling through outdated listings, visiting unsuitable properties, and dealing with unresponsive landlords.",
    stats: ["10M+ active renters", "Average 3-4 weeks to find housing", "70% report search frustration"],
    type: "problem"
  },
  {
    id: 4,
    title: "Solution",
    subtitle: "Autonomous agents that search, filter, and recommend rentals in real time.",
    content: "Our AI agents understand your preferences, budget, and lifestyle to surface only the most relevant housing options. No more endless scrolling.",
    icon: MessageSquare,
    type: "solution"
  },
  {
    id: 5,
    title: "Product Demo",
    subtitle: "Chat interface, smart filters, and map-based listing view.",
    content: "Simply tell our agent what you're looking for. Get personalized recommendations with interactive maps, verified photos, and instant communication with property owners.",
    features: ["Natural language search", "Real-time availability", "Verified listings", "Instant messaging"],
    type: "demo"
  },
  {
    id: 6,
    title: "User Journey",
    subtitle: "From query to match in seconds. Personalized, intuitive, efficient.",
    content: "1. Describe your needs → 2. AI filters options → 3. View curated matches → 4. Schedule visits → 5. Secure your space",
    type: "journey"
  },
  {
    id: 7,
    title: "Technology Stack",
    subtitle: "Flask, Redis, React, Python agents. Optional Web3 layer.",
    content: "Built for scale and reliability. Our agent infrastructure processes thousands of listings in real-time.",
    icon: Code,
    tech: ["Python Flask API", "Redis for caching", "React frontend", "AI agents", "Web3 ready"],
    type: "tech"
  },
  {
    id: 8,
    title: "Market Opportunity",
    subtitle: "10M+ renters in Indonesia. High mobile-first demand. PropTech growth.",
    content: "Indonesia's rental market is massive and underserved. Mobile adoption and digital payment growth create perfect conditions for disruption.",
    stats: ["$2.5B rental market", "85% mobile usage", "25% PropTech growth YoY"],
    icon: TrendingUp,
    type: "market"
  },
  {
    id: 9,
    title: "Business Model",
    subtitle: "Freemium SaaS for users. B2B tools for property managers.",
    content: "Multiple revenue streams: premium user subscriptions, property management tools, and transaction fees.",
    revenue: ["User subscriptions", "Property management SaaS", "Transaction fees", "Premium listings"],
    icon: DollarSign,
    type: "business"
  },
  {
    id: 10,
    title: "Team",
    subtitle: "Engineering-led. Agentic thinkers. Fast executors.",
    content: "Experienced team with deep PropTech and AI expertise. Previous exits and proven track record in Indonesian market.",
    icon: Users,
    type: "team"
  },
  {
    id: 11,
    title: "Brand Identity",
    subtitle: "Editorial clarity meets local warmth. A vessel for discovery, not distraction.",
    content: "Clean, trustworthy design that puts users first. Like a well-designed subway system - functional, reliable, quietly excellent.",
    icon: Award,
    type: "brand"
  },
  {
    id: 12,
    title: "Call to Action",
    subtitle: "Join us in reshaping housing discovery.",
    content: "Ready to transform how 10 million Indonesians find their home? Let's build the future of rental discovery together.",
    icon: Heart,
    type: "cta"
  }
];

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateStats, setAnimateStats] = useState(false);
  const [selectedRevenue, setSelectedRevenue] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [logoClicked, setLogoClicked] = useState(false);
  const [showLogoModal, setShowLogoModal] = useState(false);

  // Set document title
  useEffect(() => {
    document.title = 'Kos Trail - Pitch Deck';
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(slides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAnimateStats(false);
    setSelectedRevenue(null);
    setTimeout(() => setAnimateStats(true), 300);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAnimateStats(false);
    setSelectedRevenue(null);
    setTimeout(() => setAnimateStats(true), 300);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAnimateStats(false);
    setTimeout(() => setAnimateStats(true), 300);
  };

  // Auto-cycle user journey steps
  useEffect(() => {
    if (currentSlide === 5) { // User Journey slide
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % 5);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [currentSlide]);

  // Animate stats when slide changes
  useEffect(() => {
    setAnimateStats(true);
  }, [currentSlide]);

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with slide navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-muted-foreground">
              Kos Trail Pitch Deck
            </div>
            <div className="flex items-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    index === currentSlide
                      ? 'bg-foreground w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/70 w-2'
                  }`}
                />
              ))}
            </div>
            <div className="text-sm font-medium text-muted-foreground">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
      </header>

      {/* Main slide content */}
      <main className="pt-20 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="min-h-[80vh] flex flex-col justify-center animate-slide-up" key={currentSlide}>
            
            {/* Title slide */}
            {slide.type === 'title' && (
              <div className="text-center space-y-8">
                <div
                  className="w-24 h-24 mx-auto transform hover:scale-110 transition-all duration-500 cursor-pointer group relative"
                  onClick={() => {
                    setLogoClicked(!logoClicked);
                    setShowLogoModal(true);
                  }}
                  onMouseEnter={() => setLogoClicked(true)}
                  onMouseLeave={() => setLogoClicked(false)}
                >
                  <div className={`transition-all duration-500 ${
                    logoClicked ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                  }`}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2Fe4e2236e4ab342f3b8997bbfbcd8d920%2Fa0e817b075af44d1b9d04b79705e6cae?format=webp&width=800"
                      alt="Kos Trail Logo"
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-2 py-1 rounded whitespace-nowrap">
                      Click to explore
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h1 className="text-6xl md:text-7xl font-light text-foreground tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground font-light">
                    {slide.subtitle}
                  </p>
                </div>
                <div className="pt-8">
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {slide.content}
                  </p>
                </div>
              </div>
            )}

            {/* Vision slide */}
            {slide.type === 'vision' && (
              <div className="text-center space-y-12">
                <h2 className="text-4xl md:text-5xl font-light text-foreground">
                  {slide.title}
                </h2>
                <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {slide.content}
                </p>
              </div>
            )}

            {/* Problem slide */}
            {slide.type === 'problem' && (
              <div className="space-y-12">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl md:text-5xl font-light text-foreground">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {slide.content}
                  </p>
                  {slide.stats && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {slide.stats.map((stat, index) => (
                        <div
                          key={index}
                          className={`text-center p-6 border border-border rounded-lg hover:bg-muted/30 transition-all duration-500 cursor-pointer transform ${
                            animateStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                          }`}
                          style={{ transitionDelay: `${index * 200}ms` }}
                        >
                          <p className="text-sm text-muted-foreground">{stat}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Solution slide */}
            {slide.type === 'solution' && (
              <div className="text-center space-y-12">
                {Icon && <Icon className="w-12 h-12 mx-auto text-muted-foreground" />}
                <h2 className="text-4xl md:text-5xl font-light text-foreground">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {slide.content}
                </p>
              </div>
            )}

            {/* Demo slide */}
            {slide.type === 'demo' && (
              <div className="space-y-12">
                <div className="text-center space-y-6">
                  <h2 className="text-4xl md:text-5xl font-light text-foreground">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {slide.content}
                  </p>
                  {slide.features && (
                    <div className="grid grid-cols-2 gap-4">
                      {slide.features.map((feature, index) => {
                        const icons = [MessageSquare, Zap, Shield, CheckCircle];
                        const IconComponent = icons[index] || CheckCircle;
                        return (
                          <div
                            key={index}
                            className={`group flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-foreground/20 hover:bg-muted/10 transition-all duration-300 cursor-pointer transform ${
                              animateStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                          >
                            <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{feature}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Journey slide */}
            {slide.type === 'journey' && (
              <div className="text-center space-y-12">
                <h2 className="text-4xl md:text-5xl font-light text-foreground">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-between mb-8 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2" />
                    {['Describe', 'AI Filters', 'View Matches', 'Schedule', 'Secure'].map((step, index) => (
                      <div key={index} className="relative z-10 flex flex-col items-center space-y-2">
                        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                          currentStep >= index
                            ? 'bg-foreground border-foreground text-background'
                            : 'bg-background border-border text-muted-foreground'
                        }`}>
                          <span className="text-xs font-medium">{index + 1}</span>
                        </div>
                        <span className={`text-xs transition-colors duration-500 ${
                          currentStep >= index ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Experience the seamless flow from initial search to securing your perfect space
                  </p>
                </div>
              </div>
            )}

            {/* Tech slide */}
            {slide.type === 'tech' && (
              <div className="space-y-12">
                <div className="text-center space-y-6">
                  {Icon && <Icon className="w-12 h-12 mx-auto text-muted-foreground" />}
                  <h2 className="text-4xl md:text-5xl font-light text-foreground">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {slide.content}
                  </p>
                  {slide.tech && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {slide.tech.map((tech, index) => (
                        <div
                          key={index}
                          className={`group p-4 border border-border rounded-lg hover:border-foreground/20 hover:bg-muted/10 transition-all duration-300 cursor-pointer transform ${
                            animateStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                          }`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{tech}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Market slide */}
            {slide.type === 'market' && (
              <div className="space-y-12">
                <div className="text-center space-y-6">
                  {Icon && <Icon className="w-12 h-12 mx-auto text-muted-foreground animate-pulse" />}
                  <h2 className="text-4xl md:text-5xl font-light text-foreground">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {slide.content}
                  </p>
                  {slide.stats && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {slide.stats.map((stat, index) => (
                        <div
                          key={index}
                          className={`text-center p-6 border border-border rounded-lg hover:bg-muted/20 hover:scale-105 transition-all duration-500 cursor-pointer transform ${
                            animateStats ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                          }`}
                          style={{ transitionDelay: `${index * 200}ms` }}
                        >
                          <p className="text-sm text-muted-foreground">{stat}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Business slide */}
            {slide.type === 'business' && (
              <div className="space-y-12">
                <div className="text-center space-y-6">
                  {Icon && <Icon className="w-12 h-12 mx-auto text-muted-foreground" />}
                  <h2 className="text-4xl md:text-5xl font-light text-foreground">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {slide.content}
                  </p>
                  {slide.revenue && (
                    <div className="grid grid-cols-2 gap-4">
                      {slide.revenue.map((rev, index) => (
                        <div
                          key={index}
                          className={`group p-4 border rounded-lg cursor-pointer transition-all duration-300 transform ${
                            selectedRevenue === rev
                              ? 'border-foreground bg-muted/10 scale-105'
                              : 'border-border hover:border-foreground/20 hover:bg-muted/10'
                          } ${
                            animateStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                          }`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                          onClick={() => setSelectedRevenue(selectedRevenue === rev ? null : rev)}
                        >
                          <span className={`text-sm transition-colors ${
                            selectedRevenue === rev ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                          }`}>{rev}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Team, Brand, CTA slides */}
            {(slide.type === 'team' || slide.type === 'brand' || slide.type === 'cta') && (
              <div className="text-center space-y-12">
                {slide.type === 'brand' ? (
                  <div
                    className="w-16 h-16 mx-auto transform hover:scale-110 transition-all duration-500 cursor-pointer group relative"
                    onClick={() => setShowLogoModal(true)}
                  >
                    <div className="transform hover:rotate-6 transition-transform duration-300">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2Fe4e2236e4ab342f3b8997bbfbcd8d920%2Fa0e817b075af44d1b9d04b79705e6cae?format=webp&width=800"
                        alt="Kos Trail Logo"
                        className="w-full h-full object-contain drop-shadow-lg"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
                  </div>
                ) : (
                  Icon && <Icon className="w-12 h-12 mx-auto text-muted-foreground" />
                )}
                <h2 className="text-4xl md:text-5xl font-light text-foreground">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                  {slide.subtitle}
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {slide.content}
                </p>
              </div>
            )}

          </div>
        </div>
      </main>

      {/* Navigation controls */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-4 bg-background/90 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-lg">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full hover:bg-muted transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="text-sm text-muted-foreground px-4 font-medium">
            {currentSlide + 1} of {slides.length}
          </span>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full hover:bg-muted transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  );
}
