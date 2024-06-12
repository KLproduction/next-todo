import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error ) {
    redirect('/login')
  }

  return (
    <div>
      <p>Hello {data.user.email}</p>
    </div>
    )
}