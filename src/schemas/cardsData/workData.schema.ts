import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { DATA_TYPE } from 'src/constants';

@Schema({
  timestamps: true,
  versionKey: false,
})
export class CardsData extends Document{
  @Prop({required:true})
  heading : string;

  @Prop({required:true})
  logo : string;

  @Prop()
  year ?: string;

  @Prop({required:true})
  subHeading : string;

  @Prop({required:true})
  info : string;

  @Prop({required:true})
  siteLink : string;

  @Prop({required:true})
  imageUrl : string;

  @Prop({type:String, enum:Object.keys(DATA_TYPE)})
  type : string;
}

export const CARDS_DATA_MODEL = CardsData.name;

export type CardsDataDocument = CardsData;

export const CardsDataSchema = SchemaFactory.createForClass(CardsData);

