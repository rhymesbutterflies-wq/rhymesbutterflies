import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import butterflyLogo from "@/assets/butterfly.png";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/10">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center">
            <img
              src={birdSafe(butterflyLogo)}
              alt="Rhymes Butterflies logo"
              className="h-40 w-40 sm:h-48 sm:w-48 md:h-64 md:w-64 lg:h-80 lg:w-80 xl:h-96 xl:w-96 object-contain drop-shadow-sm"
              loading="eager"
              decoding="async"
            />
          </div>
          {/* Heading */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight px-4">
            Transform Your Life Through
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Spiritual Healing
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Discover inner peace and overcome life's challenges with our gentle, 
            transformative healing solutions tailored to your unique journey
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 px-4">
            <Button 
              size="lg"
              onClick={scrollToServices}
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-sans font-medium text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans font-medium text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Book a Session
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 sm:pt-12 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-muted-foreground px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span>Professional Care</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
              <span>Personalized Approach</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="hsl(var(--card))" 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

// Ensures the built asset path is a non-empty string for older bundlers/environments
function birdSafe(path: string) {
  return path || "";
}
