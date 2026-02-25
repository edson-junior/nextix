import { baseUrl } from '@/lib/utils';
import ProductCard from './ui/ProductCard';
import type { EventTicket } from '@/types/products';

export default async function Home() {
  const response = await fetch(`${baseUrl}/api/products`);

  if (!response.ok) {
    return <div>Error while trying to load the products.</div>;
  }

  const products: EventTicket[] = await response.json();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-7xl mx-auto px-4 pb-20 pt-16">
        <h1 className="text-4xl font-bold mb-8">Top Events in Amsterdam</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={`product-${product.productId}`} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}
