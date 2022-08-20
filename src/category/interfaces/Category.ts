import { Document } from 'mongoose';

export class Category extends Document {
  id?: number;
  name: string;
  description?: string;
}
