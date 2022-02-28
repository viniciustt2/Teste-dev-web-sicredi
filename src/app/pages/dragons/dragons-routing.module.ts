import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDragonsComponent } from './add-dragons/add-dragons.component';
import { DetailDragonComponent } from './detail-dragon/detail-dragon.component';
import { EditDragonsComponent } from './edit-dragons/edit-dragons.component';
import { ListDragonsComponent } from './list-dragons/list-dragons.component';

const routes: Routes = [
  {
    path: '',
    component: ListDragonsComponent,
  },
  {
    path: 'add',
    component: AddDragonsComponent,
  },
  {
    path: 'edit/:id',
    component: EditDragonsComponent,
    // resolve: { dragon: DragonResolver },
  },
  {
    path: 'detail/:id',
    component: DetailDragonComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragonsRoutingModule {}
