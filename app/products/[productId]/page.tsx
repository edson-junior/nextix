import { baseUrl } from '@/lib/utils';
import type { EventTicket } from '@/types/products';
import Link from 'next/link';
import { LuArrowLeft } from 'react-icons/lu';
import ProductDetails from '../ProductDetails';
import { cookies } from 'next/headers';
import type { Metadata } from 'next';

type ProductPageProps = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productId } = await params;
  const response = await fetch(`${baseUrl}/api/products/${productId}`);

  if (!response.ok) {
    return {
      title: 'Product Not Found',
      alternates: {
        canonical: `${baseUrl}/products/${productId}`,
      },
    };
  }

  const product: EventTicket = await response.json();

  return {
    title: product.name,
    description: `Checkout this awesome event - ${product.name}`,
    alternates: {
      canonical: `${baseUrl}/products/${productId}`,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const response = await fetch(`${baseUrl}/api/products/${productId}`);

  if (!response.ok) {
    return <p>Error while trying to load the product.</p>;
  }

  const product: EventTicket = await response.json();

  const cartCookie = await cookies();
  const cartData = cartCookie.get('cart')?.value;

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
        <ProductDetails
          {...product}
          cartData={cartData ? JSON.parse(cartData) : []}
        />
      </main>
    </div>
  );
}
