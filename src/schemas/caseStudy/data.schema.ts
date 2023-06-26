import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class CaseStudyData {
  @Prop({ required: true })
  bannerImg: string[];

  @Prop({ required: true })
  heading: string;

  @Prop({ required: true })
  titile: string;

  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  info: string;

  @Prop({ required: true })
  ourVisionData: string;

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

export type CasesStudyDocument = CaseStudyData & Document;

export const DataSchema = SchemaFactory.createForClass(CaseStudyData);

/**
  
 * {
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
    result : string[],
    summary : string[],
}

*/
