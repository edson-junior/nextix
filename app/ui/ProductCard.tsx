import { LOCALE } from '@/lib/utils';
import type { EventTicket } from '@/types/products';
import Link from 'next/link';

function ProductCard({
  productId,
  image,
  name,
  date,
  location,
  price,
}: EventTicket) {
  const formatedDate = new Date(date);

  return (
    <div
      key={`product-${productId}`}
      className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all duration-300 hover:shadow-lg"
    >
      <Link href={`/products/${productId}`}>
        <div className="aspect-square overflow-hidden bg-neutral-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            {new Intl.DateTimeFormat(LOCALE, {
              dateStyle: 'short',
              timeStyle: 'short',
            }).format(formatedDate)}
          </div>
          <h3 className="font-semibold text-base leading-tight text-black line-clamp-2">
            {name}
          </h3>
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            {location}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold text-black">{price}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
