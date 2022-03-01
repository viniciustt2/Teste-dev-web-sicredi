import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [SpinnerComponent, NavbarComponent, CardComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [SpinnerComponent, NavbarComponent, CardComponent],
})
export class SharedModule {}
