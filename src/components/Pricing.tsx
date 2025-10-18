import { Brain, Sprout, Gem, Heart, Baby, Sparkles, Palette, Music, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const pricingOptions = [
    {
      icon: Brain,
      title: "Individual Therapy",
      badge: "Most Popular",
      items: [
        { label: "First Trial", price: "RM 268", note: "In-person or Online" },
        { label: "Regular Session", price: "RM 388", note: "per session" },
      ],
      color: "text-primary",
    },
    {
      icon: Sprout,
      title: "Starter Package",
      items: [
        { label: "Price", price: "RM 988", note: "3 Sessions + 1 FREE" },
      ],
      color: "text-secondary",
    },
    {
      icon: Gem,
      title: "Best Value Package",
      badge: "Best Value",
      items: [
        { label: "Price", price: "RM 1,388", note: "4 Sessions + 2 FREE" },
      ],
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Couples Therapy",
      items: [
        { label: "Price", price: "RM 368", note: "per session" },
        { label: "Availability", price: "In-person only", note: "" },
      ],
      color: "text-accent",
    },
    {
      icon: Baby,
      title: "Child Therapy",
      items: [
        { label: "First Trial", price: "RM 288", note: "" },
        { label: "Availability", price: "In-person only", note: "" },
      ],
      color: "text-secondary",
    },
    {
      icon: Sparkles,
      title: "Tarot Card / OH Card Reading",
      items: [
        { label: "Price", price: "RM 188", note: "per hour" },
        { label: "Availability", price: "Online session", note: "" },
      ],
      color: "text-primary",
    },
    {
      icon: Palette,
      title: "Nagomi Art Workshop",
      items: [
        { label: "Price", price: "RM 138", note: "per drawing" },
        { label: "Availability", price: "In-person or group", note: "based on schedule" },
      ],
      color: "text-accent",
    },
    {
      icon: Music,
      title: "Singing Bowl Therapy",
      items: [
        { label: "Price", price: "RM 288", note: "per hour" },
        { label: "Availability", price: "In-person only", note: "" },
      ],
      color: "text-secondary",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Pricing & Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect package for your healing journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pricingOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20 relative overflow-hidden group flex flex-col h-full"
              >
                {option.badge && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {option.badge}
                  </div>
                )}
                <div className="mb-4">
                  <Icon className={`w-12 h-12 ${option.color} mb-3`} />
                  <h3 className="text-xl font-serif font-semibold mb-4">{option.title}</h3>
                </div>
                <div className="space-y-3 flex-grow">
                  {option.items.map((item, idx) => (
                    <div key={idx} className="border-t border-border pt-3 first:border-t-0 first:pt-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm text-muted-foreground">{item.label}</span>
                        <span className="font-semibold text-foreground">{item.price}</span>
                      </div>
                      {item.note && (
                        <p className="text-xs text-muted-foreground">{item.note}</p>
                      )}
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full mt-6" 
                  variant="outline"
                  onClick={() => window.open('https://wa.me/60162867678', '_blank')}
                >
                  Book Now
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Complimentary Consultation Card */}
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Gift className="w-12 h-12 text-primary flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-2xl font-serif font-semibold mb-3 flex items-center gap-2">
                Complimentary Consultation
                <span className="text-sm bg-primary text-primary-foreground px-3 py-1 rounded-full">RM 688 Value</span>
              </h3>
              <p className="text-muted-foreground">
                Clients who have completed the DNA AGT Test will receive a comprehensive 1-hour consultation with Stephy, valued at RM 688, free of charge.
              </p>
            </div>
          </div>
        </Card>

        {/* Note */}
        <p className="text-center text-sm text-muted-foreground mt-8 max-w-3xl mx-auto">
          Note: For in-person sessions, clients are required to cover the workspace rental fee if a physical venue is preferred.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
