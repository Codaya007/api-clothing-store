import { Document } from 'mongoose';

export class Category extends Document {
  _id?: string;
  name: string;
  description?: string;
}
