import { baseUrl } from '@/lib/utils';
import Link from 'next/link';
import { LuShoppingBag } from 'react-icons/lu';

function Header() {
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
          href={{
            pathname: `${baseUrl}/cart`,
          }}
        >
          <LuShoppingBag size={28} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
