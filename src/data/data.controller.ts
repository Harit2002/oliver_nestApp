import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DataService } from './data.service';

@Controller('caseStudy')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  create(@Body() createCaseStudy) {}

  @Get()
  findAll() {}

  @Get(':id')
  findOne(@Param('id') id: string) {}

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto) {}

  @Delete(':id')
  delete(@Param('id') id: string) {}
}
