import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from '../app.controller';
import { AppService } from '../app.service';
import { typeOrmConfig } from './typeorm.config';
import { entities } from './utils/types';
import { validateConfig as validate } from './utils/helpers';

const rootValidateOptions = { validate };

export const appConfig = {
  imports: [
    ConfigModule.forRoot(rootValidateOptions),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    TypeOrmModule.forFeature(entities),
  ],
  controllers: [AppController],
  providers: [AppService],
};
