import { Document } from "mongoose";
export interface ICar extends Document {
  name: string;
  brand: string;
  category: string;
  description: string;
  fuelType: "Gasoline" | "Electric";
  fuelCapacity: number;
  price: number;
  discount: number;
  capacity: number;
  transmission: string;
  gallery: string[];
  thumbnail: string;
  slug: string;
  createdAt?: Date;
  available?: boolean;
  likes?: number;
  ratingsAverage?: number;
  ratingsQuantity?: number;
}
