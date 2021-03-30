import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { RegisterComponent } from "src/app/auth/components/register/register.component";
import { reducer } from "src/app/auth/store/reducers";
import { AuthService } from "src/app/auth/services/auth.service";
import { EffectsModule } from "@ngrx/effects";
import { RegisterEffect } from "src/app/auth/store/effects/register.effect";
import { BackendErrorMessageModule } from "src/app/shared/modules/backend-error-message/mackend-error-message.module";

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature("auth", reducer),
    EffectsModule.forFeature([RegisterEffect]),
    BackendErrorMessageModule,
  ],
  declarations: [RegisterComponent],
  providers: [AuthService],
})
export class AuthModule {}
