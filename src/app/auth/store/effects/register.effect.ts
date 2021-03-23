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

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerAction),
      switchMap(({ request }) =>
        this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) =>
            registerSuccessAction({ currentUser })
          ),
          catchError(() => of(registerFailureAction))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
