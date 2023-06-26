import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CASE_STUDY_MODEL, CasesStudyDocument } from 'src/schemas/caseStudy';
@Injectable()
export class DataService {
  constructor(
    @InjectModel(CASE_STUDY_MODEL) private dataModel: Model<CasesStudyDocument>,
  ) {}
}
