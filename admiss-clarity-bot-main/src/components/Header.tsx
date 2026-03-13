import universityLogo from "@/assets/university-logo.png";

const Header = () => {
  return (
    <header className="h-16 bg-header border-b flex items-center px-6 shrink-0">
      <div className="flex items-center gap-3">
        <img src={universityLogo} alt="University Crest" className="h-10 w-10 object-contain" />
        <div>
          <h1 className="text-lg font-semibold text-foreground leading-tight">Greenfield University</h1>
          <p className="text-xs text-muted-foreground leading-tight">Admission Portal</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
