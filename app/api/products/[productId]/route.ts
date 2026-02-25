import { sql } from '@/databases/products';
import type { EventTicket } from '@/types/products';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: RouteContext<'/api/products/[productId]'>,
) {
  try {
    const { productId } = await params;
    const [product] = await sql<EventTicket[]>`
    SELECT
      *
    FROM
      products
    WHERE
      product_id = ${productId};
  `;

    return NextResponse.json(product);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
