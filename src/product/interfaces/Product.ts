import { Document } from 'mongoose';

export class Product extends Document {
  _id?: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  subcategory: string;
  category: string;
}
