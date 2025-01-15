import {Component} from '@angular/core';
import {Config} from "../../enum/config";

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public rightContent: string = `Все права защищены, ${new Date().getFullYear()}`;
  public tell: string = Config.phone;
  public instagramURL: string = Config.instagramURL;

}
