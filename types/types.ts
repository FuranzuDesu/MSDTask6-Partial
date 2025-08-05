// src/types/types.ts
export interface Post {
  id: number;
  title: string;
  description: string;
  images: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   // price: number;
//   // discountPercentage: number;
//   // rating: number;
//   // tags: Array<string>;
// }