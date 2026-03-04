'use client';

import {
  LuCalendar,
  LuMapPin,
  LuMinus,
  LuPlus,
  LuShoppingBag,
} from 'react-icons/lu';
import { updateCart } from '@/app/cart/actions';
import type { EventTicket } from '@/types/products';
import { LOCALE } from '@/lib/utils';
import { useState } from 'react';

export function ProductDetails({
  productId,
  image,
  name,
  date,
  location,
  price,
  description,
}: EventTicket) {
  const formattedDate = new Date(date);

  const [quantity, setQuantity] = useState(1);

  function handleIncrement() {
    setQuantity((prev) => prev + 1);
  }

  function handleDecrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="aspect-square overflow-hidden rounded-lg bg-neutral-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          data-test-id="product-image"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-4xl font-bold text-black mb-4">{name}</h1>
          <div className="flex items-center gap-2 text-neutral-600 mb-2">
            <LuCalendar stroke="blue" />{' '}
            {new Intl.DateTimeFormat(LOCALE, {
              dateStyle: 'full',
              timeStyle: 'short',
            }).format(formattedDate)}
          </div>
          <div className="flex items-center text-neutral-600 gap-2">
            <LuMapPin stroke="red" /> {location}
          </div>
        </div>
        <div className="border-t border-neutral-200 pt-6">
          <p
            className="text-3xl font-bold text-black"
            data-test-id="product-price"
          >
            {price}
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-2">
          <button
            onClick={handleDecrement}
            className="w-10 h-10 p-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 disabled:bg-neutral-100 transition-colors"
            aria-label="decrease quantity"
            disabled={quantity === 1}
          >
            <LuMinus size={20} />
          </button>
          <input
            pattern="[0-9]*(.[0-9]+)?"
            aria-label="Quantity"
            id="quantity"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
            autoComplete="off"
            autoCorrect="off"
            className="w-10 h-10 p-2 border border-neutral-300 rounded-lg text-center font-semibold focus:outline-none focus:ring-2 focus:ring-zinc-900"
            data-test-id="product-quantity"
          />
          <button
            onClick={handleIncrement}
            className="w-10 h-10 p-2 border border-neutral-300 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="increase quantity"
          >
            <LuPlus size={20} />
          </button>
        </div>
        <div className="border-t border-neutral-200 pt-6">
          <h2 className="text-lg font-semibold text-black mb-3">
            About this event
          </h2>
          <div
            className="text-neutral-700 leading-relaxed prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>

        <button
          className="flex gap-2 items-center justify-center bg-zinc-900 text-white px-8 py-3 cursor-pointer rounded-md font-semibold hover:bg-zinc-800 transition-colors"
          onClick={async () => {
            await updateCart([
              {
                id: 1,
                name: 'Wireless Headphones',
                price: 79.99,
                quantity: 1,
              },
              {
                id: 2,
                name: 'USB-C Cable',
                price: 12.99,
                quantity: 2,
              },
              {
                id: 3,
                name: 'Phone Case',
                price: 24.99,
                quantity: 1,
              },
              {
                id: 4,
                name: 'Screen Protector',
                price: 9.99,
                quantity: 3,
              },
              {
                id: 5,
                name: 'Portable Charger',
                price: 49.99,
                quantity: 1,
              },
            ]);
          }}
        >
          <LuShoppingBag size={18} /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
