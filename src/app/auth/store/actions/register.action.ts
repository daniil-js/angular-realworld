import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "src/app/auth/store/actions/action-types";
import { RegisterRequestInterface } from "src/app/auth/types/register-request.interface";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
);
