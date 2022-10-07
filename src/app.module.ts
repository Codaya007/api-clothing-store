import { Module } from '@nestjs/common';
// Para conectarme a mongodb
import { MongooseModule } from '@nestjs/mongoose';

import { CategoryModule } from './category/category.module';
// Para poder usar variables de entorno
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    CategoryModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'), // Loaded from .ENV
      }),
    }),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
