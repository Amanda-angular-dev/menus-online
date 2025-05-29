import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelUsersComponent } from './pages/panel-users/panel-users.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menuss';
}
