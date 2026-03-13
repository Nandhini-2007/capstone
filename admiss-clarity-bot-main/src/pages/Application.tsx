import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import InfoCard from "@/components/InfoCard";
import { FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const programs = [
  "Computer Science",
  "Business Administration",
  "Engineering",
  "Medicine",
  "Law",
  "Liberal Arts",
];

const Application = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    gender: "",
    address: "",
    program: "",
    previous_institution: "",
    gpa: "",
    personal_statement: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.full_name || !form.email || !form.phone || !form.date_of_birth || !form.gender || !form.address || !form.program || !form.previous_institution) {
      toast({ title: "Missing fields", description: "Please fill all required fields.", variant: "destructive" });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("admissions").insert({
      full_name: form.full_name,
      email: form.email,
      phone: form.phone,
      date_of_birth: form.date_of_birth,
      gender: form.gender,
      address: form.address,
      program: form.program,
      previous_institution: form.previous_institution,
      gpa: form.gpa ? parseFloat(form.gpa) : null,
      personal_statement: form.personal_statement || null,
    });
    setLoading(false);

    if (error) {
      toast({ title: "Submission failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Application submitted!", description: "We will review your application and get back to you." });
      setForm({ full_name: "", email: "", phone: "", date_of_birth: "", gender: "", address: "", program: "", previous_institution: "", gpa: "", personal_statement: "" });
    }
  };

  return (
    <PageLayout activeSection="application">
      <div className="flex items-center gap-2 mb-6">
        <FileText className="h-6 w-6 text-primary" strokeWidth={1.5} />
        <h2 className="text-2xl font-semibold text-foreground">Application Process</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form */}
        <div className="lg:col-span-2">
          <InfoCard title="Admission Application Form">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="full_name">Full Name *</Label>
                  <Input id="full_name" value={form.full_name} onChange={(e) => handleChange("full_name", e.target.value)} placeholder="Enter your full name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} placeholder="your@email.com" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input id="phone" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="dob">Date of Birth *</Label>
                  <Input id="dob" type="date" value={form.date_of_birth} onChange={(e) => handleChange("date_of_birth", e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label>Gender *</Label>
                  <Select value={form.gender} onValueChange={(v) => handleChange("gender", v)}>
                    <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label>Program *</Label>
                  <Select value={form.program} onValueChange={(v) => handleChange("program", v)}>
                    <SelectTrigger><SelectValue placeholder="Select program" /></SelectTrigger>
                    <SelectContent>
                      {programs.map((p) => <SelectItem key={p} value={p}>{p}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="address">Address *</Label>
                <Input id="address" value={form.address} onChange={(e) => handleChange("address", e.target.value)} placeholder="Your full address" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="prev_inst">Previous Institution *</Label>
                  <Input id="prev_inst" value={form.previous_institution} onChange={(e) => handleChange("previous_institution", e.target.value)} placeholder="School / College name" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="gpa">GPA (optional)</Label>
                  <Input id="gpa" type="number" step="0.01" min="0" max="4" value={form.gpa} onChange={(e) => handleChange("gpa", e.target.value)} placeholder="e.g. 3.75" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="statement">Personal Statement (optional)</Label>
                <Textarea id="statement" value={form.personal_statement} onChange={(e) => handleChange("personal_statement", e.target.value)} placeholder="Tell us about yourself and why you want to join..." rows={4} />
              </div>
              <Button type="submit" disabled={loading} className="w-full md:w-auto">
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </InfoCard>
        </div>

        {/* Sidebar info */}
        <div className="space-y-4">
          <InfoCard title="How to Apply">
            <ol className="list-decimal list-inside space-y-1.5">
              <li>Fill out the application form</li>
              <li>Upload required documents</li>
              <li>Submit personal statement</li>
              <li>Pay application fee ($75)</li>
              <li>Await decision (4-6 weeks)</li>
            </ol>
          </InfoCard>
          <InfoCard title="Required Documents">
            <ul className="list-disc list-inside space-y-1.5">
              <li>Official transcripts</li>
              <li>Standardized test scores</li>
              <li>Two recommendation letters</li>
              <li>Valid photo ID</li>
              <li>English proficiency proof</li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </PageLayout>
  );
};

export default Application;
