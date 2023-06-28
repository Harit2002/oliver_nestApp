import { Global, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CASE_STUDY_MODEL, DataSchema } from "./caseStudy";
import { CARDS_DATA_MODEL, CardsDataSchema } from "./cardsData";


const MODELS = [
    {name : CASE_STUDY_MODEL, schema : DataSchema},
    {name : CARDS_DATA_MODEL, schema : CardsDataSchema}
]

@Global()
@Module({
    imports:[MongooseModule.forFeature(MODELS)],
    exports:[MongooseModule]
})
export class MongooseModelModule {}