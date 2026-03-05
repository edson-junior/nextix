import { cookies } from 'next/headers';
import Cart from './Cart';

export default async function CartPage() {
  const cartCookie = await cookies();
  const cartData = cartCookie.get('cart')?.value;

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <main className="px-4 pb-20 pt-16">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <Cart cartData={JSON.parse(cartData ?? '[]')} />
      </main>
    </div>
  );
}
