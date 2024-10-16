import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppConfig, NodeEnv, entities } from './utils/types';

const createTypeOrmOptions = (configService: ConfigService): AppConfig => {
  const getConfigValue = <Type>(
    configService: ConfigService,
    key: string,
    defaultValue: Type,
  ): Type => configService.get<Type>(key, defaultValue);

  const isDocker =
    getConfigValue<string>(configService, 'DOCKER', 'false') === 'true';
  const host = isDocker ? 'db' : 'localhost';
  const DOCKER = isDocker;

  const NODE_ENV: NodeEnv = getConfigValue(
    configService,
    'NODE_ENV',
    'development',
  );
  const synchronize = NODE_ENV === 'development';

  const type = 'postgres';
  const port = getConfigValue(configService, 'POSTGRES_PORT', 5432);
  const username = getConfigValue(configService, 'POSTGRES_USER', 'postgres');
  const password = getConfigValue(
    configService,
    'POSTGRES_PASSWORD',
    'yourpassword',
  );
  const database = getConfigValue(configService, 'POSTGRES_DB', 'yourdb');

  const config: AppConfig = {
    type,
    host,
    port,
    username,
    password,
    database,
    entities,
    synchronize,
    DOCKER,
    NODE_ENV,
  };

  return config;
};

const typeOrmModuleOptions = (configService: ConfigService): AppConfig => {
  const config = createTypeOrmOptions(configService);

  console.log(config);
  return config;
};

export const typeOrmConfig = {
  imports: [ConfigModule],
  useFactory: typeOrmModuleOptions,
  inject: [ConfigService],
};
