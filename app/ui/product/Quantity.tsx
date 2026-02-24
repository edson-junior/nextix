'use client';

import { useState } from 'react';
import { LuPlus, LuMinus } from 'react-icons/lu';

function Quantity() {
  const [quantity, setQuantity] = useState(1);

  function handleIncrement() {
    setQuantity((prev) => prev + 1);
  }

  function handleDecrement() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  }

  return (
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
  );
}

export default Quantity;
