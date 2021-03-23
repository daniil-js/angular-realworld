import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RegisterRequestInterface } from "src/app/auth/types/register-request.interface";
import { environment } from "src/environments/environment";
import { AuthResponseType } from "src/app/auth/types/auth-response.type";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.httpClient
      .post<AuthResponseType>(environment.apiUrl + "/users", data)
      .pipe(map((request: AuthResponseType) => request.user));
  }
}
