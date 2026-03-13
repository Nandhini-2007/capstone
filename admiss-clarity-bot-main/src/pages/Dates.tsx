import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { CalendarDays } from "lucide-react";

const timeline = [
  { date: "March 15, 2026", event: "Applications Open", desc: "Online portal opens for Fall 2026 applications" },
  { date: "April 15, 2026", event: "Early Decision Deadline", desc: "Last date for early decision applications" },
  { date: "May 15, 2026", event: "Early Decision Results", desc: "Results announced for early decision applicants" },
  { date: "June 30, 2026", event: "Regular Application Deadline", desc: "Final deadline for regular applications" },
  { date: "July 31, 2026", event: "Regular Decision Results", desc: "Results announced for regular applicants" },
  { date: "August 15, 2026", event: "Enrollment Confirmation", desc: "Last date to confirm enrollment and pay deposit" },
  { date: "September 1, 2026", event: "Fall Semester Begins", desc: "Orientation week and classes commence" },
];

const Dates = () => {
  return (
    <PageLayout activeSection="dates">
      <div className="flex items-center gap-2 mb-6">
        <CalendarDays className="h-6 w-6 text-primary" strokeWidth={1.5} />
        <h2 className="text-2xl font-semibold text-foreground">Important Dates</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-6">Key dates for the Fall 2026 admission cycle. Mark your calendar and don't miss any deadlines.</p>

      <InfoCard title="Fall 2026 Admission Timeline">
        <div className="space-y-4">
          {timeline.map((d, i) => (
            <div key={d.date} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1" />
                {i < timeline.length - 1 && <div className="w-0.5 h-full bg-border min-h-[24px]" />}
              </div>
              <div>
                <p className="text-xs font-medium text-primary">{d.date}</p>
                <p className="font-medium text-foreground text-sm">{d.event}</p>
                <p className="text-xs text-muted-foreground">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </InfoCard>
    </PageLayout>
  );
};

export default Dates;
