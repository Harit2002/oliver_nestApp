import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class HeadingDto {
  @ApiProperty()
  @IsNotEmpty()
  bannerImage: string[];

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  titile: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  subtitle: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  year: string;

  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  details: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  role?: string;

  @ApiProperty()
  @IsNotEmpty()
  team: string[];

  @ApiProperty()
  @IsNotEmpty()
  responsibility: string[];
}
