import { NextResponse } from "next/server";

export async function GET(_, { params }) {
    const id = params.id
    const res = await fetch(`http://localhost:4000/tickets/${id}`);
    const tickets = await res.json();

    if (!res.ok) {
    return NextResponse.json({error: 'Cannot find ticket'}, {
      status: 404
    })
  }

    return NextResponse.json(tickets, {
        status: 200
    })
}