import { Component } from '@angular/core';
import { StateMenuService } from '../state-menu.service';

@Component({
  selector: 'app-check-list',
  imports: [],
  templateUrl: './check-list.component.html',
  styleUrl: './check-list.component.css'
})
export class CheckListComponent {
  items: any[] = [];

  constructor(private stateMenuService: StateMenuService) {}

  ngOnInit(): void {
    const saved = this.stateMenuService.getFormValue();
    this.items = saved?.items || [];
  }
}
