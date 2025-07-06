
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-accent relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="text-xl font-bold text-rifkhan mr-1">Shameel Ahmed</span>
              <span className="text-foreground font-medium"></span>
            </div>
            <p className="text-sm text-foreground/60 mt-1">
              DevOps Engineer • AWS Specialist • Cloud Architect
            </p>
          </div>
          
          <div className="flex items-center text-foreground/70">
            <p className="text-sm">
              © {currentYear} • Crafted with 
              <Heart className="inline-block w-4 h-4 mx-1 text-rifkhan" />
              in Shameel 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
