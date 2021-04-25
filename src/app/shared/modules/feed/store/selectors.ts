import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/shared/types/app-state.interface";
import { FeedStateInterface } from "src/app/shared/modules/feed/types/feed-state.interface";

export const feedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface
>("feed");

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
);
