import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Profile } from 'src/entities/profile.entity';
import { User } from 'src/entities/user.entity';

export type Entities = (typeof User | typeof Profile)[];

export type NodeEnv = 'development' | 'production' | 'test';

export type AppConfig = TypeOrmModuleOptions & {
  DOCKER: boolean;
  NODE_ENV: NodeEnv;
};

export const entities: Entities = [User, Profile];

export interface EnvironmentVariables {
  DOCKER: 'true' | 'false';
  POSTGRES_PORT: number;
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
  NODE_ENV: NodeEnv;
}

export const defaultEnvironmentVariables: EnvironmentVariables = {
  DOCKER: 'false',
  POSTGRES_PORT: 5432,
  POSTGRES_USER: 'postgres',
  POSTGRES_PASSWORD: 'yourpassword',
  POSTGRES_DB: 'yourdb',
  NODE_ENV: 'development',
};

// For later use
// type AsyncAppConfig = TypeOrmModuleAsyncOptions & {
//   DOCKER: boolean;
//   NODE_ENV: 'development' | 'production' | 'test';
// };
