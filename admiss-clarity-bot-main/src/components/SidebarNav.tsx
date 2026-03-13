import { Home, MessageCircle, BookOpen, DollarSign, FileText, CalendarDays } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: MessageCircle, label: "Chatbot", path: "/chatbot" },
  { icon: BookOpen, label: "Courses", path: "/courses" },
  { icon: DollarSign, label: "Fee Structure", path: "/fees" },
  { icon: FileText, label: "Application", path: "/application" },
  { icon: CalendarDays, label: "Dates", path: "/dates" },
];

interface SidebarNavProps {
  activeSection?: string;
  onNavigate?: (id: string) => void;
}

const SidebarNav = ({ activeSection, onNavigate }: SidebarNavProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside className="w-16 bg-secondary border-r flex flex-col items-center py-6 gap-1 shrink-0">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const isHovered = hoveredItem === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            onMouseEnter={() => setHoveredItem(item.path)}
            onMouseLeave={() => setHoveredItem(null)}
            className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-150 group relative ${
              isActive ? "bg-primary/10" : "hover:bg-primary/5"
            }`}
            title={item.label}
          >
            <item.icon
              className={`h-5 w-5 transition-colors duration-150 ${
                isActive || isHovered ? "text-primary" : "text-muted-foreground"
              }`}
              strokeWidth={1.5}
            />
            <span className="absolute left-full ml-2 px-2 py-1 bg-foreground text-primary-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              {item.label}
            </span>
          </button>
        );
      })}
    </aside>
  );
};

export default SidebarNav;
