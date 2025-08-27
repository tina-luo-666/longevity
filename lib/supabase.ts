import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types for type safety
export interface SignupData {
  id?: string;
  name: string;
  email: string;
  location: string;
  age_range?: string;
  interested_in: string;
  created_at?: string;
  updated_at?: string;
}

// API functions for signup operations
export async function submitSignup(
  data: Omit<SignupData, "id" | "created_at" | "updated_at">
) {
  try {
    const { data: result, error } = await supabase
      .from("signups")
      .insert([
        {
          name: data.name,
          email: data.email,
          location: data.location,
          age_range: data.age_range || null,
          interested_in: data.interested_in,
        },
      ])
      .select();

    if (error) {
      throw error;
    }

    return { success: true, data: result };
  } catch (error) {
    console.error("Error submitting signup:", error);
    return {
      success: false,
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

// Function to check if email already exists
export async function checkEmailExists(email: string) {
  try {
    const { data, error } = await supabase
      .from("signups")
      .select("email")
      .eq("email", email)
      .single();

    if (error && error.code !== "PGRST116") {
      // PGRST116 is "no rows returned"
      throw error;
    }

    return !!data;
  } catch (error) {
    console.error("Error checking email:", error);
    return false;
  }
}

// Function to get signup statistics (optional - for admin dashboard)
export async function getSignupStats() {
  try {
    const { count, error } = await supabase
      .from("signups")
      .select("*", { count: "exact", head: true });

    if (error) {
      throw error;
    }

    return { success: true, count: count || 0 };
  } catch (error) {
    console.error("Error getting signup stats:", error);
    return { success: false, count: 0 };
  }
}
