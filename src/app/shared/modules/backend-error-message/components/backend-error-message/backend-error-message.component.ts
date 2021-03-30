import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorsInterface } from "src/app/shared/types/backend-errors.interface";

@Component({
  selector: "mc-backend-error-message",
  templateUrl: "./backend-error-message.component.html",
  styleUrls: ["./backend-error-message.component.scss"],
})
export class BackendErrorMessageComponent implements OnInit {
  @Input("backendErrors") backendErrorsProps: BackendErrorsInterface;

  errorMessages: string[];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(", ");

        return `${name} ${messages}`;
      }
    );
  }
}
