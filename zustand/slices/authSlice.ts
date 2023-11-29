import { StateCreator } from "zustand";

import { account, databases } from "@/appwrite/config";
import { DBIDS } from "@/appwrite/config";
import { endSession, fetchUserDetails } from "@/appwrite/functions";
import { CombinedAuthTypes } from "@/zustand/types";
import {
  AUTH_ACTION_TYPES,
  AuthSliceInterface
} from "@/zustand/types/authTypes";

export const authSlice: StateCreator<
  CombinedAuthTypes,
  [],
  [],
  AuthSliceInterface
> = (set, get) => ({
  AUTH_ACTION_TYPE: AUTH_ACTION_TYPES.INITIAL_VALUE,
  isLoginLoading: false,
  uid: "",
  user: {},
  message: "",
  isGetAuthenticatedUserLoading: false,
  isLoggedin: false,

  reseActionTypeAuth: () => {
    set({ AUTH_ACTION_TYPE: AUTH_ACTION_TYPES.INITIAL_VALUE });
  },

  appEntry: async () => {
    // const promise = account.get();
    // promise.then(
    //   function (response) {
    //     fetchUserDetails(response.$id)
    //       .then((user) => {
    //         console.log(JSON.stringify(user, null, 2));
    //         const details = user.documents[0];
    //         set({
    //           AUTH_ACTION_TYPE: AUTH_ACTION_TYPES_ENUM.GO_TO_APP,
    //           uid: response.$id,
    //           user: {
    //             name: details.name,
    //             email: details.email,
    //             profile_picture: details.profile_picture,
    //             last_logged_in: details.last_logged_in
    //           },
    //           isLoggedin: true
    //         });
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   },
    //   function (error) {
    //     set({
    //       AUTH_ACTION_TYPE: AUTH_ACTION_TYPES_ENUM.GO_TO_AUTH,
    //       uid: "",
    //       isLoggedin: false
    //     });
    //   }
    // );
  },
  getAuthenticatedUser: async () => {
    set({ AUTH_ACTION_TYPE: AUTH_ACTION_TYPES.INITIAL_VALUE });
  },

  setActionTypesAuth: (object: Partial<AuthSliceInterface>) => {
    set(object);
  },

  login: async (email: string, password: string) => {
    set({
      AUTH_ACTION_TYPE: AUTH_ACTION_TYPES.LOGIN_START,
      isLoginLoading: true
    });

    const promise = account.createEmailSession(email, password);

    promise.then(
      function (response) {
        fetchUserDetails(response.userId)
          .then((user) => {
            const details = user.documents[0];
            set({
              AUTH_ACTION_TYPE: AUTH_ACTION_TYPES.LOGIN_SUCCESS,
              message: "Login was successful!.",
              uid: response.$id,
              user: {
                name: details.name,
                email: details.email,
                profile_picture: details.profile_picture,
                last_logged_in: details.last_logged_in
              },
              isLoggedin: true,
              isLoginLoading: false
            });
          })
          .catch((error) => {
            console.log(error);
            set({
              AUTH_ACTION_TYPE: AUTH_ACTION_TYPES.LOGIN_ERROR,
              isLoginLoading: false,
              message: error.message
            });
          });
      },
      function (error) {
        console.log(error);
        set({
          AUTH_ACTION_TYPE: AUTH_ACTION_TYPES.LOGIN_ERROR,
          isLoginLoading: false,
          message: error.message
        });
      }
    );
  },

  signout: async () => {
    // set({ AUTH_ACTION_TYPE: AUTH_ACTION_TYPES_ENUM.SIGNOUT_SUCCESS });

    const promise = account.deleteSession("current");

    promise
      .then((response) => {
        set({
          AUTH_ACTION_TYPE: AUTH_ACTION_TYPES.SIGNOUT_SUCCESS,
          uid: "",
          isLoggedin: false
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
