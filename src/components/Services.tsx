import { Card, CardContent } from "@/components/ui/card";
import { Brain, Moon, Heart, TrendingUp, Scale, Cigarette } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Phobia Treatment",
    description: "Overcome fears and anxieties with gentle, effective healing techniques that restore your confidence and freedom.",
    color: "text-primary",
  },
  {
    icon: Moon,
    title: "Insomnia Relief",
    description: "Rediscover restful sleep through calming practices that quiet the mind and heal sleep patterns naturally.",
    color: "text-secondary",
  },
  {
    icon: Heart,
    title: "Deep Relaxation",
    description: "Release tension and stress with transformative relaxation methods that bring peace to body and soul.",
    color: "text-accent",
  },
  {
    icon: TrendingUp,
    title: "Ego Strengthening",
    description: "Build inner resilience and self-confidence through empowering spiritual practices and positive reinforcement.",
    color: "text-primary",
  },
  {
    icon: Scale,
    title: "Weight Management",
    description: "Achieve your wellness goals with holistic approaches that address mind, body, and emotional balance.",
    color: "text-secondary",
  },
  {
    icon: Cigarette,
    title: "Smoking Cessation",
    description: "Break free from addiction with compassionate support and powerful techniques for lasting change.",
    color: "text-accent",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Healing Services
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Compassionate, personalized solutions to guide you toward wholeness and well-being
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-background to-muted/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
