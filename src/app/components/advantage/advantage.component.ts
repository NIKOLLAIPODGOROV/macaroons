import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage-component',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent {

  trimText: boolean = true;
  @Input() advantage: AdvantageType;
  @Input() index: number = 0;

  @HostListener("mouseover")
  mouseOver() {
    this.trimText = false;
  }

  @HostListener("mouseout")
  mouseOut() {
    this.trimText = true;
  }

  constructor() {
    this.advantage = {
      id: 0,
      title: '',
      text: ''
    }
  }
}



