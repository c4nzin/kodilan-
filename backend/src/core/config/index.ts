import { makeValidators, Static } from 'nestjs-envalid';
import { port, str } from 'envalid';

const config = {
  PORT: port({ default: 3000 }),
  GLOBAL_PREFIX: str({ default: 'api' }),
  DB_URI: str(),
  NODE_ENV: str({
    choices: ['development', 'production', 'test', 'staging'],
  }),
  FRONTEND_URL_DEV: str(),
  FRONTEND_URL_PROD: str(),
};

export const envalidValidator = makeValidators(config);
export type Config = Static<typeof envalidValidator>;
export const ENV = 'EnvalidModuleEnv';
