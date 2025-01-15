import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }
}
