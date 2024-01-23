import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';

const routes: Routes = [
  { path: '', component: ClientListComponent, pathMatch: 'full' },
  { path: 'new', component: ClientFormComponent, pathMatch: 'full' },
  { path: 'edit/:id', component: ClientFormComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }