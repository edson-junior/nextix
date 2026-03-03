export type EventTicket = {
  id?: string;
  productId?: number;
  image: string;
  name: string;
  date: string;
  location: string;
  price: number;
  description: string;
};

export type CartItem = {
  id: number;
  image?: string;
  name: string;
  price: number;
  quantity: number;
};
