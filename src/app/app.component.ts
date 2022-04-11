import { Component } from "@angular/core";
import { reduce } from "rxjs-compat/operator/reduce";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  styles: [
    `
      .afterFifth {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  displayDetails = false;
  details: string[] = [];

  onDisplayDetails() {
    this.details.push(new Date().toString());
    this.displayDetails = true;
  }

  getColor(index: number) {
    console.log(index);
    return index > 3 ? "blue" : "white";
  }
}
