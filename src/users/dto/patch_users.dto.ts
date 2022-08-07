import {
  IsString,
  IsNotEmpty,
  MaxLength,
  ValidateNested,
  IsOptional
} from 'class-validator';
import { Type } from 'class-transformer';
import { HealthInfoDTO } from './health_info.dto';

// Validation of user's data to be patched
export class PatchUsersDTO {
  @IsOptional()
  id?: string;

  @IsString()
  @MaxLength(64, { message: 'Name is too long (64 characters max)' })
  @IsOptional()
  name?: string;

  @IsOptional()
  email?: string;

  @IsOptional()
  password?: string;

  @IsOptional()
  type?: string;

  @IsNotEmpty()
  @ValidateNested()
  @IsOptional()
  @Type(() => HealthInfoDTO)
  health_info?: HealthInfoDTO;
}