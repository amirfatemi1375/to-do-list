import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class SharedModule {}
