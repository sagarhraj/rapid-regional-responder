
import { useLocation, Link } from "react-router-dom";
import { Home, MapPin, AlertCircle, Clock3, User, Coins } from "lucide-react";

export const BottomNav = () => {
  const { pathname } = useLocation();
  
  const links = [
    {
      href: "/",
      label: "Home",
      icon: <Home className="h-5 w-5" />
    },
    {
      href: "/nearby",
      label: "Nearby",
      icon: <MapPin className="h-5 w-5" />
    },
    {
      href: "/report",
      label: "Report",
      icon: <AlertCircle className="h-5 w-5" />
    },
    {
      href: "/history",
      label: "History",
      icon: <Clock3 className="h-5 w-5" />
    },
    {
      href: "/tokens",
      label: "Tokens",
      icon: <Coins className="h-5 w-5" />
    },
    {
      href: "/profile",
      label: "Profile",
      icon: <User className="h-5 w-5" />
    }
  ];
  
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 h-16 border-t bg-background/80 backdrop-blur-lg md:hidden">
      <div className="flex h-full items-center justify-around px-2">
        {links.map(link => (
          <Link
            key={link.href}
            to={link.href}
            className={`flex h-full w-full flex-col items-center justify-center gap-1 text-xs ${
              pathname === link.href ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
