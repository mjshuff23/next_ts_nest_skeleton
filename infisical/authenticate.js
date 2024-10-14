import axios from 'axios';

export async function authenticate() {
  try {
    const token = process.env.INFISICAL_API_KEY;

    if (!token) {
      throw new Error('Infisical API key not found in environment variables');
    }

    const identityId = '0c16e830-d6d8-4f79-9b9f-7e6db405f42d';

    const response = await axios.get(`https://app.infisical.com/api/v1/auth/token-auth/identities/${identityId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { identityTokenAuth } = response.data;

    const { id, accessTokenTTL, accessTokenMaxTTL } = identityTokenAuth;
    console.log(`Access Token TTL: ${accessTokenTTL}, Max TTL: ${accessTokenMaxTTL}`);

    const accessToken = token;

    return accessToken;
  } catch (error) {
    console.error('Error authenticating with Infisical:', error.message);
    throw error;
  }
}
