export const enum AUTH_ACTION_TYPES_ENUM {
  INITIAL_VALUE = 0,

  LOGIN_START,
  LOGIN_ERROR,
  LOGIN_SUCCESS,

  GET_AUTHENTICATED_USER_SUCCESS,
  GET_AUTHENTICATED_USER_ERROR,

  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,

  SIGNOUT_SUCCESS,
  SIGNOUT_ERROR,

  GO_TO_AUTH,
  GO_TO_APP
}

export interface AuthSliceInterface {
  AUTH_ACTION_TYPE: AUTH_ACTION_TYPES_ENUM;

  isLoginLoading: boolean;
  uid: string;
  message: string;
  isGetAuthenticatedUserLoading: boolean;
  isLoggedin: boolean;
  user: object;

  reseActionTypeAuth: () => void;

  appEntry: () => void;
  getAuthenticatedUser: () => object;
  setActionTypesAuth: (object: Partial<AuthSliceInterface>) => void;

  login: (email: string, password: string,) => void;

  signout: () => void;
}
