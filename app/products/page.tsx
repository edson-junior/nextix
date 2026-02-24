import { products } from '@/lib/mockedProducts';
import ProductCard from '../ui/ProductCard';

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-7xl mx-auto px-4 pb-20 pt-16">
        <h1 className="text-4xl font-bold mb-8">All events in your city!</h1>
        <p className="max-w-4xl text-sm/7 lg:text-base/7 mb-8">
          The most awesome events in Amsterdam and beyond that will inspire you!
          Find guides on where to eat and drink, seasonal events, things to do
          in the city, and travel ideas. Read our insider tips, curated
          recommendations, and fresh takes on everyday experiences!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={`product-${product.id}`} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}
