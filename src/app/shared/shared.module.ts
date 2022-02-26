import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [SpinnerComponent, SortPipe],
  imports: [CommonModule],
  exports: [SpinnerComponent, SortPipe],
})
export class SharedModule {}
