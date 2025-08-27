# Supabase Setup Guide

Your signup form is now ready for Supabase integration! Follow these steps to complete the setup:

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New project"
3. Choose your organization and give your project a name (e.g., "Longevity Landing")
4. Set a secure database password
5. Choose a region closest to your users
6. Click "Create new project"

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (looks like: `https://your-project-ref.supabase.co`)
   - **Project API Key** (anon public key)

## 3. Set Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace the values with your actual Supabase credentials.

## 4. Create the Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy and paste the contents of `supabase-schema.sql` from this project
4. Click "Run" to execute the SQL

This will create:

- A `signups` table with all necessary fields
- Proper constraints and validation
- Row Level Security (RLS) policies
- Indexes for better performance

## 5. Test Your Integration

1. Restart your development server: `npm run dev`
2. Navigate to your signup form
3. Try submitting a test signup
4. Check your Supabase dashboard → **Table Editor** → **signups** to see the data

## 6. Verify Everything Works

Your signup form now includes:

- ✅ Real database storage via Supabase
- ✅ Email uniqueness validation
- ✅ Proper error handling and user feedback
- ✅ Type-safe database operations
- ✅ Security policies

## Troubleshooting

### Common Issues:

1. **Environment variables not loading:**

   - Make sure `.env.local` is in your project root
   - Restart your development server after adding environment variables
   - Check that variable names start with `NEXT_PUBLIC_`

2. **Database connection errors:**

   - Verify your Supabase URL and API key are correct
   - Make sure your Supabase project is active

3. **RLS policy errors:**

   - Ensure you ran the complete SQL schema from `supabase-schema.sql`
   - Check that the insert policy is enabled for anonymous users

4. **Email already exists errors:**
   - This is expected behavior for duplicate emails
   - Try with different email addresses

## Next Steps

- **Email Notifications:** Consider setting up email confirmation
- **Analytics:** Track signup conversion rates
- **Admin Dashboard:** Build a page to view signups (using authenticated policies)
- **Export Data:** Add functionality to export signup data

Your signup form is now fully functional with Supabase! 🎉
