'use server';

import type { CartItem } from '@/types/products';
import { cookies } from 'next/headers';

export async function updateCart(data: CartItem[]) {
  const cartCookie = await cookies();

  cartCookie.set('cart', JSON.stringify(data));
}
