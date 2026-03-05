import { baseUrl } from '@/lib/utils';
import type { CartItem } from '@/types/products';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { LuShoppingBag } from 'react-icons/lu';

async function Header() {
  const cartCookie = await cookies();
  const cart = cartCookie.get('cart');
  const data: CartItem[] = cart ? JSON.parse(cart.value) : [];
  const totalLength = data.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <header className="bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto flex items-center gap-8 px-4 py-6">
        <Link className="text-2xl font-bold" href="/">
          NEXTIX
        </Link>
        <Link
          className="ml-auto hover:underline"
          href={{
            pathname: `${baseUrl}/products`,
          }}
        >
          all products
        </Link>
        <Link
          aria-label="cart"
          data-test-id="cart-link"
          className="relative"
          href={{
            pathname: `${baseUrl}/cart`,
          }}
        >
          <LuShoppingBag size={28} />
          {totalLength > 0 && (
            <span className="flex w-6 h-6 items-center text-sm justify-center rounded-full text-white bg-red-600 absolute -top-3 -right-3">
              {totalLength}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
