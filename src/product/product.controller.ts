import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(@Res() res) {
    const product = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json(product);
  }

  @Get(':id')
  async getProduct(@Res() res, @Param('id') id: string) {
    const product = await this.productService.getProduct(id);
    return res.status(HttpStatus.OK).json(product);
  }

  @Post()
  async createProduct(@Res() res, @Body() product: CreateProductDto) {
    const newProduct = await this.productService.createProduct(product);
    return res.status(HttpStatus.OK).json(newProduct);
  }
  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() product: CreateProductDto) {
    return await this.productService.updateProduct(id, product);
  }

  @Delete('/delete')
  async deleteteProduct(@Res() res, @Query('id') id: string) {
    console.log(id);
    const deletedProduct = await this.productService.deleteProduct(id);
    if (!deletedProduct) throw new Error('This product dont exist');
    return res.status(HttpStatus.OK).json(deletedProduct);
  }
}
