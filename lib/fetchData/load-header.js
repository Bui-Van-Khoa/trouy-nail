

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server';
;


export async function loadHeaderImage() {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore);
	const { data } =  supabase.storage.from('trouy-nail').getPublicUrl('logo/Pure203_edited.webp')
  return data
}