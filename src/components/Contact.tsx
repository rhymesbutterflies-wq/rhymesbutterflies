import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "60162867678"; // Malaysian phone number format
    const message = "Hi! I'm interested in your spiritual healing services. Can you tell me more?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16 space-y-3 sm:space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Begin Your Journey
            </h2>
            <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Take the first step toward transformation. We're here to support you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* WhatsApp Contact */}
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="p-4 rounded-full bg-green-100 w-fit mx-auto">
                    <MessageCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      Chat with Us on WhatsApp
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Get instant support and start your healing journey today. 
                      Click below to message us directly on WhatsApp.
                    </p>
                  </div>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-sans font-medium py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start WhatsApp Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-2 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-sans font-semibold text-foreground mb-1 text-sm sm:text-base">Email Us</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground break-all">stephy.rhymesbutterflies@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary/30 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground">016-286-7678</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/30 transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">By appointment only</p>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-2 border-primary/20">
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Office Hours:</strong><br />
                  Monday - Friday: 9:00 AM - 7:00 PM<br />
                  Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
