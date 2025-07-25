// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://sfvkspsagskwmqgxkwpk.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmdmtzcHNhZ3Nrd21xZ3hrd3BrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwMjg1MzMsImV4cCI6MjA2NzYwNDUzM30.2pU8S2Avcg51S_Z9UQ8lCO_y-W4GP186njkyf8J_Fnw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});