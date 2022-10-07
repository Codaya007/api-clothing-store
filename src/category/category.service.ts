import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './interfaces/Category';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('category') private categoryModel: Model<Category>,
  ) {}

  async getCategories() {
    return await this.categoryModel.find({});
  }

  async getCategoryById(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id);

    if (!category) throw new NotFoundException('Categoría no encontrada');

    return category;
  }

  async createCategory(category: CreateCategoryDto) {
    const newCategory = new this.categoryModel(category);

    return await newCategory.save();
  }

  async updateCategory(_id: string, category: UpdateCategoryDto) {
    const updatedCategory = await this.categoryModel.updateOne(
      { _id },
      category,
    );

    if (!updatedCategory)
      throw new NotFoundException('Categoría no encontrada');

    return updatedCategory;
  }

  async deleteCategory(_id: string) {
    return await this.categoryModel.deleteOne({ _id });
  }
}
