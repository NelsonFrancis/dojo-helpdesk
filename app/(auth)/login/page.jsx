"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

   const supabase = createClientComponentClient();
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setError("");

   
    const {error} = await supabase.auth.signInWithPassword({
      email, password
    })

    if(error){
      setError(error.message);
    }
    if(!error){
      router.push("/")
    }
    console.log(email, password)
  }

  return (
    <main>
      <h2 className="text-center">Login</h2>

      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </main>
  )
}