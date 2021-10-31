import axios from 'axios';
import { baseUrl } from '@lib/index';
import { useCookies } from 'react-cookie';
import { sub } from 'date-fns';

let name = 'cookie-name';
let value = 'cookieValue';
var days = 0.5;

export const doLogin = async ({ username, password }) => {
  // manually set cookie
  var date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  var expires = '; expires=' + date.toUTCString();
  document.cookie = name + '=' + value + expires + '; path=/';

  console.log('login');
  //   const result = await axios.post(baseUrl, { username, password });
  //   console.log(result);
};

export const doLogout = async () => {
  console.log('logout');
  let value = '';
  // manually delete cookie
  let expire = `; expires=${sub(new Date(), { days: 1 }).toUTCString()}`;
  document.cookie = name + '=' + value + expire + '; path=/';
};
