import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { HeadingDto } from 'src/dto/headingDto';
import { DataImageDto } from 'src/dto/dataImgDto';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class CaseStudyData extends Document {
  @Prop({ required: true, type: HeadingDto })
  heading: HeadingDto;

  @Prop({ required: true, type: DataImageDto })
  problem: DataImageDto;

  @Prop({ required: true })
  ourVisionData: string;

  @Prop({ required: true, type: DataImageDto })
  features: DataImageDto;

  @Prop({ required: true, type: DataImageDto })
  implementation: DataImageDto;

  @Prop({ required: true, type: DataImageDto })
  exploration: DataImageDto;

  @Prop({ required: true })
  researchData: string[];

  @Prop({ required: true })
  opportunity: string;

  @Prop({ required: true })
  result: string;

  @Prop({ required: true })
  summary: string;
}

export const CASE_STUDY_MODEL = CaseStudyData.name;

export type CasesStudyDocument = CaseStudyData;

export const DataSchema = SchemaFactory.createForClass(CaseStudyData);

/**
  
{
    heading : { bannerImage:[url, url],
    subtitle: string,
    year : string,
    detail: string,
    role : string,
    team : string[],
    responsibility : string[]
    },
    problem : {detail: string, images : [url, url]},
    researchData : string[],
    ourVisionData : string[],
    features: [{heading:string, detail, images:string[url, url]}]
    implementation:{data:string, image:string[]}
    exploration:{data:string, image:string[url, url]}
    opportunity : string[],
    result : string,
    summary : strin,
}
*/
