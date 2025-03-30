
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Star, MapPin, Wifi, Waves, UtensilsCrossed } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
  discount?: number;
  isNew?: boolean;
}

const featuredHotels: Hotel[] = [
  {
    id: 1,
    name: "Taj Resort & Spa",
    location: "Calangute Beach",
    price: 12500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    amenities: ["Beachfront", "Pool", "Restaurant", "Spa"],
    discount: 15,
  },
  {
    id: 2,
    name: "W Goa",
    location: "Vagator Beach",
    price: 18000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    amenities: ["Beachfront", "Pool", "Restaurant", "Fitness Center"],
    isNew: true,
  },
  {
    id: 3,
    name: "ITC Grand Goa",
    location: "Arossim Beach",
    price: 15500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    amenities: ["Beachfront", "Pool", "Restaurant", "Spa"],
  },
  {
    id: 4,
    name: "Caravela Beach Resort",
    location: "Varca Beach",
    price: 10000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    amenities: ["Beachfront", "Pool", "Restaurant"],
    discount: 10,
  },
];

const FeaturedHotels = () => {
  return (
    <section className="py-16 bg-goa-ocean/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Beach Resorts</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked luxury resorts with stunning beachfront views and world-class amenities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHotels.map((hotel) => (
            <Link to={`/hotels/${hotel.id}`} key={hotel.id}>
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
                <div className="relative h-48">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  {hotel.discount && (
                    <Badge className="absolute top-2 left-2 bg-goa-coral">
                      {hotel.discount}% OFF
                    </Badge>
                  )}
                  {hotel.isNew && (
                    <Badge className="absolute top-2 left-2 bg-goa-blue">
                      NEW
                    </Badge>
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{hotel.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-sm font-medium">{hotel.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    <span>{hotel.location}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.includes("Beachfront") && (
                      <Badge variant="outline" className="text-xs flex items-center gap-1">
                        <Waves className="h-3 w-3" />
                        Beachfront
                      </Badge>
                    )}
                    {hotel.amenities.includes("Wifi") && (
                      <Badge variant="outline" className="text-xs flex items-center gap-1">
                        <Wifi className="h-3 w-3" />
                        WiFi
                      </Badge>
                    )}
                    {hotel.amenities.includes("Restaurant") && (
                      <Badge variant="outline" className="text-xs flex items-center gap-1">
                        <UtensilsCrossed className="h-3 w-3" />
                        Restaurant
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <div>
                      <span className="font-bold text-goa-blue">₹{hotel.price.toLocaleString()}</span>
                      <span className="text-gray-500 text-sm"> / night</span>
                    </div>
                    <Badge className="bg-goa-gold hover:bg-goa-gold/90">View Deal</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/hotels">
            <Button className="bg-goa-blue hover:bg-goa-blue/90">
              View All Hotels
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;

// Adding missing imports
import { Button } from "@/components/ui/button";
