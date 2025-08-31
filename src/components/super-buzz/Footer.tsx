const Footer = () => {
  return (
    <footer className="bg-buzz-text text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 text-buzz-red">Super Buzz</h3>
            <p className="text-white/80 mb-6 max-w-md">
              Building the future of mobile experiences with innovative design and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-buzz-red rounded-full flex items-center justify-center hover:bg-buzz-red-dark transition-colors cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-buzz-red rounded-full flex items-center justify-center hover:bg-buzz-red-dark transition-colors cursor-pointer">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-buzz-red rounded-full flex items-center justify-center hover:bg-buzz-red-dark transition-colors cursor-pointer">
                <span className="text-white font-bold">i</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-buzz-red transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-buzz-red transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-buzz-red transition-colors">About</a></li>
              <li><a href="#" className="hover:text-buzz-red transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-buzz-red transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-buzz-red transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-buzz-red transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-buzz-red transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 Super Buzz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;