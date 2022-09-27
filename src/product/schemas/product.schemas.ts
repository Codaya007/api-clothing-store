import { Schema, Types } from 'mongoose';

export const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 2000,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  sold: {
    type: Number,
    default: 0,
  },
  onSale: {
    type: Boolean,
    default: true,
  },
  subcategory: {
    type: String,
    required: true,
  }, //HAY QUE CAMBIAR ESTOS TIPOS DE DATOS, PUSE STRING SOLO PARA PRUEBAS
  category: {
    type: String,
    ref: 'Category',
    required: true,
  },
});
