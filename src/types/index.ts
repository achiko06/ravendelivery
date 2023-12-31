export type UserType = {
  _id: string;
  email: string;
  image: string;
  isAdmin: boolean;
  name: string;
};

export type Asset = {
  _ref: string
};

export type GalleryItemType = {
  _key: string;
  _type: string;
  asset: Asset;
}

export type Gallery = {
  display: string;
  images: [
    GalleryItemType
  ];
  zoom: boolean
};

export type ImageType = {
  id?: string;
  asset: Asset
};

export type Product = {
  _id: string;
  name: string;
  slug: {current: string};
  image: ImageType
  mainPrice: number;
  tax: number;
  mainPriceTaxed: number;
  priceOptions?: { 
    title: string; 
    additionalPriceMainPrice: number;
    additionalPriceTax: number; 
    additionalPrice: number 
  }[];
  featured: boolean;
  details: string;
  gallery?: Gallery;
};

export type Products = Product[];

export type SliderContent = {
  _id: string;
  title: string;
  buttonTitle: string;
  image?: {asset: {_ref: string} }
};

export type SliderContents = SliderContent[];

export type Item = {
  _id: string;
  allergens: any;
  categories: any;
  details: string;
  featured?: boolean;
  image?: {asset: {_ref: string} };
  price: number[];
  menuPrice: number[];
  name: string;
  slug?: {current: string};
};

export type Items = Item[];

export type OfferType = {
  _id: string;
  title: string;
  description: string;
  image?: {asset: {_ref: string} };
  buttonTitle: string;
  endDate: string;
}

export type CartType = {
  products: CartItemType[];
  totalItems: number;
  totalPrice: number;
  tax: number;
  taxPrice: number;
  shippingPrice: number;
  itemsPrice: number;
};

export type CartItemType = {
  id?: string;
  uniqueId: string;
  title: string;
  img?: { src: string};
  subTotal: number; // (itemPrice + tax + additionalPrice) * quantity
  itemPrice: number; // mainPrice + additionalPriceMainPrice
  itemTax: number; // mainPriceTaxed + additionalPriceTax
  mainPriceTaxed: number; // itemPrice + tax + additionalPrice
  optionTitle?: string;
  quantity: number;
  slug?: string;
};

export type OrderItemType = {
  _key: string;
  _type: string;
  title: string;
  image: string;
  price: number;
  itemPrice: number; // mainPrice + additionalPriceMainPrice
  tax: number; // mainPriceTaxed + additionalPriceTax
  taxPrice: number; // itemPrice + tax + additionalPrice
  optionTitle: string;
  quantity: number;
};

export type OrderType = {
  _id: string;
  _createdAt: string;
  intent_id?: String;
  price: number;
  itemsPrice: number;
  tax: number;
  taxPrice: number;
  shippingPrice: number;
  paymentMethod: string;
  products: OrderItemType[];
  paymentStatus: string;
  status: string;
  orderedBy: UserType;
  deliveredAt: string;
  paidAt: string;
 // products: string[];
};

export type ActionTypes = {
  addToCart:(item:CartItemType)=> void;
  removeFromCart:(item:CartItemType)=> void;
  resetCart:()=>void;
}

export type Rating = {
  id: number,
  title: string,
  percentage: number
}

export type NavLink = {
  id: number,
  title: string,
  href: string
}

export type ChatMessageType = {
  id: string,
  text: string,
  name: string,
  timestamp: string,
  outbound: boolean
}