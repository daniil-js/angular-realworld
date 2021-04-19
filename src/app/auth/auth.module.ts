import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { LoginComponent } from "src/app/auth/components/login/login.component";
import { reducer } from "src/app/auth/store/reducers";
import { AuthService } from "src/app/auth/services/auth.service";
import { EffectsModule } from "@ngrx/effects";
import { RegisterEffect } from "src/app/auth/store/effects/register.effect";
import { BackendErrorMessageModule } from "src/app/shared/modules/backend-error-message/mackend-error-message.module";
import { PersistenceService } from "src/app/shared/services/persistence.service";
import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { LoginEffect } from "src/app/auth/store/effects/login.effect";
import { GetCurrentUserEffect } from "src/app/auth/store/effects/get-current-user.effect";

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature("auth", reducer),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    BackendErrorMessageModule,
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [AuthService, PersistenceService],
})
export class AuthModule {}
