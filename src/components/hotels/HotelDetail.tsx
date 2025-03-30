
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { 
  Button,
  Card,
  CardContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Separator
} from "@/components/ui";
import { 
  Star, 
  MapPin, 
  Wifi, 
  Coffee, 
  Utensils, 
  Dumbbell, 
  Swimming, 
  Waves, 
  Heart,
  ThumbsUp,
  Share2,
  Calendar,
  Users,
  Check,
  ChevronLeft
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BookingForm from "./BookingForm";

// Mock hotel data - in a real app this would come from an API
const hotelData = {
  id: 1,
  name: "Taj Resort & Spa",
  description: "Nestled on the pristine shores of Calangute Beach, Taj Resort & Spa offers an exquisite blend of luxury and tranquility. With breathtaking views of the Arabian Sea, our resort features elegantly appointed rooms, world-class dining options, and a rejuvenating spa.",
  location: "Calangute Beach, North Goa",
  price: 12500,
  rating: 4.8,
  reviews: 246,
  mainImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  images: [
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    "https://images.unsplash.com/photo-1590073242678-70ee3fc28f17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
    "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
  ],
  amenities: [
    { name: "Free WiFi", icon: Wifi },
    { name: "Breakfast", icon: Coffee },
    { name: "Restaurant", icon: Utensils },
    { name: "Fitness Center", icon: Dumbbell },
    { name: "Swimming Pool", icon: Swimming },
    { name: "Beach Access", icon: Waves }
  ],
  rooms: [
    {
      id: 1,
      name: "Deluxe Garden View",
      price: 12500,
      capacity: 2,
      size: "35 m²",
      beds: "1 King Bed",
      amenities: ["Air Conditioning", "Flat-screen TV", "Free WiFi", "Private Bathroom"],
      image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80"
    },
    {
      id: 2,
      name: "Premium Ocean View",
      price: 18000,
      capacity: 2,
      size: "45 m²",
      beds: "1 King Bed",
      amenities: ["Ocean View", "Air Conditioning", "Flat-screen TV", "Free WiFi", "Private Bathroom", "Balcony"],
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    },
    {
      id: 3,
      name: "Luxury Suite",
      price: 25000,
      capacity: 4,
      size: "70 m²",
      beds: "1 King Bed + 1 Sofa Bed",
      amenities: ["Ocean View", "Air Conditioning", "Flat-screen TV", "Free WiFi", "Private Bathroom", "Balcony", "Living Area", "Mini Bar"],
      image: "https://images.unsplash.com/photo-1631049035182-249067d7618e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ],
  about: "Set amidst lush tropical gardens and swaying palms, Taj Resort & Spa is a haven of tranquility on Goa's most famous beach. Our architecture blends Portuguese colonial influences with contemporary luxury, creating a unique atmosphere that celebrates Goa's rich heritage.\n\nOur commitment to exceptional service ensures that every aspect of your stay exceeds expectations. From the moment you arrive, our attentive staff is dedicated to creating memorable experiences tailored to your preferences."
};

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [mainImage, setMainImage] = useState(hotelData.mainImage);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // In a real app, you would fetch the hotel data based on the ID
  // const { data: hotel, isLoading, error } = useQuery(['hotel', id], () => fetchHotel(id));

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/hotels" className="flex items-center text-goa-blue hover:underline mb-4">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Hotels
        </Link>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{hotelData.name}</h1>
            <div className="flex items-center text-gray-600 mt-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{hotelData.location}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1.5">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
              <span className="font-semibold">{hotelData.rating}</span>
              <span className="text-gray-500 ml-1">({hotelData.reviews} reviews)</span>
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className={`rounded-full ${isWishlisted ? 'text-red-500' : 'text-gray-500'}`}
              onClick={toggleWishlist}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
            </Button>
            
            <Button variant="outline" size="icon" className="rounded-full text-gray-500">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Image gallery */}
          <div className="mb-8">
            <div className="rounded-lg overflow-hidden h-[400px] mb-2">
              <img 
                src={mainImage} 
                alt={hotelData.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {hotelData.images.map((image, index) => (
                <div 
                  key={index}
                  className={`rounded-lg overflow-hidden h-20 cursor-pointer border-2 ${
                    mainImage === image ? 'border-goa-blue' : 'border-transparent'
                  }`}
                  onClick={() => setMainImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${hotelData.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Tabs section */}
          <Tabs defaultValue="about" className="mb-8">
            <TabsList className="w-full justify-start border-b rounded-none">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="pt-6">
              <h3 className="text-xl font-semibold mb-4">About {hotelData.name}</h3>
              <p className="text-gray-700 whitespace-pre-line">{hotelData.about}</p>
            </TabsContent>
            
            <TabsContent value="rooms" className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Available Rooms</h3>
              <div className="space-y-4">
                {hotelData.rooms.map((room) => (
                  <Card key={room.id} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="md:col-span-1 h-40 md:h-full">
                        <img 
                          src={room.image} 
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-3 p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-lg">{room.name}</h4>
                          <div>
                            <span className="font-bold text-goa-blue text-lg">₹{room.price.toLocaleString()}</span>
                            <span className="text-gray-500 text-sm"> / night</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 my-3 text-sm">
                          <div className="flex items-center text-gray-600">
                            <Users className="h-4 w-4 mr-2" />
                            {room.capacity} Guests
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="h-4 w-4 mr-2" />
                            {room.size}
                          </div>
                          <div className="flex items-center text-gray-600 col-span-2">
                            <Check className="h-4 w-4 mr-2" />
                            {room.beds}
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-2 mb-4">
                          {room.amenities.slice(0, 4).map((amenity, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                          {room.amenities.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{room.amenities.length - 4} more
                            </Badge>
                          )}
                        </div>
                        
                        <Button className="bg-goa-blue hover:bg-goa-blue/90">
                          Select Room
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="amenities" className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Hotel Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotelData.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <amenity.icon className="h-5 w-5 text-goa-blue mr-2" />
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="location" className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="bg-gray-200 rounded-lg h-[300px] flex items-center justify-center">
                <p className="text-gray-500">Map view would be displayed here</p>
              </div>
              <div className="mt-4">
                <h4 className="font-medium mb-2">Points of Interest</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Calangute Beach</span>
                    <span>50 m</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Baga Beach</span>
                    <span>2 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fort Aguada</span>
                    <span>5 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dabolim Airport</span>
                    <span>40 km</span>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Booking form */}
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <BookingForm hotel={hotelData} />
            
            <Card className="mt-6">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3">Why Book With Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ThumbsUp className="h-5 w-5 text-goa-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Best rates guarantee</span>
                  </li>
                  <li className="flex items-start">
                    <ThumbsUp className="h-5 w-5 text-goa-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Free cancellation up to 24 hours before check-in</span>
                  </li>
                  <li className="flex items-start">
                    <ThumbsUp className="h-5 w-5 text-goa-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">24/7 customer support</span>
                  </li>
                  <li className="flex items-start">
                    <ThumbsUp className="h-5 w-5 text-goa-blue mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Secure payment options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;

// Adding missing imports
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
