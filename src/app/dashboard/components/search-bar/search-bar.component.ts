import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  @ViewChild('txtTypeInput')
  public tagInput!: ElementRef<HTMLInputElement>;
  //* Evitar la acción enter
  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKeyPress(event: KeyboardEvent) {
    event.preventDefault();
  }

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  constructor(private userService: UserService) {}

  searchTag() {
    console.log('search tag activado');
    //*Tomamos el valor de taginput, al que tenemos acceso gracias al decorador
    const newTag = this.tagInput.nativeElement.value;
    //*Accedemos al service para que se agrege cada búsqueda al array de búsqueda
    if (newTag.length > 0) {
      this.emitValue(newTag);
      this.userService.filterUsers(newTag);
      //*Borramos el valor del input
      this.tagInput.nativeElement.value = '';
    }
  }
}
