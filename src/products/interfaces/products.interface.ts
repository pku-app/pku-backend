import { Document } from 'mongoose';

export interface Products extends Document {
    readonly idKey: string;
    readonly name: string;
    readonly brand: string;
    readonly fenilalanina: number;
}
