import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBarangPageRoutingModule } from './add-barang-routing.module';

import { AddBarangPage } from './add-barang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBarangPageRoutingModule
  ],
  declarations: [AddBarangPage]
})
export class AddBarangPageModule {}
