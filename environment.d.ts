declare global {
    namespace NodeJS {
      interface ProcessEnv {
        GOOGLE_CLIENT_ID: string
        GOOGLE_CLIENT_SECRET: string
        NEXT_PUBLIC_DATABASE_URL: string
        JWT_SECRET: string
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }

export {}