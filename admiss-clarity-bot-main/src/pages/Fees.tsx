import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { DollarSign } from "lucide-react";

const feeData = [
  ["Computer Science", "$12,000", "Lab access, software licenses"],
  ["Business Administration", "$10,500", "Case study materials"],
  ["Engineering", "$12,000", "Workshop & lab facilities"],
  ["Medicine", "$18,000", "Clinical placements, lab kits"],
  ["Law", "$11,000", "Law library access, moot court"],
  ["Liberal Arts", "$9,500", "Studio access, field trips"],
];

const Fees = () => {
  return (
    <PageLayout activeSection="fees">
      <div className="flex items-center gap-2 mb-6">
        <DollarSign className="h-6 w-6 text-primary" strokeWidth={1.5} />
        <h2 className="text-2xl font-semibold text-foreground">Fee Structure</h2>
      </div>
      <p className="text-sm text-muted-foreground mb-6">Transparent pricing for all programs. Scholarships and financial aid are available for eligible students.</p>

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
              {feeData.map(([p, t, i]) => (
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <InfoCard title="Scholarships">
          <ul className="list-disc list-inside space-y-1.5">
            <li>Merit-based: Up to 50% tuition waiver (GPA &gt; 3.7)</li>
            <li>Need-based: Up to 75% tuition assistance</li>
            <li>Sports scholarships for varsity athletes</li>
            <li>International student grants available</li>
          </ul>
        </InfoCard>
        <InfoCard title="Payment Options">
          <ul className="list-disc list-inside space-y-1.5">
            <li>Full annual payment (5% discount)</li>
            <li>Semester-wise payment plan</li>
            <li>Monthly installment option available</li>
            <li>Education loan partnerships with major banks</li>
          </ul>
        </InfoCard>
      </div>
    </PageLayout>
  );
};

export default Fees;
