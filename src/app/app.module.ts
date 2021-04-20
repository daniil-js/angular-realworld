import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AuthModule } from "src/app/auth/auth.module";
import { AppComponent } from "src/app/app.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { TopBarModule } from "src/app/shared/modules/top-bar/top-bar.module";
import { AuthInterceptor } from "src/app/shared/interceptors/auth.interceptor";
import { PersistenceService } from "src/app/shared/services/persistence.service";
import { GlobalFeedModule } from "src/app/global-feed/global-feed.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      features: {
        pause: false,
        lock: true,
        persist: true,
      },
    }),
    HttpClientModule,
    TopBarModule,
    GlobalFeedModule,
  ],
  providers: [
    PersistenceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
