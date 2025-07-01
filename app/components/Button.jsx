"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation";

export default function Button() {
    const router = useRouter();
 const supabase = createClientComponentClient ();
    const handleLogout = async () => {
       
        const {error} = await supabase.auth.signOut();
         console.log("err12",error);
        if(!error){
            router.push('/login')
        }
        if(error){
            console.log("err",error);
        }
    }

  return (
    <button className="btn-primary" onClick={handleLogout}>Logout</button>
  )
}
