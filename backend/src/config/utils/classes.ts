import { IsString, IsNumber, IsIn, Min, Max } from 'class-validator';

export class EnvironmentVariables {
  @IsString()
  @IsIn(['true', 'false'])
  DOCKER: string = 'false';

  @IsNumber()
  @Min(1)
  @Max(65535)
  POSTGRES_PORT: number = 5432;

  @IsString()
  POSTGRES_USER: string = 'postgres';

  @IsString()
  POSTGRES_PASSWORD: string = 'yourpassword';

  @IsString()
  POSTGRES_DB: string = 'yourdb';

  @IsString()
  @IsIn(['development', 'production', 'test'])
  NODE_ENV: string = 'development';

  [key: string]: any;
}
