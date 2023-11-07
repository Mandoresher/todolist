import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() appTitle: string | undefined;

  @Output() menuClick = new EventEmitter<Event>()

  onMenuClick(event: Event) {
    this.menuClick.emit(event)
  }
  onLoginClick() {
    console.log('Окно логина и регистрации открыто!');
  }
}
