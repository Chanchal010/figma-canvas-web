import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-buzz text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Super Buzz
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience the next generation of mobile innovation with our cutting-edge app design
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-buzz-red hover:bg-white/90 font-semibold px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-buzz-red font-semibold px-8 py-3 text-lg transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </header>
  );
};

export default Header;