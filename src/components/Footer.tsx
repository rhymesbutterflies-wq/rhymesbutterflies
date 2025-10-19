import licenseImage from "@/assets/license.png";
import hrdbImage from "@/assets/hrdb.png";
import hdrb1Image from "@/assets/hdrb1.png";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="font-serif text-lg text-foreground">
            Rhymes Butterflies Solution
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            Transforming lives through spiritual healing and wellness
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            Business Registration: TR0319886-A
          </p>
          
          {/* HRDB Images */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 pt-4 pb-2">
            <img
              src={hrdbImage}
              alt="HRDB Certification"
              className="h-24 sm:h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity -ml-3"
            />
            <img
              src={hdrb1Image}
              alt="HRDB Certification"
              className="h-16 sm:h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity -ml-3"
            />
          </div>
          
          {/* License Image */}
          <div className="flex justify-center pt-2 pb-4">
            <img
              src={licenseImage}
              alt="Professional License"
              className="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">
              Services
            </a>
            <span>•</span>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
       
          </div>
          <p className="text-xs text-muted-foreground pt-4">
            © {new Date().getFullYear()} Rhymes Butterflies Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
