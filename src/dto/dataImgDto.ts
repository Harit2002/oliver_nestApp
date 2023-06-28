import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DataImageDto {
  @IsString()
  @ApiProperty()
  readonly detail: string;

  @ApiProperty()
  readonly image: string[];
}
