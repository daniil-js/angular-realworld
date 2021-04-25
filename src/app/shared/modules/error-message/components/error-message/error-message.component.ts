import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "mc-error-message",
  template: "<div>{{errorMessageProps}}</div>",
})
export class ErrorMessageComponent implements OnInit {
  @Input("errorMessage") errorMessageProps = "Something went wrong...";

  constructor() {}

  ngOnInit(): void {}
}
