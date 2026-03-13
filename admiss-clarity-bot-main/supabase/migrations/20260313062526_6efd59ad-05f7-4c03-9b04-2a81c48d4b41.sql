
CREATE TABLE public.admissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  gender TEXT NOT NULL,
  address TEXT NOT NULL,
  program TEXT NOT NULL,
  previous_institution TEXT NOT NULL,
  gpa NUMERIC(3,2),
  personal_statement TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit admission application"
  ON public.admissions FOR INSERT
  WITH CHECK (true);
