import { Module } from '@nestjs/common';
import { appConfig } from './config/app.config';

@Module(appConfig)
export class AppModule {}
