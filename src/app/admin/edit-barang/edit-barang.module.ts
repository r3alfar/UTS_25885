import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditBarangPageRoutingModule } from './edit-barang-routing.module';

import { EditBarangPage } from './edit-barang.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    EditBarangPageRoutingModule
  ],
  declarations: [EditBarangPage]
})
export class EditBarangPageModule {}
