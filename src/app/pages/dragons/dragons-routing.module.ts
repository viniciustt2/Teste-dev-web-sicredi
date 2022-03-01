import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AddDragonsComponent } from './add-dragons/add-dragons.component';
import { DetailDragonComponent } from './detail-dragon/detail-dragon.component';
import { EditDragonsComponent } from './edit-dragons/edit-dragons.component';
import { ListDragonsComponent } from './list-dragons/list-dragons.component';

const routes: Routes = [
  {
    path: '',
    component: ListDragonsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add',
    component: AddDragonsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'edit/:id',
    component: EditDragonsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'detail/:id',
    component: DetailDragonComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragonsRoutingModule {}
