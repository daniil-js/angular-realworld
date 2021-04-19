import { AuthStateInterface } from "src/app/auth/types/auth-state.interface";
import { Action, createReducer, on } from "@ngrx/store";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from "src/app/auth/store/actions/register.action";
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from "src/app/auth/store/actions/login.action";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from "src/app/auth/store/actions/get-current-user.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  validationErrors: null,
  isLoggedIn: null,
  currentUser: null,
  isLoading: false,
};

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state: AuthStateInterface, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: null,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state: AuthStateInterface, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
      isLoggedIn: false,
    })
  ),
  on(
    loginAction,
    (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state: AuthStateInterface, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: null,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    loginFailureAction,
    (state: AuthStateInterface, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
      isLoggedIn: false,
    })
  ),
  on(
    getCurrentUserAction,
    (state: AuthStateInterface): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCurrentUserSuccessAction,
    (state: AuthStateInterface, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    getCurrentUserFailureAction,
    (state: AuthStateInterface, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  )
);

export function reducer(state: AuthStateInterface | undefined, action: Action) {
  return authReducer(state, action);
}
