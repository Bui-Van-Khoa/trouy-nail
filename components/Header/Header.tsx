import React from 'react'
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import {loadHeaderImage} from '@/lib/fetchData/load-header'
import Image from 'next/image'

const Header = async() => {

	const cookieStore = cookies()
	const supabase = createClient(cookieStore);
	const { data } =  supabase.storage.from('trouy-nail').getPublicUrl('logo/Pure203_edited.webp')
	const response = await loadHeaderImage();
	console.log("response", response)
	return (
		<header>
      <nav>
        <div>
          <Image
            src={response.publicUrl}
            width={80}
            height={80}
            alt="Picture of the author"
    />
			  </div>
      </nav>
    </header>
	)
}

export default Header
