import { Component, OnInit } from '@angular/core';
import {BarangService} from '../barang/barang.service';
import {Barang} from '../barang/barang.model';
import {IonItemSliding, LoadingController, ModalController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  barang: Barang[];
  adminLoadBarang: Barang;
  private barangId: string;
  constructor(
      private barangService: BarangService,
      private router: Router,
      private loadingCtrl: LoadingController,
      private modalCtrl: ModalController,
      private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(){

  }

  ionViewWillEnter(){
    this.barang = this.barangService.getAllBarang();
  }

  deleteBarang(id: string){
    this.presentLoading().then(() => {
      this.barangService.deleteItem(id);
      this.barang = this.barangService.getAllBarang();
      console.log('delete success');
    });
  }

  async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Deleting Item...',
      duration: 2000
    });
    await loading.present();

    const {role, data} = await loading.onDidDismiss();
    console.log('Loading Data deleted');
  }

}
