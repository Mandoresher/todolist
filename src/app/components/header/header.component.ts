import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() appTitle: string | undefined;

  onMenuClick() {
    console.log('Меню с категориями и выходом открыто!');
  }
  onLoginClick() {
    console.log('Окно логина и регистрации открыто!');
  }
}
