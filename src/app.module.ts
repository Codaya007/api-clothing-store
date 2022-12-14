import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
// Para conectarme a mongodb
import { MongooseModule } from '@nestjs/mongoose';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
