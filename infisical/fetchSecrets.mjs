import { authenticate } from './authenticate.js';
import axios from 'axios';
import fs from 'fs';
import dotenv from 'dotenv';

async function fetchSecrets() {
  const accessToken = await authenticate();
  const workspaceId = '14c62b95-8d22-4a16-a22b-49bf2f66efc9';
  const environment = 'dev';

  const response = await axios.get('https://app.infisical.com/api/v3/secrets/raw', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      workspaceId,
      environment,
    },
  });

  const secrets = response.data.secrets;
  const existingEnv = dotenv.parse(fs.readFileSync('.env', 'utf-8'));
  
  secrets.forEach(secret => {
    existingEnv[secret.secretKey] = secret.secretValue;
  });

  const updatedEnv = Object.keys(existingEnv)
    .map(key => `${key}=${existingEnv[key]}`)
    .join('\n');
  
  fs.writeFileSync('.env', updatedEnv);
  console.log('.env file successfully updated with secrets and existing values preserved');
}

(async () => {
  await fetchSecrets();
  dotenv.config();
})();
