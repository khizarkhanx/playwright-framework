import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

const envPaths = [
    path.resolve(process.cwd(), '.env.automation'),
    path.resolve(process.cwd(), '.env'),
];
const envFile = envPaths.find((file) => fs.existsSync(file));
if (envFile) {
    dotenv.config({ path: envFile, override: true });
} else {
    dotenv.config({ override: true });
}

export const userName = process.env.TEST_USERNAME || '';
export const password = process.env.TEST_PASSWORD || '';