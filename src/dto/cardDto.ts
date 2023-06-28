import { IsEnum, IsString } from 'class-validator';
import { DATA_TYPE } from 'src/constants';
import { ApiProperty } from '@nestjs/swagger';

export class CardDto {
  @IsString()
  @ApiProperty()
  readonly heading: string;

  @IsString()
  @ApiProperty()
  readonly subHeading: string;

  @IsString()
   @ApiProperty()
  readonly info: string;

  @IsString()
   @ApiProperty()
  readonly year: string;

  @IsString()
   @ApiProperty()
  readonly logo : string;

  @IsString()
   @ApiProperty()
  readonly siteLink: string;

  @IsString()
   @ApiProperty()
  readonly image: string;

  @IsEnum(DATA_TYPE)
   @ApiProperty()
  type: DATA_TYPE;
}

/*   "heading" : "This is sample heading",
    "logo" : "url",
    "year" : "2022",
    "subHeading" : "This is subHeading",
    "info" : "Some sample info",
    "siteLink" : "link",
    "imag */
