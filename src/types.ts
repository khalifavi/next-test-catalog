type Image = {
  size: number;
  url: string;
};

type Images = {
  large: Image;
  medium: Image;
  small: Image;
};

type Variant = {
  label: string;
  values: string[];
};

type Product = {
  id: string;
  name: string;
  price: number;
  discountedPrice: number;
  images: Images[];
  variance: Variant[];
};

export type { Image, Images, Variant, Product };
