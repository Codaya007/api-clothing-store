import { Schema } from 'mongoose';

export const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 200,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000,
  },
});
