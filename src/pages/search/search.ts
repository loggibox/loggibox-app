import { ProductDetailsPage } from "./../product-details/product-details";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { Item } from "../../models/item";
import { Items } from "../../providers";
import { RequestsProvider } from "../../providers/requests/requests";

@IonicPage()
@Component({
  selector: "page-search",
  templateUrl: "search.html"
})
export class SearchPage {
  currentItems: any = [];
  availablePackages: Object[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public items: Items,
    public http: RequestsProvider
  ) {}

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  ionViewDidLoad() {
    this.http.getListAvailableDeliveries().subscribe(data => {
      let response: any;
      response = data.result;

      this.availablePackages = new Array<Object>();
      this.availablePackages = response;
      console.log(this.availablePackages);
    });
  }
  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push("ItemDetailPage", {
      item: item
    });
  }

  detailsPackage() {
    this.navCtrl.push(ProductDetailsPage);
  }
}
