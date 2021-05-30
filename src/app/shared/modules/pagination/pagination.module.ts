import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PaginationComponent } from "src/app/shared/modules/pagination/components/pagination/pagination.component";
import { UtilsService } from "src/app/shared/services/utils.service";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, RouterModule],
  exports: [PaginationComponent],
  providers: [UtilsService],
})
export class PaginationModule {}
