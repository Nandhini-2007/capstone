import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t px-8 py-5 shrink-0">
      <div className="flex flex-wrap gap-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" strokeWidth={1.5} />
          <span>admissions@greenfield.edu</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" strokeWidth={1.5} />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" strokeWidth={1.5} />
          <span>42 Academic Drive, Cambridge, MA 02138</span>
        </div>
      </div>
      <p className="text-xs text-muted-foreground mt-3">© 2026 Greenfield University. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
