import { Card, CardContent } from "@/components/ui/card";
import stephyImage from "@/assets/stephy2.jpeg";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/5">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-secondary/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Meet{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Stephy
                </span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
            </div>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your compassionate guide on the journey to spiritual healing and personal transformation
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Profile Picture */}
            <div className="flex justify-center mb-12 mt-16">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-4 border-primary/20 flex items-center justify-center shadow-2xl">
                  <img
                    src={stephyImage}
                    alt="Stephy See - Clinical Psychotherapist"
                    className="w-92 h-92 rounded-full object-cover object-top shadow-xl ring-4 ring-background aspect-square"
                  />
                </div>
              </div>
            </div>

            {/* About Text */}
            <Card className="border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-background to-primary/5">
              <CardContent className="p-12">
                <div className="prose prose-lg max-w-none">
                  <div className="text-center mb-8">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                      Professional Journey
                    </h2>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      I'm <span className="font-semibold text-primary">Stephy See</span>, a Clinical Psychotherapist and a proud member of the British Society of Clinical Hypnotherapy and Integrative Psychotherapy (BSCHIP).
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      I hold an Advanced Practitioner Diploma in Integrative Psychotherapy and a Master's Degree in Business Administration (MBA), blending psychological understanding with holistic leadership.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      With a Diploma in Interior Architecture, I've always been inspired to create harmony — both in physical spaces and within the human heart.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Alongside my clinical practice, I am a certified Nagomi Art Instructor (JPHAA) and hold professional certifications in Art Therapy, OH Card Facilitation, Tarot Reading, Singing Bowl Healing, Numerology, and Reiki Healing. I also serve as a Comprehensive Consultant for AGT DNA, integrating creative education and genetic insight to support emotional growth and self-awareness.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      My approach blends <span className="font-semibold text-secondary">science and soul</span> — combining evidence-based psychotherapy with intuitive and mindful healing tools to help individuals explore emotions, release stress, and reconnect with inner peace.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      I'm also a Licensed Train-the-Trainer (TTT) Facilitator, and all my workshops are HRD Corp Claimable, designed to support both individuals and organizations in cultivating emotional balance, creativity, and transformation.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      As a Key Opinion Leader (KOL), I have collaborated with well-known brands such as <span className="font-semibold text-accent">Getha, Babyya, JustPets, Plant Therapy, Absolute Genetic Technologies</span>, and more — promoting holistic living, emotional wellness, and mindful growth.
                    </p>
                    
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      My professional journey and contributions will be featured in <span className="font-semibold text-primary">Britishpedia's 7th Edition</span>, recognizing individuals who make a positive impact in their fields.
                    </p>
                    
                    <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-6 rounded-xl border border-primary/20 mt-8">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        I'm also the creator of <span className="font-semibold text-primary">Rhymes Butterflies Tea</span>, a legally protected wellness tea brand where each flavour carries its own emotional symbol — designed to evoke calm, joy, love, or balance through taste and intention. Every blend tells a story, reminding us that healing can begin with something as gentle and meaningful as a sip of tea.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="mt-20 text-center">
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 shadow-2xl">
                <CardContent className="p-12">
                  <div className="space-y-6">
                    <div className="inline-block">
                      <h3 className="font-serif text-3xl font-bold text-foreground mb-4">
                        Ready to Begin Your Healing Journey?
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                      I'm here to support you every step of the way. Let's work together 
                      to unlock your potential and create lasting positive change in your life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                      <a
                        href="https://wa.me/60133113943?text=Hi! I'm interested in your spiritual healing services. Can you tell me more?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-sans font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                      >
                        <span className="mr-3 text-xl">💬</span>
                        Start Your Journey
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
