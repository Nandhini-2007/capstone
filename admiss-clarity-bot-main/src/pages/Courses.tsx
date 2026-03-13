import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { BookOpen } from "lucide-react";

const courses = [
  { name: "Computer Science", duration: "4 years", desc: "AI, cybersecurity, software engineering, data science", seats: 120, eligibility: "10+2 with Mathematics & Science" },
  { name: "Business Administration", duration: "4 years", desc: "Finance, marketing, management, entrepreneurship", seats: 150, eligibility: "10+2 any stream with 50% aggregate" },
  { name: "Engineering", duration: "4 years", desc: "Civil, mechanical, electrical, and chemical engineering", seats: 200, eligibility: "10+2 with Physics, Chemistry & Mathematics" },
  { name: "Medicine", duration: "6 years", desc: "MBBS program with clinical rotations and research", seats: 80, eligibility: "10+2 with Physics, Chemistry & Biology" },
  { name: "Law", duration: "3 years", desc: "Corporate law, international law, human rights", seats: 100, eligibility: "Undergraduate degree with 50% aggregate" },
  { name: "Liberal Arts", duration: "4 years", desc: "Philosophy, history, literature, and social sciences", seats: 90, eligibility: "10+2 any stream" },
];

const Courses = () => {
  return (
    <PageLayout activeSection="courses">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="h-6 w-6 text-primary" strokeWidth={1.5} />
        <h2 className="text-2xl font-semibold text-foreground">Programs & Courses</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-6">Explore our diverse range of undergraduate and graduate programs designed to shape future leaders.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((c) => (
          <InfoCard key={c.name} title={c.name}>
            <div className="space-y-2">
              <p className="font-medium text-foreground text-xs">Duration: {c.duration} · Seats: {c.seats}</p>
              <p>{c.desc}</p>
              <p className="text-xs"><span className="font-medium text-foreground">Eligibility:</span> {c.eligibility}</p>
            </div>
          </InfoCard>
        ))}
      </div>
    </PageLayout>
  );
};

export default Courses;
