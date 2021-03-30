import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/app-state.interface";
import { AuthStateInterface } from "src/app/auth/types/auth-state.interface";

export const authFeatureSelector = createFeatureSelector<
  AppStateInterface,
  AuthStateInterface
>("auth");

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
);
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
);
