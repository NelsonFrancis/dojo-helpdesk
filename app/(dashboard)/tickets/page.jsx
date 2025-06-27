import { Suspense } from "react";
import TicketList from "./Ticketlist";
import Loading from "../loading";
import Link from 'next/link'

export default function Tickets() {
  return (
    <main>
        <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets</small></p>
        </div>
        <Link className="create_btn" href="/tickets/create">Create Ticket</Link>
        <Suspense fallback={<Loading />}>
            <TicketList />
        </Suspense>
    </main>
  )
}