import { validateSync } from 'class-validator';
import { EnvironmentVariables } from './classes';

export function validateConfig(config: Record<string, unknown>) {
  const validatedConfig = new EnvironmentVariables();
  Object.assign(validatedConfig, config);

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: true,
  });

  if (errors.length > 0) {
    console.warn('Environment validation warnings:', errors);
  }

  return validatedConfig;
}
