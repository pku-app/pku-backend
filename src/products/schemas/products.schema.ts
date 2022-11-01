import * as mongoose from 'mongoose';

/**
 * Schema of product's data to be saved in database
 * @example { 'idKey': 'Rúculaxx', 'name': 'Rúcula', 'brand': 'xx', 'fenilalanina': '97' }
 */
export const ProductsSchema = new mongoose.Schema({
    idKey: {
        type: String,
        unique: true,
    },
    name: String,
    brand: String,
    fenilalanina: Number
});
