import { useCookies } from 'react-cookie';

export const useAuth = (): boolean => {
  const [cookies] = useCookies(['cookie-name']);
  if (cookies['cookie-name']) {
    console.log(cookies);
    console.log('cookies exists');
    return true;
  }

  return false;
};
