import * as dotenv from 'dotenv';
dotenv.config();

const { NODE_ENV } = process.env;

export const ENVIRONMENT = NODE_ENV;
