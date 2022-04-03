import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusRoutingModule } from './aboutus-routing.module';
import { AboutUsHomeComponent } from './about-us-home/about-us-home.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AboutUsHomeComponent],
  imports: [
    CommonModule,
    AboutusRoutingModule,
    MatIconModule,
    MatButtonModule
]
})
export class AboutusModule { }
