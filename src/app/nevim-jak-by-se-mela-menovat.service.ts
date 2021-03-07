import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NevimJakBySeMelaMenovatService {

  constructor(private httpClient: HttpClient) {
  }


  createPlayer(username: string, password: string): Observable<any> {
    return this.httpClient.post('https://webhook.site/d5372c42-65e9-4b33-a81e-de4e401842d6', {
      username,
      password
    });
  }
}
