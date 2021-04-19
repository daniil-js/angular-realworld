import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { RegisterRequestInterface } from "src/app/auth/types/register-request.interface";
import { environment } from "src/environments/environment";
import { AuthResponseType } from "src/app/auth/types/auth-response.type";
import { CurrentUserInterface } from "src/app/shared/types/current-user.interface";
import { LoginRequestInterface } from "src/app/auth/types/login-request.interface";

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  getUser(response: AuthResponseType): CurrentUserInterface {
    return response.user;
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.httpClient
      .post<AuthResponseType>(environment.apiUrl + "/users", data)
      .pipe(map(this.getUser));
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.httpClient
      .post<AuthResponseType>(environment.apiUrl + "/users/login", data)
      .pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    return this.httpClient
      .get<AuthResponseType>(environment.apiUrl + "/user")
      .pipe(map(this.getUser));
  }
}
