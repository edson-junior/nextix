import Quantity from '@/app/ui/product/Quantity';
import { baseUrl, LOCALE } from '@/lib/utils';
import type { EventTicket } from '@/types/products';
import Link from 'next/link';
import {
  LuArrowLeft,
  LuCalendar,
  LuMapPin,
  LuShoppingBag,
} from 'react-icons/lu';

type ProductPageProps = {
  params: Promise<{ productId: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const response = await fetch(`${baseUrl}/api/products/${productId}`);

  if (!response.ok) {
    return <p>Error while trying to load the product.</p>;
  }

  const product: EventTicket = await response.json();
  const formattedDate = new Date(product.date);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-7xl mx-auto px-4 py-16 flex-1 w-full">
        <Link
          href="/"
          className="text-blue-600 hover:underline inline-flex items-center gap-2 mb-8"
        >
          <LuArrowLeft size={16} />
          Back to events
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square overflow-hidden rounded-lg bg-neutral-100">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
              data-test-id="product-image"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-4xl font-bold text-black mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 text-neutral-600 mb-2">
                <LuCalendar stroke="blue" />{' '}
                {new Intl.DateTimeFormat(LOCALE, {
                  dateStyle: 'full',
                  timeStyle: 'short',
                }).format(formattedDate)}
              </div>
              <div className="flex items-center text-neutral-600 gap-2">
                <LuMapPin stroke="red" /> {product.location}
              </div>
            </div>
            <div className="border-t border-neutral-200 pt-6">
              <p
                className="text-3xl font-bold text-black"
                data-test-id="product-price"
              >
                {product.price}
              </p>
            </div>
            <Quantity />
            <div className="border-t border-neutral-200 pt-6">
              <h2 className="text-lg font-semibold text-black mb-3">
                About this event
              </h2>
              <div
                className="text-neutral-700 leading-relaxed prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <button className="flex gap-2 items-center justify-center bg-zinc-900 text-white px-8 py-3 cursor-pointer rounded-md font-semibold hover:bg-zinc-800 transition-colors">
              <LuShoppingBag size={18} /> Add to Cart
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
