import CheckoutForm from './CheckoutForm';
import { baseUrl } from '@/lib/utils';

export const metadata = {
  title: 'Checkout',
  description:
    'Complete your order by providing your shipping and payment information.',
  alternates: {
    canonical: `${baseUrl}/checkout`,
  },
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <main className="px-4 pb-20 pt-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
        <p className="text-sm text-center mb-8">
          Complete your order by providing your shipping and payment
          information.
        </p>
        <CheckoutForm />
      </main>
    </div>
  );
}
