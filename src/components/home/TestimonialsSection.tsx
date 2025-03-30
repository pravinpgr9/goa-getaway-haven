
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "London, UK",
    avatar: "https://i.pravatar.cc/150?img=1",
    rating: 5,
    text: "Our stay at the beachfront resort was absolutely magical. The staff went above and beyond to make our honeymoon special. We will definitely be back!"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    text: "The scuba diving experience was incredible! Professional instructors and breathtaking underwater views made this the highlight of our trip to Goa."
  },
  {
    id: 3,
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 4,
    text: "GoaGetaway made booking our family vacation so easy. The hotel was exactly as described and the kids loved the beach activities."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-beach-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
          <p className="max-w-2xl mx-auto text-white/90">
            Hear from travelers who have experienced the magic of Goa through our services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-3 border-2 border-white">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-white/80">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-white/30'}`}
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-white/90">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
