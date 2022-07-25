import Cookies from 'js-cookie';
import { type } from 'os';
import { CartItem } from '../pages/mixtapes/[mixtapeId]';

// required to check if a current cookie exists on reload of the page etc

export function getParsedCookie(key: string) {
  const cookieValue = Cookies.get(key); // Type is string | undefined

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue); // Type is string
  } catch (err) {
    return undefined;
  }
}

export function setStringifiedCookie(key: string, value: CartItem[]) {
  Cookies.set(key, JSON.stringify(value));
}
