import { Card, CardContent } from "@/components/ui/card";

const AppShowcase = () => {
  const features = [
    {
      title: "User Profile",
      description: "Comprehensive user management with personalized experiences",
      color: "bg-gradient-to-br from-buzz-red to-buzz-red-dark"
    },
    {
      title: "Dashboard",
      description: "Intuitive dashboard with real-time analytics and insights",
      color: "bg-gradient-to-br from-gray-100 to-gray-200"
    },
    {
      title: "Notifications",
      description: "Smart notification system to keep users engaged",
      color: "bg-gradient-to-br from-buzz-red-light to-white"
    },
    {
      title: "Settings",
      description: "Advanced customization options for every user preference",
      color: "bg-gradient-to-br from-gray-50 to-buzz-gray"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-buzz-text">
            App Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the powerful features that make Super Buzz the perfect choice for modern mobile experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-buzz transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardContent className="p-0">
                <div className={`h-48 ${feature.color} rounded-t-lg relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="w-full h-24 bg-white/90 rounded-lg shadow-lg"></div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-buzz-text group-hover:text-buzz-red transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;