
import uiPages from '../utils/uiPages';
import baseEnvUrl from './environmentBaseUrl';

export function buildUrl(page: string, params?: Record<any, any>) {
  const uiPath = uiPages[page];
  const qParams = new URLSearchParams(params);
  const env = process.env.ENV || 'local';
  const base = baseEnvUrl[env]?.home || 'https://demoqa.com';
  const url = params
    ? `${base}${uiPath}?${qParams.toString()}`
    : `${base}${uiPath}`;
  return url;
}


  /**
    * page  bookStore
    * uiPath  /books
    * params  { book: '9781449337711' }
    * qParams  URLSearchParams { 'book' => '9781449337711' }
    * url  /books?book=9781449337711
  */
