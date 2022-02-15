import axios from 'axios';
import { baseUrl } from '@services/fetch';
import { useCookies } from 'react-cookie';
import { sub } from 'date-fns';

let name = 'YSESSIONID';
let value = 'cookieValue';
var days = 0.5;

interface DoLoginParams {
  username: string;
  password: string;
  rememberMe?: boolean;
}
export const doLogin = async ({
  username,
  password,
  rememberMe,
}: DoLoginParams): Promise<boolean> => {
  try {
    // manually set cookie
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = '; expires=' + date.toUTCString();
    document.cookie = name + '=' + value + expires + '; path=/';
    //   const result = await axios.post(baseUrl, { username, password });
    //   console.log(result);
    return true;
  } catch (error) {
    throw new Error('error here');
  }
};

export const doLogout = async () => {
  let value = '';
  // manually delete cookie
  let expire = `; expires=${sub(new Date(), { days: 1 }).toUTCString()}`;
  document.cookie = name + '=' + value + expire + '; path=/';
};
