import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent {
  @Input() isOpenedMenu = false;

  @Output() isOpenedMenuChange = new EventEmitter<boolean>()

  toggleMenu() {
    this.isOpenedMenuChange.emit(!this.isOpenedMenu)
  }
}
