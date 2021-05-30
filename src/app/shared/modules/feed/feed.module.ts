import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeedComponent } from "src/app/shared/modules/feed/components/feed/feed.component";
import { EffectsModule } from "@ngrx/effects";
import { GetFeedEffect } from "src/app/shared/modules/feed/store/effects/get-feed.effect";
import { StoreModule } from "@ngrx/store";
import { reducer } from "src/app/shared/modules/feed/store/reducers";
import { FeedService } from "src/app/shared/modules/feed/services/feed.service";
import { RouterModule } from "@angular/router";
import { ErrorMessageModule } from "src/app/shared/modules/error-message/error-message.module";
import { LoadingModule } from "src/app/shared/modules/loading/loading.module";
import { PaginationModule } from "src/app/shared/modules/pagination/pagination.module";

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature("feed", reducer),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
  ],
  providers: [FeedService],
  exports: [FeedComponent],
})
export class FeedModule {}
