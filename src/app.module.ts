import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './Infra/database.module';
import { ConfigModule } from '@nestjs/config';
import { DataModule } from './data/data.module';
import { CardDataModule } from './card-data/card-data.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot({isGlobal:true}), DataModule, CardDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
