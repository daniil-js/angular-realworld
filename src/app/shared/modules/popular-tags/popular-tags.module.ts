import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { reducers } from "src/app/shared/modules/popular-tags/store/reducers";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { GetPopularTagsEffect } from "src/app/shared/modules/popular-tags/store/effects/get-popular-tags.effect";
import { PopularTagsComponent } from "./components/popular-tags/popular-tags.component";
import { ErrorMessageModule } from "src/app/shared/modules/error-message/error-message.module";
import { LoadingModule } from "src/app/shared/modules/loading/loading.module";
import { RouterModule } from "@angular/router";
import { PopularTagsService } from "src/app/shared/modules/popular-tags/services/popular-tags.service";

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature("popularTags", reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    ErrorMessageModule,
    LoadingModule,
    RouterModule,
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
