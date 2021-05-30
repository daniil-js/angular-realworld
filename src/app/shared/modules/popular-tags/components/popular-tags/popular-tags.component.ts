import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { PopularTagType } from "src/app/shared/types/popular-tag.type";
import { select, Store } from "@ngrx/store";
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from "src/app/shared/modules/popular-tags/store/selectors";
import { getPopularTagsAction } from "src/app/shared/modules/popular-tags/store/actions/get-popular-tags.action";

@Component({
  selector: "mc-popular-tags",
  templateUrl: "./popular-tags.component.html",
  styleUrls: ["./popular-tags.component.scss"],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }
}
