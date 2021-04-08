import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, catchError, switchMap } from "rxjs/operators";
import { AuthService } from "src/app/auth/services/auth.service";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from "src/app/auth/store/actions/register.action";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { PersistenceService } from "src/app/shared/services/persistence.service";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistenceService.set("access-token", currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(registerFailureAction({ errors: errorResponse.error.errors }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}
}
