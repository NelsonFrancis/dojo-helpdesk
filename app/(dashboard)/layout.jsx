import Navbar from "../components/Navbar";

export default function DashboardLayout({children}){
    return(
        <>
            <Navbar />
            <h1>Dashboard Layout</h1>
            {children}
        </>
    )
}