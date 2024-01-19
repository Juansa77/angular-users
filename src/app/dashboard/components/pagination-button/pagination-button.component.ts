import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pagination-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination-button.component.html',

})
export class PaginationButtonComponent {
  @Input({required:true}) name:string=""
  @Input() disabled: boolean = false;
}
