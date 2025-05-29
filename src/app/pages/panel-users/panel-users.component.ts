import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StateMenuService } from './state-menu.service';

@Component({
  selector: 'app-panel-users',
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './panel-users.component.html',
  styleUrl: './panel-users.component.css',
  providers: [StateMenuService]
})
export class  PanelUsersComponent {

}
