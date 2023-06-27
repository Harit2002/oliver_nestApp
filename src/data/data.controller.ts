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
  create(@Body() createCaseStudy) {
    return this.dataService.create(createCaseStudy);
  }

  @Get()
  findAll() {
    this.dataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    this.dataService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto) {}

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.dataService.delete(id);
  }
}
