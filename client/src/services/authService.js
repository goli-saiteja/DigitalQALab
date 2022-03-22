import api from './http';
import { BASE_URL } from 'constants';

const signIn = () => {
  const getUrl = () => {
    return 'api/auth/signin/';
  };
  const processResponse = (response) => {
    const { accessToken } = JSON.parse(response);
    localStorage.setItem('accessToken', accessToken);
    return response;
  }
  return ({ email, password }) => new Promise((resolve, reject) => {
    api.post(getUrl(), { email: email, password: password }, { isPrivate: false, baseURL: BASE_URL }).then(response => {
      let result = processResponse(response);
      return resolve(result);
    }).catch(err => {
      return reject(err);
    });
  })


}

const verifyToken = () => {
  const getUrl = () => {
    return 'api/auth/authenticate/';
  };
  const processResponse = (response) => {
    return response;
  }
  return () => api.post(getUrl(), undefined, { 'Access-Token': AuthService.getToken(), 'Accept': `*/*` }, { isPrivate: true, baseURL: BASE_URL }).then(response => {
    let result = processResponse(response);
    return result;
  }).catch(err => {
    throw err;
  });
}

const signOut = () => () => {
  let stored_items = [
    'accessToken'
  ]
  stored_items.forEach(item => localStorage.removeItem(item))
}

const getUserInfo = () => () => {
  if (localStorage.getItem('spellbee_review_access_token')) {
    return {
      refresh_token: localStorage.getItem('refresh_token'),
      email: localStorage.getItem('email'),
      username: localStorage.getItem('username'),
      is_admin: localStorage.getItem('is_admin'),
      volume: localStorage.getItem('volume'),
    }
  } else {
    return false;
  }
}

const getToken = () => () => localStorage.getItem('accessToken') || false;

const getAuthHeader = () => () => ({ 'Access-Token': localStorage.getItem('accessToken') });

const AuthService = {
  getAuthHeader: getAuthHeader(),
  getToken: getToken(),
  getUserInfo: getUserInfo(),
  signIn: signIn(),
  signOut: signOut(),
  verifyToken: verifyToken()
};

export default AuthService;