import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DOCKER === 'true' ? 'db' : 'localhost',
      port: parseInt(process.env.POSTGRES_PORT || '5432', 10),
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'yourpassword',
      database: process.env.POSTGRES_DB || 'yourdb',
      entities: [User, Profile],
      synchronize: process.env.NODE_ENV === 'development',
    }),
    TypeOrmModule.forFeature([User, Profile]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
