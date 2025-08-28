import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-loading-spinner',
  standalone: true,  
  imports: [NgClass], 
  templateUrl: './loading-spinner.html',
  styleUrls: ['./loading-spinner.scss']
})
export class LoadingSpinnerComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  @Input() mode: 'inline' | 'overlay' = 'inline';

  @Input() ariaLabel: string = 'Loading…';
}
