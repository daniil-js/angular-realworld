import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TopBarComponent } from "src/app/shared/modules/top-bar/components/top-bar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
