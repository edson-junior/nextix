'use client';

import type { CartItem } from '@/types/products';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { LuChevronRight, LuTrash2 } from 'react-icons/lu';
import { updateCart } from './actions';

type Props = {
  cartData: CartItem[];
};

export default function Cart({ cartData }: Props) {
  const router = useRouter();
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  useEffect(() => {
    setCartProducts(cartData);
  }, []);

  const handleRemoveProduct = (productId: number) => {
    const updatedCart = cartProducts.filter(
      (product) => product.id !== productId,
    );
    setCartProducts(updatedCart);
  };

  const handleQuantityChange = async (
    productId: number,
    newQuantity: number,
  ) => {
    if (newQuantity < 1) return;

    const updatedCart = cartProducts.map((product) =>
      product.id === productId
        ? { ...product, quantity: newQuantity }
        : product,
    );
    setCartProducts(updatedCart);
    await updateCart(updatedCart);
  };

  const totalPrice = cartProducts.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0,
  );

  const quantityButtonClasses =
    'p-2 w-10 h-10 items-center font-semibold justify-center flex border border-gray-300 rounded hover:bg-gray-100';

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3xl grow">
          {cartProducts.map((product) => (
            <div
              key={product.id}
              data-test-id={`cart-product-${product.id}`}
              className="border border-gray-200 rounded-lg p-4 mb-4 flex items-center justify-between"
            >
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">
                  Price: {product.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-2 mb-2">
                  <label className="text-sm font-medium">Quantity:</label>
                  <button
                    onClick={async () =>
                      await handleQuantityChange(
                        product.id,
                        product.quantity - 1,
                      )
                    }
                    className={quantityButtonClasses}
                  >
                    −
                  </button>
                  <span
                    className={quantityButtonClasses}
                    data-test-id={`cart-product-quantity-${product.id}`}
                  >
                    {product.quantity}
                  </span>
                  <button
                    onClick={async () =>
                      await handleQuantityChange(
                        product.id,
                        product.quantity + 1,
                      )
                    }
                    className={quantityButtonClasses}
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleRemoveProduct(product.id)}
                data-test-id={`cart-product-remove-${product.id}`}
                className="flex items-center gap-2 cursor-pointer ml-4 p-2 bg-red-600 text-white rounded hover:bg-red-700"
                aria-label="remove product"
              >
                <LuTrash2 />
              </button>
            </div>
          ))}
        </div>

        <div className="md:w-96 grow">
          <div className="flex flex-col gap-4 border border-gray-200 p-4 rounded-lg">
            <h2 className="text-lg font-bold">Order Summary</h2>
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span data-test-id="cart-total">{totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={() => router.push('/checkout')}
              data-test-id="cart-checkout"
              className="flex gap-2 items-center justify-center w-full cursor-pointer bg-blue-600 text-white text-sm py-4 px-2 rounded-lg font-semibold hover:bg-blue-700"
            >
              Proceed to Checkout <LuChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
