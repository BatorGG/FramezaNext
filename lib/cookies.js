import { parse } from 'cookie';

export function parseCookies() {
  if (typeof document !== 'undefined') {
    return parse(document.cookie || '');
  }
  return {};
}