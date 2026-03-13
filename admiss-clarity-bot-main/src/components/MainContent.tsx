import InfoCard from "./InfoCard";
import Chatbot from "./Chatbot";
import { useEffect, useRef } from "react";
import { BookOpen, DollarSign, FileText, CalendarDays } from "lucide-react";

interface MainContentProps {
  activeSection: string;
}

const MainContent = ({ activeSection }: MainContentProps) => {
  const sectionRefs: Record<string, React.RefObject<HTMLDivElement>> = {
    home: useRef<HTMLDivElement>(null),
    chatbot: useRef<HTMLDivElement>(null),
    courses: useRef<HTMLDivElement>(null),
    fees: useRef<HTMLDivElement>(null),
    application: useRef<HTMLDivElement>(null),
    dates: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    sectionRefs[activeSection]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeSection]);

  return (
    <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8">
      {/* Home */}
      <div ref={sectionRefs.home}>
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

      {/* Chatbot */}
      <div ref={sectionRefs.chatbot}>
        <Chatbot />
      </div>

      {/* Courses */}
      <div ref={sectionRefs.courses}>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-5 w-5 text-primary" strokeWidth={1.5} />
          <h2 className="text-xl font-semibold text-foreground">Programs & Courses</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Computer Science", duration: "4 years", desc: "AI, cybersecurity, software engineering, data science" },
            { name: "Business Administration", duration: "4 years", desc: "Finance, marketing, management, entrepreneurship" },
            { name: "Engineering", duration: "4 years", desc: "Civil, mechanical, electrical, and chemical engineering" },
            { name: "Medicine", duration: "6 years", desc: "MBBS program with clinical rotations and research" },
            { name: "Law", duration: "3 years", desc: "Corporate law, international law, human rights" },
            { name: "Liberal Arts", duration: "4 years", desc: "Philosophy, history, literature, and social sciences" },
          ].map((c) => (
            <InfoCard key={c.name} title={c.name}>
              <p className="font-medium text-foreground text-xs mb-1">{c.duration}</p>
              <p>{c.desc}</p>
            </InfoCard>
          ))}
        </div>
      </div>

      {/* Fees */}
      <div ref={sectionRefs.fees}>
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="h-5 w-5 text-primary" strokeWidth={1.5} />
          <h2 className="text-xl font-semibold text-foreground">Fee Structure</h2>
        </div>
        <InfoCard title="Annual Tuition (2026-2027)">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2 pr-4 font-medium text-foreground">Program</th>
                  <th className="py-2 pr-4 font-medium text-foreground">Tuition</th>
                  <th className="py-2 font-medium text-foreground">Includes</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Computer Science", "$12,000", "Lab access, software licenses"],
                  ["Business Administration", "$10,500", "Case study materials"],
                  ["Engineering", "$12,000", "Workshop & lab facilities"],
                  ["Medicine", "$18,000", "Clinical placements, lab kits"],
                  ["Law", "$11,000", "Law library access, moot court"],
                  ["Liberal Arts", "$9,500", "Studio access, field trips"],
                ].map(([p, t, i]) => (
                  <tr key={p} className="border-b last:border-0">
                    <td className="py-2 pr-4">{p}</td>
                    <td className="py-2 pr-4 font-medium text-foreground">{t}</td>
                    <td className="py-2">{i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </InfoCard>
      </div>

      {/* Application */}
      <div ref={sectionRefs.application}>
        <div className="flex items-center gap-2 mb-4">
          <FileText className="h-5 w-5 text-primary" strokeWidth={1.5} />
          <h2 className="text-xl font-semibold text-foreground">Application Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard title="How to Apply">
            <ol className="list-decimal list-inside space-y-1.5">
              <li>Create an account on our admissions portal</li>
              <li>Complete the online application form</li>
              <li>Upload required documents (transcripts, ID, test scores)</li>
              <li>Submit your personal statement (500-750 words)</li>
              <li>Request two academic recommendation letters</li>
              <li>Pay the application fee ($75, waiver available)</li>
            </ol>
          </InfoCard>
          <InfoCard title="Required Documents">
            <ul className="list-disc list-inside space-y-1.5">
              <li>Official high school / undergraduate transcripts</li>
              <li>Standardized test scores (SAT/ACT/GRE)</li>
              <li>Personal statement or essay</li>
              <li>Two letters of recommendation</li>
              <li>Valid government-issued photo ID</li>
              <li>English proficiency proof (international students)</li>
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Dates */}
      <div ref={sectionRefs.dates}>
        <div className="flex items-center gap-2 mb-4">
          <CalendarDays className="h-5 w-5 text-primary" strokeWidth={1.5} />
          <h2 className="text-xl font-semibold text-foreground">Important Dates</h2>
        </div>
        <InfoCard title="Fall 2026 Admission Timeline">
          <div className="space-y-3">
            {[
              { date: "March 15, 2026", event: "Applications Open" },
              { date: "April 15, 2026", event: "Early Decision Deadline" },
              { date: "May 15, 2026", event: "Early Decision Results" },
              { date: "June 30, 2026", event: "Regular Application Deadline" },
              { date: "July 31, 2026", event: "Regular Decision Results" },
              { date: "August 15, 2026", event: "Enrollment Confirmation Deadline" },
              { date: "September 1, 2026", event: "Fall Semester Begins" },
            ].map((d) => (
              <div key={d.date} className="flex items-start gap-3">
                <span className="text-xs font-medium text-primary min-w-[120px]">{d.date}</span>
                <span>{d.event}</span>
              </div>
            ))}
          </div>
        </InfoCard>
      </div>
    </div>
  );
};

export default MainContent;
