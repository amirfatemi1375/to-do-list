import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { CustomLayoutModule } from '../../layout/custom-layout/custom-layout.module';
import { DailyListComponent } from './components/daily-list/daily-list.component';
import { MaterialModule } from '../../shared/modules/material.module';
@NgModule({
  declarations: [HomeComponent, DailyListComponent],
  imports: [CommonModule, SharedModule, CustomLayoutModule, HomeRoutingModule],
})
export class HomeModule {}
