// Supabase client
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const supabaseClient = createSupabaseLoadClient(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY
);
