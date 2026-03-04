import { baseUrl } from '@/lib/utils';
import type { EventTicket } from '@/types/products';
import Link from 'next/link';
import { LuArrowLeft } from 'react-icons/lu';
import ProductDetails from '../ProductDetails';

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
        <ProductDetails {...product} />
      </main>
    </div>
  );
}
