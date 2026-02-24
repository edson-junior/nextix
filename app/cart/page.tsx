export default function CartPage() {
  const cart = [];

  if (Boolean(!cart.length)) {
    return (
      <div className="min-h-screen flex flex-col">
        <main className="max-w-7xl mx-auto px-4 pb-20 pt-16">
          <h1 className="text-center text-4xl font-bold mb-8">Cart</h1>
          <p className="text-center text-sm/7 lg:text-base/7 mb-8">
            Your cart is empty
          </p>
        </main>
      </div>
    );
  }
}
