import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Geolocation } from "@ionic-native/geolocation";
declare var google: any;
/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-product-details",
  templateUrl: "product-details.html"
})
export class ProductDetailsPage {
  @ViewChild("map") mapRef: ElementRef;
  image: any;
  google: any;

  constructor(
    private geolocation: Geolocation,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
      })
      .catch(error => {
        console.log("Error", error);
      });
    this.showMap();
  }

  showMap() {
    //location long / lat
    const location = new google.maps.LatLng(-23.585581, -46.609715);

    //Map Options
    const options = {
      center: location,
      zoom: 10
    };

    const map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarker(location, map);
  }

  addMarker(position, map) {
    const image = "../../assets/img/44a.png";
    return new google.maps.Marker({
      position,
      map,
      icon: image
    });
  }
}
