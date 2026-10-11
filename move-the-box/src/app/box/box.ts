import { Component, Input } from '@angular/core';
import { BoxService } from './box.service';

@Component({
  imports: [],
  selector: 'app-box',
  styleUrl: './box.css',
  templateUrl: './box.html',
})
export class Box {
  @Input({required: true}) boxName!: string;

  // Inject the service using constracter
  constructor(private BoxPosition: BoxService) {}
}
