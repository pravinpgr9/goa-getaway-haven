
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon, UserIcon, Search, MapPin, Home } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // In a real app, this would be from auth state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <MapPin className="h-6 w-6 text-goa-coral" />
          <span className="text-xl font-bold text-goa-blue">GoaGetaway</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-goa-blue transition-colors">
            Home
          </Link>
          <Link to="/hotels" className="text-gray-700 hover:text-goa-blue transition-colors">
            Hotels
          </Link>
          <Link to="/experiences" className="text-gray-700 hover:text-goa-blue transition-colors">
            Experiences
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-goa-blue transition-colors">
            About Goa
          </Link>
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserIcon className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/bookings" className="w-full">My Bookings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <button className="w-full text-left" onClick={() => setIsLoggedIn(false)}>
                    Sign Out
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/signin">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-goa-blue hover:bg-goa-blue/90">Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-goa-blue transition-colors">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/hotels" className="flex items-center space-x-2 text-gray-700 hover:text-goa-blue transition-colors">
              <Search className="h-5 w-5" />
              <span>Hotels</span>
            </Link>
            <Link to="/experiences" className="text-gray-700 hover:text-goa-blue transition-colors">
              Experiences
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-goa-blue transition-colors">
              About Goa
            </Link>
            <div className="pt-4 border-t border-gray-200">
              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="block py-2 text-gray-700 hover:text-goa-blue transition-colors">
                    Profile
                  </Link>
                  <Link to="/bookings" className="block py-2 text-gray-700 hover:text-goa-blue transition-colors">
                    My Bookings
                  </Link>
                  <button
                    className="block py-2 text-gray-700 hover:text-goa-blue transition-colors"
                    onClick={() => setIsLoggedIn(false)}
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-2 pt-2">
                  <Link to="/signin">
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="w-full bg-goa-blue hover:bg-goa-blue/90">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
