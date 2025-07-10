import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dnuwsamkszagjulouqjt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRudXdzYW1rc3phZ2p1bG91cWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxMDgxOTQsImV4cCI6MjA2NTY4NDE5NH0.0v2QRCc8Nm6KCgLAT3fNVipdpZfV98N3Pd_5TQ3jzqI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
