import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListListComponent } from './lists/list-list/list-list.component';
import { ListDetailComponent } from './lists/list-detail/list-detail.component';
import { ListItemComponent } from './lists/list-list/list-item/list-item.component';
import { ListsComponent } from './lists/lists.component';
import { ListStartComponent } from './lists/list-start/list-start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule} from '@angular/material/card';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ListListComponent,
    ListDetailComponent,
    ListItemComponent,
    ListsComponent,
    ListStartComponent,
    TaskDetailComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
