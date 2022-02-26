import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragonsRoutingModule } from './dragons-routing.module';
import { ListDragonsComponent } from './list-dragons/list-dragons.component';
import { AddDragonsComponent } from './add-dragons/add-dragons.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dragonsReducer } from 'src/app/store/dragons.state';
import { DragonsEffectService } from 'src/app/store/dragons.effect.service';


@NgModule({
  declarations: [
    ListDragonsComponent,
    AddDragonsComponent
  ],
  imports: [
    CommonModule,
    DragonsRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    
    StoreModule.forRoot({dragons:dragonsReducer }),
    EffectsModule.forRoot([DragonsEffectService]),
  ]
})
export class DragonsModule { }
