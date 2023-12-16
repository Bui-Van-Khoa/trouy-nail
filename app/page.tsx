import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Notes() {
	const cookieStore = cookies()
	const supabase = createClient(cookieStore);
	const { data } = await supabase.from("notes").select()
	console.log("data", data)

	return (
		<div>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}