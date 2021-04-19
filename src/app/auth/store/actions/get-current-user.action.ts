import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "src/app/auth/store/actions/action-types";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{ currentUser: CurrentUserInterface }>()
);

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE
);
