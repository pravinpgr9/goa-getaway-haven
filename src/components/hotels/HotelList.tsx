
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Slider, 
  Star, 
  MapPin, 
  Wifi, 
  Waves, 
  Coffee,
  UtensilsCrossed,
  Heart
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider as SliderComponent } from "@/components/ui/slider";

interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  amenities: string[];
  distance?: string;
  discount?: number;
  isNew?: boolean;
}

const hotels: Hotel[] = [
  {
    id: 1,
    name: "Taj Resort & Spa",
    location: "Calangute Beach",
    price: 12500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    amenities: ["Beachfront", "Pool", "Wi-Fi", "Restaurant", "Spa"],
    distance: "50m from beach",
    discount: 15,
  },
  {
    id: 2,
    name: "W Goa",
    location: "Vagator Beach",
    price: 18000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
    amenities: ["Beachfront", "Pool", "Wi-Fi", "Restaurant", "Fitness Center"],
    distance: "Direct beach access",
    isNew: true,
  },
  {
    id: 3,
    name: "ITC Grand Goa",
    location: "Arossim Beach",
    price: 15500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    amenities: ["Beachfront", "Pool", "Wi-Fi", "Restaurant", "Spa"],
    distance: "100m from beach",
  },
  {
    id: 4,
    name: "Caravela Beach Resort",
    location: "Varca Beach",
    price: 10000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    amenities: ["Beachfront", "Pool", "Wi-Fi", "Restaurant"],
    distance: "200m from beach",
    discount: 10,
  },
  {
    id: 5,
    name: "The Leela Palace",
    location: "Mobor Beach",
    price: 22000,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    amenities: ["Beachfront", "Pool", "Wi-Fi", "Restaurant", "Spa", "Golf Course"],
    distance: "Direct beach access",
  },
  {
    id: 6,
    name: "Cidade de Goa",
    location: "Dona Paula",
    price: 9500,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    amenities: ["Pool", "Wi-Fi", "Restaurant", "Spa"],
    distance: "500m from beach",
    discount: 8,
  },
];

const HotelList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([5000, 25000]);
  const [sortBy, setSortBy] = useState("recommended");
  const [filters, setFilters] = useState<string[]>([]);
  const [wishlistedHotels, setWishlistedHotels] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlistedHotels(prev => 
      prev.includes(id) 
        ? prev.filter(hotelId => hotelId !== id)
        : [...prev, id]
    );
  };

  const toggleFilter = (value: string) => {
    setFilters(prev => 
      prev.includes(value)
        ? prev.filter(filter => filter !== value)
        : [...prev, value]
    );
  };

  // Filter and sort hotels
  const filteredHotels = hotels.filter(hotel => {
    // Search term filter
    if (
      searchTerm &&
      !hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // Price range filter
    if (hotel.price < priceRange[0] || hotel.price > priceRange[1]) {
      return false;
    }

    // Amenities filter
    if (filters.length > 0) {
      return filters.every(filter => hotel.amenities.includes(filter));
    }

    return true;
  }).sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return 0; // recommended - keep original order
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters sidebar */}
        <div className="md:w-1/4 space-y-6">
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-4">Search</h2>
              <div>
                <Input
                  placeholder="Hotel name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="mb-4"
                />
              </div>

              <h3 className="font-semibold mb-3 pt-2">Price Range</h3>
              <div className="px-2">
                <SliderComponent
                  defaultValue={priceRange}
                  min={1000}
                  max={30000}
                  step={1000}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>₹{priceRange[0].toLocaleString()}</span>
                  <span>₹{priceRange[1].toLocaleString()}</span>
                </div>
              </div>

              <h3 className="font-semibold mb-3 pt-4">Amenities</h3>
              <div className="space-y-2">
                {["Beachfront", "Pool", "Wi-Fi", "Restaurant", "Spa"].map((amenity) => (
                  <div className="flex items-center space-x-2" key={amenity}>
                    <Checkbox 
                      id={`amenity-${amenity}`}
                      checked={filters.includes(amenity)}
                      onCheckedChange={() => toggleFilter(amenity)}
                    />
                    <label
                      htmlFor={`amenity-${amenity}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {amenity}
                    </label>
                  </div>
                ))}
              </div>

              <h3 className="font-semibold mb-3 pt-4">Property Type</h3>
              <div className="space-y-2">
                {["Hotel", "Resort", "Villa", "Homestay"].map((type) => (
                  <div className="flex items-center space-x-2" key={type}>
                    <Checkbox id={`type-${type}`} />
                    <label
                      htmlFor={`type-${type}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setPriceRange([5000, 25000]);
                  setFilters([]);
                }}
              >
                Reset Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Hotel listings */}
        <div className="md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">
              {filteredHotels.length} Hotels in Goa
            </h1>

            <div className="flex items-center">
              <span className="text-sm mr-2">Sort by:</span>
              <Select
                value={sortBy}
                onValueChange={setSortBy}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recommended">Recommended</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {filteredHotels.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <h2 className="text-xl font-medium text-gray-900 mb-2">No hotels found</h2>
              <p className="text-gray-600">Try adjusting your filters or search terms</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredHotels.map((hotel) => (
                <Card key={hotel.id} className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="relative">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name}
                        className="w-full h-full object-cover aspect-video md:aspect-auto"
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
                      <Button
                        variant="outline"
                        size="icon"
                        className={`absolute top-2 right-2 rounded-full bg-white/80 ${
                          wishlistedHotels.includes(hotel.id) ? 'text-red-500' : 'text-gray-500'
                        }`}
                        onClick={() => toggleWishlist(hotel.id)}
                      >
                        <Heart className={`h-5 w-5 ${wishlistedHotels.includes(hotel.id) ? 'fill-red-500' : ''}`} />
                      </Button>
                    </div>
                    
                    <div className="p-4 md:p-6 md:col-span-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h2 className="text-xl font-semibold">{hotel.name}</h2>
                          <div className="flex items-center text-gray-500 text-sm mt-1">
                            <MapPin className="h-3.5 w-3.5 mr-1" />
                            <span>{hotel.location}</span>
                            {hotel.distance && (
                              <Badge variant="outline" className="ml-2 text-xs">
                                {hotel.distance}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="font-semibold">{hotel.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 my-4">
                        {hotel.amenities.slice(0, 4).map((amenity, index) => {
                          let Icon;
                          if (amenity === "Beachfront") Icon = Waves;
                          else if (amenity === "Wi-Fi") Icon = Wifi;
                          else if (amenity === "Restaurant") Icon = UtensilsCrossed;
                          else if (amenity === "Breakfast") Icon = Coffee;
                          else Icon = () => null;
                          
                          return (
                            <Badge key={index} variant="outline" className="text-xs flex items-center gap-1">
                              {Icon && <Icon className="h-3 w-3" />}
                              {amenity}
                            </Badge>
                          );
                        })}
                        {hotel.amenities.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{hotel.amenities.length - 4} more
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-col md:flex-row md:items-center justify-between mt-auto pt-4 border-t border-gray-100">
                        <div className="mb-3 md:mb-0">
                          <div className="flex items-baseline">
                            <span className="text-2xl font-bold text-goa-blue">₹{hotel.price.toLocaleString()}</span>
                            <span className="text-gray-500 text-sm ml-1">/ night</span>
                          </div>
                          <p className="text-gray-500 text-xs">Includes taxes & fees</p>
                        </div>
                        
                        <Link to={`/hotels/${hotel.id}`}>
                          <Button className="w-full md:w-auto bg-goa-blue hover:bg-goa-blue/90">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelList;
