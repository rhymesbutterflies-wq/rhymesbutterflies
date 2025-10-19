import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Yu Chy",
      rating: 5,
      text: "Thank you dr Stephy for creating a safe and supportive space for me to explore my thoughts and feelings. I feel more confident and self-aware because of your help, beside dr Stephy , Your encouragement to embrace challenges has helped me develop a growth mindset, and I'm now more willing to try new things and persevere when things get tough ."
    },
    {
      name: "Jamie En",
      rating: 5,
      text: "Stephy老师懂得激发潜能，让孩子爱上探索、爱上自己也爱上了学习，我的孩子变得越来越有自信。谢谢你stephy老师给我孩子一个机会向你学习。我的孩子非常喜欢妳的教学方式。Stephy 非常有才华因为她会用正确的方式去教导孩子。她也是一位AGT test consultant的专业顾问会解答我问题，我下次会向Stephy 买AGT DNA test给我的孩子，感恩"
    },
    {
        name: "JC Prints Studio",
        rating: 5,
        text: "Stephy is a experience educator , she gave good consultation & advice for people. Proffesional and her advise guide people to have a better vision . I would recommend Stephy to more people to know about her qualifications and psychotherapist service as well . Therefore, I highly recommend Stephy psychotherapist and educator proffesion .she created a supportive and encouraging environment that fostered people growth and development"
    },
    {
      name: "Ms Joyce",
      rating: 5,
      text: "Ms Stephy is a professional family therapy and child therapy of mine. I am thankful because i am healed from depression and anxiety without taking medication. I will recommend her to more people. Thank you Ms Stephy."
    },
    {
      name: "Ms. Elizabeth",
      rating: 5,
      text: "Ms. Stephy is truly inspiring and has greatly motivated my daughter to develop a deep love for the Mandarin language through her creative and psychotherapeutic approach. Under Ms. Stephy’s guidance, my daughter has become remarkably fluent in Mandarin an impressive achievement, especially considering that we come from Russia. Thank you, Ms. Stephy, for your dedication and for nurturing my daughter’s growth with such compassion and creativity."
    }
  ];

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Real stories from people who have transformed their lives through our healing services
            </p>
            <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Testimonials Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-background to-primary/5 h-full">
                    <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                      <div className="flex flex-col h-full">
                        {/* Quote Icon */}
                        <div className="flex justify-start mb-4">
                          <Quote className="h-6 w-6 text-primary/60" />
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic flex-1 mb-4">
                          "{testimonial.text}"
                        </p>

                        {/* Client Info */}
                        <div className="pt-2 border-t border-primary/10 mt-auto">
                          <h4 className="font-sans font-semibold text-foreground text-sm sm:text-base">
                            {testimonial.name}
                          </h4>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background border-primary/30 hover:bg-primary/10" />
            <CarouselNext className="hidden md:flex -right-12 bg-background border-primary/30 hover:bg-primary/10" />
          </Carousel>


          {/* Call to Action */}
          <div className="mt-12 sm:mt-16 text-center">
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-6 sm:p-8">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
                  Ready to Start Your Healing Journey?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  Join hundreds of satisfied clients who have transformed their lives
                </p>
                <a
                  href="https://wa.me/60162867678?text=Hi! I'm interested in your spiritual healing services. Can you tell me more?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-sans font-semibold text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2 sm:mr-3 text-lg sm:text-xl">💬</span>
                  Book Your Session
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
