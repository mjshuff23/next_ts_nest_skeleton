import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'yourpassword',
      database: 'yourdb',
      entities: [User, Profile],
      synchronize: true, // Automatically synchronize the database schema (turn off in production!)
    }),
    TypeOrmModule.forFeature([User, Profile]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
