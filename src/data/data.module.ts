import { Module } from '@nestjs/common';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { MongooseModelModule } from 'src/schemas/mongoose-model.module';

@Module({
  imports: [MongooseModelModule],
  providers: [DataService],
  controllers: [DataController],
})
export class DataModule {}
