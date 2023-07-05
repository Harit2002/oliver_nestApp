import { IsNotEmpty, IsString, ValidateNested} from 'class-validator';
import { DataImageDto } from './dataImgDto';
import { HeadingDto } from './headingDto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';


export class CaseStudyDto {
  @ApiProperty()
  @Type(() => HeadingDto)
  @ValidateNested()
  @IsNotEmpty()
  readonly heading: HeadingDto;

  @ApiProperty()
  @Type(() => DataImageDto)
  @ValidateNested()
  readonly problem: DataImageDto;

  @ApiProperty()
  @IsString()
  readonly ourVisionData: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => DataImageDto)
  readonly features: DataImageDto;

  @ApiProperty()
  @ValidateNested()
  @Type(() => DataImageDto)
  readonly implementation: DataImageDto;

  @ApiProperty()
  @Type(() => DataImageDto)
  @ValidateNested()
  readonly exploration: DataImageDto;

  @ApiProperty()
  readonly researchData: string[];

  @ApiProperty()
  @IsString()
  readonly opportunity: string;

  @ApiProperty()
  @IsString()
  readonly result: string;

  @ApiProperty()
  @IsString()
  readonly summary: string;
}
