import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBarangPage } from './edit-barang.page';

const routes: Routes = [
  {
    path: '',
    component: EditBarangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditBarangPageRoutingModule {}
