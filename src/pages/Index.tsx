import Header from "@/components/super-buzz/Header";
import FeatureCard from "@/components/super-buzz/FeatureCard";
import StatsSection from "@/components/super-buzz/StatsSection";
import AppShowcase from "@/components/super-buzz/AppShowcase";
import Footer from "@/components/super-buzz/Footer";

const Index = () => {
  const features = [
    {
      icon: "📱",
      title: "Mobile First",
      description: "Designed with mobile-first approach ensuring perfect user experience across all devices"
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Optimized performance with instant loading and smooth animations for the best user experience"
    },
    {
      icon: "🔒",
      title: "Secure & Safe",
      description: "Enterprise-grade security measures to protect your data and ensure user privacy"
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description: "Stunning visual design with attention to detail and modern UI/UX principles"
    },
    {
      icon: "🔧",
      title: "Easy Integration",
      description: "Simple integration process with comprehensive documentation and developer tools"
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Powerful analytics dashboard to track user engagement and app performance metrics"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-buzz-text">
              Why Choose Super Buzz?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power of modern mobile technology with our comprehensive suite of features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` } as any}
              />
            ))}
          </div>
        </div>
      </section>
      
      <StatsSection />
      <AppShowcase />
      <Footer />
    </div>
  );
};

export default Index;
