import Link from "next/link";

async function fetchTickets() {
    await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch("http://localhost:4000/tickets", {
        next:{
            revalidate: 0
        }
    });
    return res.json();
}

export default async function TicketList(){
    const tickets = await fetchTickets();
    return(
        <>
            {
                tickets.map(ticket => (
                   <Link key={ticket.id} href={`/tickets/${ticket.id}`}> 
                    <div className="card my-5">
                            <h3>{ticket.title}</h3>
                            <p>{ticket.body.slice(0,200)}...</p>
                            <div className={`pill ${ticket.priority}`}>
                                {ticket.priority} priority
                            </div>
                        </div>
                    </Link>
                ))
            }
            {
                tickets.length === 0 && (
                    <p className="text-center">There are no open tickets</p>
                )
            }
        </>
    )
}