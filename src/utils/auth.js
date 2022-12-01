import Cookies from 'js-cookie';

const Auth = {
  storeUserToCookie(data) {
    if (!data?.accessToken || !data?.refreshToken) return null;
    const { accessToken, refreshToken } = data;
    Cookies.set('accessToken', accessToken);
    Cookies.set('refreshToken', refreshToken);
    return data;
  },
  getAccessToken() {
    return Cookies.get('accessToken');
  },
  getRefreshToken() {
    return Cookies.get('refreshToken');
  },

  isAuthorization() {
    if (Cookies.get('accessToken') || Cookies.get('refreshToken')) return true;
    return null;
  },
};

export default Auth;
