import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SpinnerComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [SpinnerComponent, NavbarComponent],
})
export class SharedModule {}
