import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const type = 'postgres';
const host = process.env.DOCKER === 'true' ? 'db' : 'localhost';
const port = parseInt(process.env.POSTGRES_PORT || '5432', 10);
const username = process.env.POSTGRES_USER || 'postgres';
const password = process.env.POSTGRES_PASSWORD || 'yourpassword';
const database = process.env.POSTGRES_DB || 'yourdb';
const entities = [User, Profile];
const synchronize = process.env.NODE_ENV === 'development';
const options: TypeOrmModuleOptions = {
  type,
  host,
  port,
  username,
  password,
  database,
  entities,
  synchronize,
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(options),
    TypeOrmModule.forFeature([User, Profile]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
