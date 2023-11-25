import { Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateStoreDto {
  @IsNotEmpty()
  @IsUrl()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => String)
  category: string[];

  @IsOptional()
  @IsDateString()
  date: string = new Date(Date.now()).toISOString();
}
