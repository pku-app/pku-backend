import { Controller, Get, Post, Request, ValidationPipe, Body } from "@nestjs/common";

import { ProductsService } from "../products.service";
import { ProductsDTO } from "../dto/products.dto";

@Controller('products')
export class ProductsController {
    constructor(
        private productsService: ProductsService
    ) {}

    @Get('all')
    getUser(@Request() req){
        return this.productsService.extractAllProductData();
    }

    @Post('register')
    async register(
        @Body(ValidationPipe) productsDTO: ProductsDTO
    ): Promise<any> {
        const message = await this.productsService.register(productsDTO);

        return { message };
    }
}
