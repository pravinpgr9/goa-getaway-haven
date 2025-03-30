
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Experience {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Sunset Cruise on Mandovi River",
    description: "Enjoy a magical sunset cruise with live music and authentic Goan cuisine.",
    price: 1500,
    image: "https://images.unsplash.com/photo-1516491575772-f5e94b566a7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    category: "Cruise"
  },
  {
    id: 2,
    title: "Spice Plantation Tour",
    description: "Explore aromatic spice plantations and learn about traditional cultivation methods.",
    price: 850,
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Cultural"
  },
  {
    id: 3,
    title: "Scuba Diving Adventure",
    description: "Discover the vibrant underwater world of Goa with certified diving instructors.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Adventure"
  },
  {
    id: 4,
    title: "Historic Church & Temple Tour",
    description: "Visit Goa's famous UNESCO World Heritage churches and ancient Hindu temples.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1624495962878-74158c0d962f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Cultural"
  },
  {
    id: 5,
    title: "Calangute Beach Day Trip",
    description: "Spend a day at the famous Calangute beach with water sports and beach activities.",
    price: 950,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    category: "Beach"
  },
  {
    id: 6,
    title: "Dudhsagar Waterfall Jeep Safari",
    description: "Thrilling jeep ride through the jungle to reach the majestic Dudhsagar Waterfall.",
    price: 2200,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    category: "Adventure"
  },
];

const ExperiencesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Unforgettable Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From thrilling water sports to cultural explorations - create memories that last a lifetime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((experience) => (
            <Card key={experience.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 left-2 bg-goa-coral">
                  {experience.category}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{experience.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{experience.description}</p>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-goa-blue">₹{experience.price.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm"> / person</span>
                  </div>
                  <Link to={`/experiences/${experience.id}`}>
                    <Button variant="outline" className="text-goa-blue border-goa-blue hover:bg-goa-blue hover:text-white">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/experiences">
            <Button className="bg-goa-blue hover:bg-goa-blue/90">
              Explore All Experiences
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
