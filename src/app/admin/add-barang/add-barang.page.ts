import { Component, OnInit } from '@angular/core';
import {BarangService} from '../../barang/barang.service';
import {Barang} from '../../barang/barang.model';
import {NgForm} from '@angular/forms';
import {Cpu} from '../../barang/cpu.model';
import {Gpu} from '../../barang/gpu.model';
import {Ram} from '../../barang/ram.model';
import {Motherboard} from '../../barang/motherboard.model';
import {LoadingController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-add-barang',
  templateUrl: './add-barang.page.html',
  styleUrls: ['./add-barang.page.scss'],
})
export class AddBarangPage implements OnInit {

  constructor(
      private barangService: BarangService,
      private loadingCtrl: LoadingController,
      private navCtrl: NavController
  ) { }

  ngOnInit(){

  }


  onSubmit(form: NgForm){
    const sImageUrl = form.value.imageUrl;
    const sType = form.value.type;
    const sBrandName = form.value.brandName;
    const sModelName = form.value.modelName;
    const sPrice = form.value.price;
    const sStock = form.value.stock.toString();

    if (sType === 'cpu'){
      const sId = 'c' + (this.barangService.getItemLength(sType) + 1);
      const sBaseClock = form.value.baseClock;
      const sBoostClock = form.value.boostClock;
      const sCoreCount = form.value.coreCount;
      const sThreadCount = form.value.threadCount;
      const cpu: Cpu = {
        id: sId,
        imageUrl: sImageUrl,
        type: sType,
        brandName: sBrandName,
        modelName: sModelName,
        price: sPrice,
        stock: sStock,
        baseClock: sBaseClock,
        boostClock: sBoostClock,
        coreCount: sCoreCount,
        threadCount: sThreadCount,
      };
      console.log(cpu);
      this.presentLoading().then(() => {
        this.barangService.addCpu(cpu);
        this.navCtrl.navigateBack('/admin');
      });
    }

    else if (sType === 'gpu'){
      const sId = 'g' + (this.barangService.getItemLength(sType) + 1);
      const sVram = form.value.vramSize;
      const gpu: Gpu = {
        id: sId,
        imageUrl: sImageUrl,
        type: sType,
        brandName: sBrandName,
        modelName: sModelName,
        price: sPrice,
        stock: sStock,
        vramSize: sVram
      };
      console.log(gpu);
      this.presentLoading().then(() => {
        this.barangService.addGpu(gpu);
        this.navCtrl.navigateBack('/admin');
      });
    }

    else if (sType === 'ram'){
      const sId = 'r' + (this.barangService.getItemLength(sType) + 1);
      const sSize = form.value.size;
      const sSpeedType = form.value.speedType;
      const ram: Ram = {
        id: sId,
        imageUrl: sImageUrl,
        type: sType,
        brandName: sBrandName,
        modelName: sModelName,
        price: sPrice,
        stock: sStock,
        size: sSize,
        speedType: sSpeedType
      };
      console.log(ram);
      this.presentLoading().then(() => {
        this.barangService.addRam(ram);
        this.navCtrl.navigateBack('/admin');
      });
    }
    else if (sType === 'mobo'){
      const sId = 'm' + (this.barangService.getItemLength(sType) + 1);
      const sSocket = form.value.socket;
      const sCpuCompatible = form.value.cpuCompatible;
      const mobo: Motherboard = {
        id: sId,
        imageUrl: sImageUrl,
        type: sType,
        brandName: sBrandName,
        modelName: sModelName,
        price: sPrice,
        stock: sStock,
        socket: sSocket,
        cpuCompatible: sCpuCompatible
      };
      console.log(mobo);
      this.presentLoading().then(() => {
        this.barangService.addMobo(mobo);
        this.navCtrl.navigateBack('/admin');
      });
    }
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Adding Item...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
