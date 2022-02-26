import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDragonsComponent } from './add-dragons/add-dragons.component';
import { ListDragonsComponent } from './list-dragons/list-dragons.component';

const routes: Routes = [
  {
    path: '', component: ListDragonsComponent
  },
  {
    path: 'add-dragon', component: AddDragonsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonsRoutingModule { }
