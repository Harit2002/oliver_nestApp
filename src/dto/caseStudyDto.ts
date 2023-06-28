import { IsString } from 'class-validator';
import { DataImageDto } from './dataImgDto';
import { HeadingDto } from './headingDto';
import { ApiProperty } from '@nestjs/swagger';

export class CaseStudyDto {
  @ApiProperty()
  readonly heading: HeadingDto;

  @ApiProperty()
  readonly problem: DataImageDto;

  @IsString()
  @ApiProperty()
  @IsString()
  readonly ourVisionData: string;

  @ApiProperty()
  readonly features: DataImageDto;

  @ApiProperty()
  readonly implementation: DataImageDto;

  @ApiProperty()
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
