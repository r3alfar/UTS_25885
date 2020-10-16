import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'add-barang',
    loadChildren: () => import('./add-barang/add-barang.module').then( m => m.AddBarangPageModule)
  },
  {
    path: ':barangId',
    loadChildren: () => import('./edit-barang/edit-barang.module').then( m => m.EditBarangPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
