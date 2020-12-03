import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular 11";

  public userName = "Thibaut Bouldoire";
  public avgNoOfBooks = 9.5;

  getReadBooksAvg() {
    return Math.round(this.avgNoOfBooks);
  }
  getAverageColorState() {
    return this.avgNoOfBooks < 5;
  }

  public averageValueState = {
    "text-valid": this.avgNoOfBooks >= 5,
    "text-error": this.avgNoOfBooks < 5
  };
}
