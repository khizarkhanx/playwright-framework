import dotenv from 'dotenv';

dotenv.config({ path: '.env.automation' });

function getEnv(key: string): string {
    const value = process.env[key];

    if (!value) {
        throw new Error(`Environment variable ${key} is missing`);
    }

    return value;
}

export const env = {
    ui: {
        baseURL: getEnv("BASE_URL"),
        username: getEnv("TEST_USERNAME"),
        password: getEnv("TEST_PASSWORD"),
    },

    api: {
        baseURL: getEnv("API_BASE_URL"),
        username: getEnv("API_USERNAME"),
        password: getEnv("API_PASSWORD"),
        newuser: getEnv("API_NEW_USER"),
    }
};