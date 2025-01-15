import {Component, Input} from '@angular/core';
import {Config} from "../../enum/config";
import {CommonService} from "../../services/common.service";


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public tell: string = Config.phone;
  public isBurger: boolean = false;
  @Input() aboutElement!: HTMLElement;
  @Input() productsElement!: HTMLElement;
  @Input() orderElement!: HTMLElement;

  constructor(public commonService: CommonService) {

  }

  public toggleBurger(): void {
    if (!this.isBurger) {
      this.isBurger = true;
    } else {
      this.isBurger = false;
    }
  }

  navigation(target: HTMLElement): void {
    if (target) {
      this.commonService.scrollTo(target);
    }
    this.toggleBurger();
  }
}
