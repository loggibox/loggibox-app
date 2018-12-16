import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

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

  getListAvailableDeliveries() {
    return this.http.get("https://loggibox.herokuapp.com/packets");
  }
}
