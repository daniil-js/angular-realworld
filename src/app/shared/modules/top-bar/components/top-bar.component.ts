import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { select, Store } from "@ngrx/store";
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from "src/app/auth/store/selectors";

@Component({
  selector: "mc-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }
}
