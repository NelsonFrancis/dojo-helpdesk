// import { useRouter } from 'next/navigation';



async function getTicketDetails(id) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`,{
        next:{
            revalidate: 60
        }
    });
    return res.json();
}
export default async function TicketDetails({params}) {
//     const router = useRouter();
// const { slug } = router.query;

//   if (slug === 'create') {
//     // Prevent dynamic rendering
//     if (typeof window !== 'undefined') {
//       router.push('/create');
//     }
//     return null;
//   }
    const ticket = await getTicketDetails(params.id);

    return (
        <main>
            <nav>
                <h2>Ticket details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
            </div>
        </main>
    )
}