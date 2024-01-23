import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';

const routes: Routes = [
  { path: '', component: ProdutoListComponent, pathMatch: 'full' },
  { path: 'new', component: ProdutoFormComponent, pathMatch: 'full' },
  { path: 'edit/:id', component: ProdutoFormComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }