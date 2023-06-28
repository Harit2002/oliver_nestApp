import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class HeadingDto {
    @ApiProperty()
  readonly bannerImage: string[];

  @IsString()
  @ApiProperty()
  readonly titile: string;

  @IsString()
  @ApiProperty()
  readonly subtitle: string;

  @IsString()
  @ApiProperty()
  readonly year: string;

  @IsString()
  @ApiProperty()
  readonly details: string;

  @IsString()
  @ApiProperty()
  readonly role: string;

  @ApiProperty()
  readonly team: string[];

  @ApiProperty()
  readonly responsibility: string[];
}
