import Header from "@/components/Header";
import SidebarNav from "@/components/SidebarNav";
import Footer from "@/components/Footer";
import InfoCard from "@/components/InfoCard";
import { useNavigate } from "react-router-dom";
import { BookOpen, DollarSign, FileText, CalendarDays, MessageCircle } from "lucide-react";

const quickLinks = [
  { icon: BookOpen, label: "Programs & Courses", desc: "Explore our academic offerings", path: "/courses" },
  { icon: DollarSign, label: "Fee Structure", desc: "View tuition and scholarships", path: "/fees" },
  { icon: FileText, label: "Apply Now", desc: "Submit your admission application", path: "/application" },
  { icon: CalendarDays, label: "Important Dates", desc: "Key deadlines and events", path: "/dates" },
  { icon: MessageCircle, label: "Ask the Bot", desc: "Get instant answers to your queries", path: "/chatbot" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SidebarNav />
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-1">Welcome to Admissions</h2>
              <p className="text-sm text-muted-foreground mb-6">Your gateway to academic excellence at Greenfield University</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard title="About the University">
                  <p>Greenfield University is a leading institution committed to academic excellence and innovation. Founded in 1892, we have a rich tradition of nurturing future leaders across diverse disciplines. Our campus hosts state-of-the-art research facilities and a vibrant student community of over 15,000 students from 80+ countries.</p>
                </InfoCard>
                <InfoCard title="Why Choose Us?">
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li>Globally recognized degree programs</li>
                    <li>Distinguished faculty with industry experience</li>
                    <li>95% graduate employment rate within 6 months</li>
                    <li>$25M+ in annual scholarship funding</li>
                    <li>200+ partner universities for exchange programs</li>
                  </ul>
                </InfoCard>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => navigate(link.path)}
                    className="flex items-center gap-3 p-4 rounded-xl border bg-card hover:bg-primary/5 hover:border-primary/20 transition-colors text-left group"
                  >
                    <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-sm font-medium text-foreground">{link.label}</p>
                      <p className="text-xs text-muted-foreground">{link.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
