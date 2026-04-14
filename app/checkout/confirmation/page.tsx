import { baseUrl } from '@/lib/utils';

export const metadata = {
  title: 'Order Confirmed',
  description: 'Yay! Your order has been confirmed!',
  alternates: {
    canonical: `${baseUrl}/checkout/confirmation`,
  },
};

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <main className="px-4 pb-20 pt-16">
        <h1 className="text-3xl font-bold mb-6">Order Confirmed</h1>
        <p>Thank you for your order!</p>
      </main>
    </div>
  );
}
