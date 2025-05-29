import { Routes } from '@angular/router';
import { PanelUsersComponent } from './pages/panel-users/panel-users.component';
import { InfoComponent } from './pages/panel-users/info/info.component';
import { CheckListComponent } from './pages/panel-users/check-list/check-list.component';
import { CreateMenuComponent } from './pages/panel-users/create-menu/create-menu.component';

export const routes: Routes = [
    {
      path: '', redirectTo: 'panel-user/info', pathMatch: 'full'
    },
    {
      path: 'panel-user',
      component: PanelUsersComponent,
      children: [
        { path: '', redirectTo: 'info', pathMatch: 'full' }, // redirección por defecto
        { path: 'info', component: InfoComponent },
        { path: 'check-list', component: CheckListComponent },
        { path: 'create-menu', component: CreateMenuComponent  } // <- esto es lo importante
      ]
    },
    // otras rutas globales si hay
  ];
  