import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomLayoutModule } from '../../layout/custom-layout/custom-layout.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, CustomLayoutModule, HomeRoutingModule],
})
export class HomeModule {}
