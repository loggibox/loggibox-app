import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the RequestsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestsProvider {
  URL_LIST = "";
  constructor(public http: HttpClient) {
    console.log("Hello RequestsProvider Provider");
  }

  getDeliveryList(): Observable<Object> {
    return this.http.get<Object>("https://loggibox.herokuapp.com/packets");
  }

  getListAvailableDeliveries(): Observable<Object> {
    return this.http.get<Object>(
      "https://loggibox.herokuapp.com/packets?delivered=true"
    );
  }
}
