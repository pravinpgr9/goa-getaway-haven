
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Calendar, Users } from "lucide-react";
import { useState } from "react";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [location, setLocation] = useState("Calangute, Goa");
  const [guests, setGuests] = useState("2");

  const handleSearch = () => {
    console.log({
      location,
      checkIn,
      checkOut,
      guests,
    });
    // In a real app, this would navigate to search results with the parameters
  };

  return (
    <section className="relative h-[80vh] flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="container mx-auto px-4 z-10 max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-up">
            Discover Paradise in Goa
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Experience the perfect blend of beaches, culture, and luxury. Book your dream Goan getaway today.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 mx-auto max-w-4xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <label className="text-sm font-medium text-gray-700 mb-1 block text-left">Location</label>
                <div className="flex">
                  <div className="flex items-center pl-3 bg-gray-50 text-gray-500 rounded-l-md border border-r-0 border-gray-300">
                    <Search size={16} />
                  </div>
                  <Input
                    type="text"
                    placeholder="Where are you going?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="rounded-l-none"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block text-left">Check-in</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <Calendar className="mr-2 h-4 w-4" />
                      {checkIn ? format(checkIn, "PP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={checkIn}
                      onSelect={setCheckIn}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block text-left">Check-out</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <Calendar className="mr-2 h-4 w-4" />
                      {checkOut ? format(checkOut, "PP") : <span>Select date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      initialFocus
                      disabled={(date) => !checkIn || date < checkIn}
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block text-left">Guests</label>
                <div className="flex">
                  <div className="flex items-center pl-3 bg-gray-50 text-gray-500 rounded-l-md border border-r-0 border-gray-300">
                    <Users size={16} />
                  </div>
                  <Input
                    type="number"
                    min="1"
                    placeholder="Guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="rounded-l-none"
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <Button 
                onClick={handleSearch}
                className="w-full md:w-auto bg-goa-blue hover:bg-goa-blue/90"
              >
                Search Hotels
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
