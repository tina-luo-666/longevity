-- Create the signups table
-- Run this SQL in your Supabase SQL Editor

CREATE TABLE public.signups (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    location TEXT NOT NULL,
    age_range TEXT,
    interested_in TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add constraints for age_range values
ALTER TABLE public.signups 
ADD CONSTRAINT signups_age_range_check 
CHECK (age_range IS NULL OR age_range IN (
    '18-24', '25-34', '35-44', '45-54', '55-64', '65+'
));

-- Add constraints for interested_in values
ALTER TABLE public.signups 
ADD CONSTRAINT signups_interested_in_check 
CHECK (interested_in IN (
    'Preventing Alzheimer''s & dementia',
    'Extending healthy lifespan',
    'Reversing aging',
    'Optimizing brain health',
    'Maximizing physical vitality',
    'Other'
));

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
    BEFORE UPDATE ON public.signups
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Enable Row Level Security (RLS)
ALTER TABLE public.signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for signup form)
CREATE POLICY "Allow public signup inserts" ON public.signups
    FOR INSERT 
    TO public 
    WITH CHECK (true);

-- Create policy to allow reading for authenticated users only (optional)
-- CREATE POLICY "Allow authenticated read" ON public.signups
--     FOR SELECT 
--     TO authenticated 
--     USING (true);

-- Add indexes for better performance
CREATE INDEX idx_signups_email ON public.signups(email);
CREATE INDEX idx_signups_created_at ON public.signups(created_at);
CREATE INDEX idx_signups_interested_in ON public.signups(interested_in);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON public.signups TO anon;
GRANT SELECT ON public.signups TO authenticated;

-- Create the contact_messages table for the contact form
CREATE TABLE public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create updated_at trigger for contact_messages
CREATE TRIGGER set_contact_messages_updated_at
    BEFORE UPDATE ON public.contact_messages
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- Enable Row Level Security (RLS) for contact_messages
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for contact form)
CREATE POLICY "Allow public contact message inserts" ON public.contact_messages
    FOR INSERT 
    TO public 
    WITH CHECK (true);

-- Add indexes for better performance
CREATE INDEX idx_contact_messages_email ON public.contact_messages(email);
CREATE INDEX idx_contact_messages_created_at ON public.contact_messages(created_at);

-- Grant necessary permissions for contact_messages
GRANT INSERT ON public.contact_messages TO anon;
GRANT SELECT ON public.contact_messages TO authenticated;
