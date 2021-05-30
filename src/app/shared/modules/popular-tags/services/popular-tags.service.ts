import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PopularTagType } from "src/app/shared/types/popular-tag.type";
import { environment } from "src/environments/environment";
import { GetPopularTagsResponseInterface } from "src/app/shared/modules/popular-tags/types/get-popular-tags-response.interface";

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getPopularTags(): Observable<PopularTagType[]> {
    return this.http.get(environment.apiUrl + "/tags").pipe(
      map((response: GetPopularTagsResponseInterface) => {
        return response.tags;
      })
    );
  }
}
