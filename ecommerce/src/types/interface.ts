export interface ProductInterface {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  returnPolicy: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewInterface[];
  images: string[];
  thumbnail: string;
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}
interface ReviewInterface {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface CategoryInterface {
  slug: string;
  name: string;
  url: string;
}

export interface fetchPropsInterface {
  id?: number | null;
  categoryName?: string | null;
}
