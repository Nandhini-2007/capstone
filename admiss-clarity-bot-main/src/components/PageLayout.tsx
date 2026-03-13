import Header from "./Header";
import SidebarNav from "./SidebarNav";
import Footer from "./Footer";

interface PageLayoutProps {
  activeSection: string;
  children: React.ReactNode;
}

const PageLayout = ({ activeSection, children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <SidebarNav activeSection={activeSection} onNavigate={() => {}} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto px-8 py-6">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
