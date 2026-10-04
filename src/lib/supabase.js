import { createClient } from "@supabase/supabase-js";

const url = import.meta.env?.VITE_SUPABASE_URL;
const key = import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY;

// Only the public/publishable key belongs in the browser. RLS is the security boundary.
export const supabase = url && key ? createClient(url, key) : null;
