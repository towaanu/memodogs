declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_MEMODOGS_API_URL: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

export {}
