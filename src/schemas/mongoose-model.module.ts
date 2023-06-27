import { Global, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CASE_STUDY_MODEL, DataSchema } from "./caseStudy";


const MODELS = [
    {name : CASE_STUDY_MODEL, schema : DataSchema}
]

@Global()
@Module({
    imports:[MongooseModule.forFeature(MODELS)],
    exports:[MongooseModule]
})
export class MongooseModelModule {}