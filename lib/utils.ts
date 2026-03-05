export const baseUrl = process.env.PRODUCTION_URL
  ? `https://${process.env.PRODUCTION_URL}`
  : 'http://localhost:3000';

export const LOCALE = process.env.LOCALE ? process.env.LOCALE : 'en-GB';
