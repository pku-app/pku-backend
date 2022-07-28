import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsDate,
  MinLength,
  MaxLength,
  ValidateNested,
  IsNumber
} from 'class-validator';
import { Type } from 'class-transformer';

export class HealthInfoDTO {
  @Type(() => Date)
  @IsDate()
  birthdate: Date;

  @Type(() => Number)
  @IsNumber()
  height: number;

  @Type(() => Number)
  @IsNumber()
  weight: number;

  @Type(() => Date)
  @IsDate()
  last_updated: Date;
}

export class UsersDTO {
  @IsString()
  @MaxLength(64, { message: 'Name is too long (64 characters max)' })
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8, { message: 'Password is too short (8 characters min)' })
  @MaxLength(128, { message: 'Password is too long (128 characters max)' })
  password: string;

  // TODO: we can use @Contains('example') decorator to check if the defined types are valid
  @IsString()
  type: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => HealthInfoDTO)
  health_info: HealthInfoDTO;
}
