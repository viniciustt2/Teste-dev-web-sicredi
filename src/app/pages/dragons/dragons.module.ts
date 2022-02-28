import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragonsRoutingModule } from './dragons-routing.module';
import { ListDragonsComponent } from './list-dragons/list-dragons.component';
import { AddDragonsComponent } from './add-dragons/add-dragons.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditDragonsComponent } from './edit-dragons/edit-dragons.component';
import { DetailDragonComponent } from './detail-dragon/detail-dragon.component';

@NgModule({
  declarations: [
    ListDragonsComponent,
    AddDragonsComponent,
    EditDragonsComponent,
    DetailDragonComponent,
  ],
  imports: [
    CommonModule,
    DragonsRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class DragonsModule {}
