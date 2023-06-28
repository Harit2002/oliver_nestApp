import { Injectable, BadRequestException, NotFoundException} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CaseStudyDto } from 'src/dto/caseStudyDto';
import { CASE_STUDY_MODEL, CasesStudyDocument } from 'src/schemas/caseStudy';
@Injectable()
export class DataService {
  constructor(
    @InjectModel(CASE_STUDY_MODEL) private dataModel: Model<CasesStudyDocument>,
  ) {}

  async create(createCaseStudyDto : CaseStudyDto) {
    try {
      const data = await this.dataModel.create(createCaseStudyDto);
      return data;
    } catch (err) {
      if ((err.name = 'Validation Error')) {
        throw new BadRequestException(err.errors);
      }
    }
  }

  async findAll() {
    const data = await this.dataModel.find();
    return data;
  }

  async findAllHeading() {
    const data = await this.dataModel.find();
    // const res = data.map(el => {
    //   this.data
    // })
  }

  async findOne(id: string) {
    const data = await this.dataModel.findById(id);
    return data;
  }

  update(id: string, updateUserDto) {}

  async delete(id: string) {
    const deletedData = await this.dataModel.findByIdAndDelete(id);
    if (!deletedData) throw new NotFoundException('Data not found');
    return deletedData;
  }
}
