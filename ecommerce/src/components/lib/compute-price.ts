export const discountPrice = (price: number, discountPercentage: number) =>
  parseFloat((price * (1 - discountPercentage / 100)).toFixed(2));
