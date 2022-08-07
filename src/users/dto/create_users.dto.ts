import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  MaxLength,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import { HealthInfoDTO } from './health_info.dto';

// Validation used when creating a new user
export class CreateUsersDTO {
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
