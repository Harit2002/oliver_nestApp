import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class CaseStudyData extends Document{
  @Prop({ required: true, type: Object })
  heading: Heading;

  @Prop({ required: true, type: Object })
  problem: DataImg;

  @Prop({ required: true })
  ourVisionData: string;

  @Prop({ required: true, type: Object })
  features: DataImgHeading;

  @Prop({ required: true, type: Object })
  implementation: DataImg;

  @Prop({ required: true, type: Object })
  exploration: DataImg;

  @Prop({ required: true })
  researchData: string[];

  @Prop({ required: true })
  opportunity: string;

  @Prop({ required: true })
  result: string;

  @Prop({ required: true })
  summary: string;
}

interface DataImg {
  detail: string;
  image: string[];
}

interface DataImgHeading {
  detail: string;
  image: string[];
}

interface Heading {
  heading: { string: string[] };
  titile: string;
  subtitle: string;
  year: string;
  details: string;
  role: string;
  team: string[];
  responsibility: string[];
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
