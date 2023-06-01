import Cookies from 'js-cookie';
import { ALLOWED_ROLE } from './constants';

const Auth = {
  storeUserToCookie(data) {
    if (!data?.accessToken || !data?.refreshToken || !data.role) return null;
    const { accessToken, refreshToken, role, userId } = data;

    Cookies.set('accessToken', accessToken);
    Cookies.set('refreshToken', refreshToken);
    Cookies.set('role', role);
    Cookies.set('id', userId);
    return data;
  },
  storeUserToState(data) {
    localStorage.setItem('name', data?.name);
    localStorage.setItem('email', data?.email);
    localStorage.setItem('phone', data?.phone);
    localStorage.setItem('picture', data?.picture);
  },
  getAccessToken() {
    return Cookies.get('accessToken');
  },
  getRefreshToken() {
    return Cookies.get('refreshToken');
  },
  logOut() {
    Cookies.remove('refreshToken');
    Cookies.remove('accessToken');
    Cookies.remove('role');
    Cookies.remove('id');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('phone');
    localStorage.removeItem('picture');
    window.location.reload();
  },
  isAuthorization() {
    if (
      (Cookies.get('accessToken') || Cookies.get('refreshToken')) &&
      Cookies.get('role') === ALLOWED_ROLE.toString()
    )
      return true;
    return null;
  },
};

export default Auth;
