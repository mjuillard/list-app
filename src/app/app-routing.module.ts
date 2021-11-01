import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDetailComponent } from './lists/list-detail/list-detail.component';
import { ListStartComponent } from './lists/list-start/list-start.component';
import { ListsComponent } from './lists/lists.component';


const routes: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'lists'
      , component: ListsComponent
      , children: [
        { path: '', component: ListStartComponent, pathMatch: 'full' },
        //{ path: 'new', component: ListEditComponent },
        { path: ':id', component: ListDetailComponent },
        //{ path: ':id/edit', component: RecipeEditComponent }

      ]
  },
  {path: '**', redirectTo: '/lists'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
