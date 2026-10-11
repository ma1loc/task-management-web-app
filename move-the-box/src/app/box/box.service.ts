import { signal } from '@angular/core';
// import { BoxService } from './box.service';
import { Injectable } from '@angular/core';

@Injectable({
  /* global singleton */
  providedIn: 'root',
})
export class BoxService {
  CurrentBoxPosition = signal(0);
}
