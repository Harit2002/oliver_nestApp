import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions } from "@nestjs/mongoose";


@Injectable()
export class MongooseConfigService implements MongooseConfigService {
    constructor(private configService : ConfigService){}
    createMongooseOptions() : MongooseModuleOptions | Promise<MongooseModuleOptions> {
        const userName = this.configService.get("DATABASE_USER");
        const password = this.configService.get("DATABASE_PASSWORD");
        const host = this.configService.get("DATABASE_HOST");
        const db = this.configService.get("DATABASE_NAME");

        const uri = `mongodb+srv://${userName}:${password}@${host}/${db}?retryWrites=true&w=majority`;
        return {uri};
        
    }
}