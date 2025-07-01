import Navbar from "../components/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardLayout({children}){
    const supabase = createServerComponentClient({cookies});
    const {data} = await supabase.auth.getSession();
    console.log("dat==",data);
    if(!data.session){
        redirect("/login")
    }
    return(
        <>
            <Navbar  userData={data.session.user}/>
            <h1>Dashboard Layout</h1>
            {children}
        </>
    )
}