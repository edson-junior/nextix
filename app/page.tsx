import { products } from '@/lib/mockedProducts';
import ProductCard from './ui/ProductCard';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-7xl mx-auto px-4 pb-20 pt-16">
        <h1 className="text-4xl font-bold mb-8">Top Events in Amsterdam</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={`product-${product.id}`} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}
