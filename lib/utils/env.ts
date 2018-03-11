const NODE_ENV_DEVELOPMENT = 'development';

export const isDev = () => process.env.NODE_ENV === NODE_ENV_DEVELOPMENT;
