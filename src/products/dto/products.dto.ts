import {
    IsString,
    IsNotEmpty,
    IsNumberString
} from 'class-validator';
  
export class ProductsDTO{
    @IsNotEmpty()
    @IsString()
    idKey: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    brand: string;

    @IsNotEmpty()
    @IsNumberString()
    fenilalanina: number;
}
