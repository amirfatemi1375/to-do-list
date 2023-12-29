import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CustomLayoutComponent } from './custom-layout.component';

@NgModule({
  declarations: [CustomLayoutComponent],
  imports: [CommonModule, SharedModule],
  exports: [CustomLayoutComponent],
})
export class CustomLayoutModule {}
