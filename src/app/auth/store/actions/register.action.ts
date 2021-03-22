import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "src/app/auth/store/actions/action-types";
import { RegisterRequestInterface } from "src/app/auth/types/register-request.interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<RegisterRequestInterface>()
);
