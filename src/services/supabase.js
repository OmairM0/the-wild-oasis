import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fjgzcizlucwrraoqrfcb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqZ3pjaXpsdWN3cnJhb3FyZmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NzAwNzcsImV4cCI6MjAxNjA0NjA3N30.abpu_cYq2XyUFspq6qVRAOwBXG-7fSuFIq3sFBOdbSk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
