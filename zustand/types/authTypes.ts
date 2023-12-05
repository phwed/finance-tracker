export const AUTH_ACTION_TYPES = {
  INITIAL_VALUE: "",
  LOGIN_START: "LOGIN_START",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",

  GET_AUTHENTICATED_USER_SUCCESS: "GET_AUTHENTICATED_USER_SUCCESS",
  GET_AUTHENTICATED_USER_ERROR: "GET_AUTHENTICATED_USER_ERROR",

  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_ERROR: "FORGOT_PASSWORD_ERROR",

  SIGNOUT_SUCCESS: "SIGNOUT_SUCCESS",
  SIGNOUT_ERROR: "SIGNOUT_ERROR",

  GO_TO_AUTH: "GO_TO_AUTH",
  GO_TO_APP: "GO_TO_APP"
};

type User = Partial<{
  name: string;
  email: string;
  profile_picture: string;
  last_logged_in: string;
}>;

export interface AuthSliceInterface {
  AUTH_ACTION_TYPE: (typeof AUTH_ACTION_TYPES)[keyof typeof AUTH_ACTION_TYPES];

  isLoginLoading: boolean;
  uid: string;
  message: string;
  isGetAuthenticatedUserLoading: boolean;
  isLoggedin: boolean;
  user: User;

  reseActionTypeAuth: () => void;

  setActionTypesAuth: (object: Partial<AuthSliceInterface>) => void;

  appEntry: () => void;

  getAuthenticatedUser: () => object;

  login: (email: string, password: string) => void;

  signout: () => void;
}
