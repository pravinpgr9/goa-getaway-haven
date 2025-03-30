
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, Users, CreditCard, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingFormProps {
  hotel: {
    id: number;
    name: string;
    price: number;
  };
}

const bookingSchema = z.object({
  checkIn: z.date({
    required_error: "Check-in date is required",
  }),
  checkOut: z.date({
    required_error: "Check-out date is required",
  }),
  guests: z.string().min(1, "Number of guests is required"),
  rooms: z.string().min(1, "Number of rooms is required"),
}).refine(data => data.checkOut > data.checkIn, {
  message: "Check-out date must be after check-in date",
  path: ["checkOut"],
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const BookingForm = ({ hotel }: BookingFormProps) => {
  const [isBooking, setIsBooking] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      guests: "2",
      rooms: "1",
    },
  });

  const checkIn = form.watch("checkIn");
  const checkOut = form.watch("checkOut");
  
  // Calculate number of nights
  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    return Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
  };
  
  const nights = calculateNights();
  
  // Calculate total price
  const calculateTotal = () => {
    const subtotal = hotel.price * nights * parseInt(form.watch("rooms") || "1");
    const taxes = subtotal * 0.18; // 18% GST
    return { subtotal, taxes, total: subtotal + taxes };
  };
  
  const { subtotal, taxes, total } = calculateTotal();
  
  const onSubmit = async (data: BookingFormValues) => {
    setIsBooking(true);
    
    try {
      // In a real app, this would connect to your booking API
      console.log("Booking data:", {
        ...data,
        hotelId: hotel.id,
        nights,
        total,
      });
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Booking Confirmed!",
        description: `Your stay at ${hotel.name} has been booked successfully.`,
      });
      
      // In a real app, redirect to booking confirmation page
    } catch (error) {
      console.error("Error booking:", error);
      toast({
        title: "Booking Failed",
        description: "An error occurred while processing your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <Card className="shadow-lg border-goa-blue/20">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4">Book Your Stay</h3>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="checkIn"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Check-in</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "MMM dd, yyyy")
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="checkOut"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Check-out</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "MMM dd, yyyy")
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => !checkIn || date <= checkIn}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Guests</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="rooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rooms</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select rooms" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Room" : "Rooms"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {nights > 0 && (
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>₹{hotel.price.toLocaleString()} x {nights} nights x {form.watch("rooms")} {parseInt(form.watch("rooms") || "1") > 1 ? "rooms" : "room"}</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Taxes & Fees (18%)</span>
                  <span>₹{taxes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t border-gray-200 mt-2">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-goa-blue hover:bg-goa-blue/90"
              disabled={isBooking || nights === 0}
            >
              {isBooking ? "Processing..." : "Book Now"}
            </Button>
            
            <div className="flex items-center justify-center text-xs text-gray-500 gap-2">
              <CreditCard className="h-3 w-3" />
              <span>Secure payment with major credit cards</span>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
