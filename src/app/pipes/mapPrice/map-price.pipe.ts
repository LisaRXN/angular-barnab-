import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  name: "mapPrice",
})
export class MapPricePipe implements PipeTransform {
  transform(value: string): string {
    const valueNumber = parseFloat(value.replace(/\s/g, ''))
    if (valueNumber < 1000) {
      return Math.round(valueNumber)*10/10 + "";
    } else if (valueNumber >= 1000000) {
      return Math.round(valueNumber*10/ 1000000)/10 + "M";
    } else {
      return Math.round(valueNumber*10/1000)/10 + "K";
    }
  }
}
