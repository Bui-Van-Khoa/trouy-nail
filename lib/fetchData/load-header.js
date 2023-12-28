import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export async function loadHeaderImage() {
  const { data } = await supabase.storage
    .from('trouy-nail')
    .getPublicUrl('logo/Pure203_edited.webp');
  const imageUrl = data.publicUrl;
  return imageUrl;
}

export async function loadHeaderServices() {
  const { data } = await supabase.from('header').select();
  return data;
}
