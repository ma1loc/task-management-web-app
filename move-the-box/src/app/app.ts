import { Component } from '@angular/core';
import { Box } from './box/box';
import { BoxController } from './box-controller/box-controller';

@Component({
  selector: 'app-root',
  imports: [Box, BoxController],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  leftButtonName = 'left-button';
  rightButtonName = 'right-button';
  boxName = 'Move ME :)';
}
