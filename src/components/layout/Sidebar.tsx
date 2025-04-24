import { Home, Heart, MapPin, History, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const menuItems = [
    { icon: <Home className="mr-2 h-5 w-5" />, label: "Home", path: "/" },
    { icon: <MapPin className="mr-2 h-5 w-5" />, label: "Nearby Cases", path: "/nearby" },
    { icon: <Heart className="mr-2 h-5 w-5" />, label: "Volunteer", path: "/volunteer" },
    { icon: <History className="mr-2 h-5 w-5" />, label: "History", path: "/history" },
    { icon: <Settings className="mr-2 h-5 w-5" />, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="h-full bg-sidebar pt-4">
      <div className="px-4 py-2">
        <h2 className="text-primary font-bold text-xl mb-6">RRR</h2>
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-sidebar-foreground hover:text-primary hover:bg-sidebar-accent"
              >
                {item.icon}
                {item.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 px-4">
        <Button variant="ghost" className="w-full justify-start text-sidebar-foreground hover:text-destructive">
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Button>
      </div>
    </div>
  );
};
