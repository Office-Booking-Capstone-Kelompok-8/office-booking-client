import Cookies from 'js-cookie';
import { ALLOWED_ROLE } from './constants';

const Auth = {
  storeUserToCookie(data) {
    if (!data?.accessToken || !data?.refreshToken || !data.role) return null;
    const { accessToken, refreshToken, role } = data;

    Cookies.set('accessToken', accessToken);
    Cookies.set('refreshToken', refreshToken);
    Cookies.set('role', role);
    return data;
  },
  getAccessToken() {
    return Cookies.get('accessToken');
  },
  getRefreshToken() {
    return Cookies.get('refreshToken');
  },
  logOut(navigate) {
    Cookies.remove('refreshToken');
    Cookies.remove('accessToken');
    Cookies.remove('role');
    navigate('/auth');
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
