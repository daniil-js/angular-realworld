import { FeedStateInterface } from "src/app/shared/modules/feed/types/feed-state.interface";
import { Action, createReducer, on } from "@ngrx/store";
import {
  getFeedAction,
  getFeedSuccessAction,
} from "src/app/shared/modules/feed/store/actions/actions";

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
    })
  )
);

export function reducer(state: FeedStateInterface | undefined, action: Action) {
  return feedReducer(state, action);
}
