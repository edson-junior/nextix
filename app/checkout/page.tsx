'use client';

import { useRouter } from 'next/navigation';
import { updateCart } from '../cart/actions';

export default function CheckoutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <main className="px-4 pb-20 pt-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
        <form
          className="max-w-4xl mx-auto"
          action={async () => {
            await updateCart([]);
            router.push('/checkout/confirmation');
          }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">First Name</label>
            <input
              type="text"
              name="firstName"
              data-test-id="checkout-first-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              data-test-id="checkout-last-name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Doe"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              data-test-id="checkout-email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="john.doe@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              data-test-id="checkout-address"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123 Main St"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">City</label>
            <input
              type="text"
              name="city"
              data-test-id="checkout-city"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="New York"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              data-test-id="checkout-postal-code"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="10001"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Country</label>
            <input
              type="text"
              name="country"
              data-test-id="checkout-country"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="United States"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Credit Card
            </label>
            <input
              type="text"
              name="creditCard"
              data-test-id="checkout-credit-card"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Expiration Date
            </label>
            <input
              type="text"
              name="expirationDate"
              data-test-id="checkout-expiration-date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YY (e.g. 08/26)"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Security Code
            </label>
            <input
              type="text"
              name="securityCode"
              data-test-id="checkout-security-code"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123"
              required
            />
          </div>

          <button
            type="submit"
            data-test-id="checkout-confirm-order"
            className="w-full bg-blue-600 text-white py-2 rounded-md cursor-pointer font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Confirm Order
          </button>
        </form>
      </main>
    </div>
  );
}
