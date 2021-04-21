import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from "src/app/shared/modules/feed/store/actions/actions";
import { FeedService } from "src/app/shared/modules/feed/services/feed.service";
import { GetFeedResponseInterface } from "src/app/shared/modules/feed/types/get-feed-response.interface";

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed });
          }),
          catchError(() => of(getFeedFailureAction()))
        );
      })
    )
  );

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
