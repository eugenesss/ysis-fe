import { useCookies } from 'react-cookie';

export const useCookieAuth = (): boolean => {
  const [cookies] = useCookies(['YSESSIONID']);
  if (cookies['YSESSIONID']) {
    return true;
  }

  return false;
};
