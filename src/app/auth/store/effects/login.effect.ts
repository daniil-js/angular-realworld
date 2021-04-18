import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, switchMap, tap } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "src/app/auth/services/auth.service";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from "src/app/auth/store/actions/login.action";
import { Router } from "@angular/router";
import { PersistenceService } from "src/app/shared/services/persistence.service";

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) =>
        this.authService.login(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set("access-token", currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(loginFailureAction({ errors: errorResponse.error.errors }))
          )
        )
      )
    )
  );

  redirectAfterSubmitting$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(async () => {
          await this.router.navigateByUrl("/");
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}
}
