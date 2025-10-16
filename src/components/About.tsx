import { Sparkles, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Holistic Approach",
    description: "We address the whole person—mind, body, and spirit—for complete healing and transformation.",
  },
  {
    icon: Shield,
    title: "Safe & Confidential",
    description: "Your journey is private and protected in a nurturing, judgment-free environment.",
  },
  {
    icon: Users,
    title: "Personalized Care",
    description: "Every session is tailored to your unique needs, goals, and spiritual path.",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Why Choose Rhymes Butterflies?
            </h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Just as a butterfly transforms through gentle stages of growth, we guide you through 
              your own metamorphosis with compassion, expertise, and spiritual wisdom. Our proven 
              methods blend ancient healing traditions with modern therapeutic approaches.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center space-y-4 p-6 rounded-2xl bg-card border-2 border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
                  <feature.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="font-sans text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border-l-4 border-primary">
            <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed">
              "Like butterflies, we too can undergo transformation and emerge with beauty, 
              grace, and the freedom to soar."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
