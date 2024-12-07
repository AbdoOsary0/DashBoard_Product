import { TProductNames } from "../types";

export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  catagory?: {
    name: string;
    imageURL: string;
  };
}

export interface IFormInput {
  id: string;
  type: string;
  name: TProductNames;
  label: string;
}
export interface ICategory {
  id: string;
  name: string;
  imageURL: string
}