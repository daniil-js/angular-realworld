import { AuthStateInterface } from "src/app/auth/types/auth-state.interface";
import { Action, createReducer, on } from "@ngrx/store";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from "src/app/auth/store/actions/register.action";

const initialState: AuthStateInterface = {
  isSubmitting: false,
  validationErrors: null,
  isLoggedIn: null,
  currentUser: null,
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
  )
);

export function reducer(state: AuthStateInterface | undefined, action: Action) {
  return authReducer(state, action);
}
