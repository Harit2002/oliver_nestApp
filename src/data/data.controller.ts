import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { DataService } from './data.service';
import { CaseStudyDto } from 'src/dto/caseStudyDto';

@Controller('caseStudy')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Post()
  create(@Body() createCaseStudy : CaseStudyDto) {
    return this.dataService.create(createCaseStudy);
  }

  @Get()
  findAll() {
    return this.dataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCaseStudy : CaseStudyDto) {
    return this.update(id, updateCaseStudy);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.dataService.delete(id);
  }
}

//hostinger, digitalhoster