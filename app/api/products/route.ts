import { sql } from '@/databases/products';
import type { EventTicket } from '@/types/products';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
): Promise<NextResponse<EventTicket[] | { error: string }>> {
  try {
    const products = await sql<EventTicket[]>`
    SELECT
      *
    FROM
      products;
  `;

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
