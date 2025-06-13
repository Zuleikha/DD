// src/env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
        readonly REACT_APP_FIREBASE_API_KEY: string;
        readonly REACT_APP_FIREBASE_AUTH_DOMAIN: string;
        readonly REACT_APP_FIREBASE_PROJECT_ID: string;
        readonly REACT_APP_FIREBASE_STORAGE_BUCKET: string;
        readonly REACT_APP_FIREBASE_MESSAGING_SENDER_ID: string;
        readonly REACT_APP_FIREBASE_APP_ID: string;
        readonly REACT_APP_FIREBASE_MEASUREMENT_ID: string;
        readonly REACT_APP_FIREBASE_DATABASE_URL: string;
        readonly REACT_APP_GOOGLE_MAPS_API_KEY?: string;
        readonly [key: string]: string | undefined;
    }
}
