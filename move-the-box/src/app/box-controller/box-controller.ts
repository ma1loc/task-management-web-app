import { Component, Input } from '@angular/core';
import { BoxService } from '../box/box.service';
import { ConstantPool } from '@angular/compiler';

@Component({
  imports: [],
  selector: 'app-box-controller',
  styleUrl: './box-controller.css',
  templateUrl: './box-controller.html',
})
export class BoxController {
  @Input({ required: true }) ButtonName!: string;
  @Input({ required: true }) NewBoxPosition!: number;

  // constructor injection
  constructor(private BoxPosition: BoxService) {}

  onClickEvent() {
    console.log("click");
    this.BoxPosition.CurrentBoxPosition.set(this.BoxPosition.CurrentBoxPosition() + this.NewBoxPosition);
  }
}
