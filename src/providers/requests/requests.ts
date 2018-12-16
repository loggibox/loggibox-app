import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
/*
  Generated class for the RequestsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestsProvider {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  URL_LIST = "";
  constructor(public http: HttpClient) {
    console.log("Hello RequestsProvider Provider");
  }

  getDeliveryList(): Observable<any> {
    return this.http.get<any>("https://loggibox.herokuapp.com/packets");
  }

  getListAvailableDeliveries(): Observable<any> {
    return this.http.get<any>(
      "https://loggibox.herokuapp.com/packets?delivered=true"
    );
  }
  update(idPacote: string): Observable<Object> {

    let body ={ "delivered": true,
      "distribution_center": false,
      "delivering": false
    };

    return this.http.patch<Object>("https://loggibox.herokuapp.com/packets/" + idPacote, body, {
      headers: this.headers
    });
  }
}
