import { Type } from "class-transformer";
import { IsDate, IsNumber } from "class-validator";

// Validation of user's health info
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
