import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ProductsDTO } from './dto/products.dto';
import { Products } from './interfaces/products.interface';

@Injectable()
export class ProductsService {
    constructor(
        @InjectModel('Products') private productsModel: Model<Products>
    ) {}

    /**
     * Creates new product with given user data.
     * @param productsDTO - validated product's data
     * @returns - product's object in case it's created successfully.
    */
    async register(productsDTO: ProductsDTO): Promise<Products> {
        const { idKey, name, brand, fenilalanina } = productsDTO; // extracts product's data to be saved

        const product = new this.productsModel({ "idKey": idKey, "name": name, "brand": brand, "fenilalanina": fenilalanina });

        try {
            await product.save(); // saves product to database

            return product;
        } catch (error) {
            if(error.code === 11000){ // duplicate key error
                throw new ConflictException('Product already exists');
            }
            throw error;
        }
    }

    /**
     * Extracts product's data from MongoDB Document
     * @param product - product's object
     * @returns relevant product's data.
    */
    async extractAllProductData(){
        var product = await this.productsModel.find().exec();
        return product;
    }
}
