import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "src/app/auth/store/actions/action-types";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";
import { LoginRequestInterface } from "src/app/auth/types/login-request.interface";

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: LoginRequestInterface }>()
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
