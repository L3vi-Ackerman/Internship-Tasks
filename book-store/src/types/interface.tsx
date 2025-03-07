export interface BookInterface {
  title:string;
  author:AuthorInterface;
  publisher:PublisherInterface;
  category:CategoryInterface;
  publication_date:string;
  isbn:string;
  price:number;
  stock:number;
}


export interface AuthorInterface {
  name:string;
  bio:string;
  experience:number;
}

export interface PublisherInterface{
  name:string;
  address:string;
}

export interface CategoryInterface{
  name:string
}

export interface CustomerInterface {
  user:string;
  address:string;
  phone_number:string;
}

export interface OrderInterface{
  customer:CustomerInterface
  order_date:string;
  totaLprice:number;
  status:string;
  
}
export interface OrderItemInterface{
  order:OrderInterface
  book:string;
  quantity:number;
  price:number;
}
export interface ReviewInterface{
  customer:CustomerInterface;
  book:string;
  rating:number;
  review_text:string;
  created_at:string;
}
export interface InventoryLogInterface{
  book:BookInterface;
  change:number;
  timestamp:string;
}

export interface CartInterface{
  customer:CustomerInterface;
  book:BookInterface;
  quantity:number;
  added_on:string;
}
