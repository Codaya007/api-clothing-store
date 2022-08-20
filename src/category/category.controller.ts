import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './interfaces/Category';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories(
    @Query('skip') skip: number,
    @Query('limit') limit: number,
  ): Promise<{ totalCount: number; results: Category[] }> {
    let results = await this.categoryService.getCategories();
    const totalCount = results.length;

    if (skip || limit) {
      skip = skip ?? 0;
      limit = limit ? skip + limit : totalCount;
      results = results.slice(skip, limit);
    }

    return { totalCount, results };
  }

  @Get(':id')
  async getCategory(@Param('id') id: string): Promise<Category> {
    return await this.categoryService.getCategoryById(id);
  }

  @Post()
  async createCategory(@Body() category: CreateCategoryDto): Promise<Category> {
    return this.categoryService.createCategory(category);
  }
}
