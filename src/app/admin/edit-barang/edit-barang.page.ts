import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoadingController, ModalController, NavController} from '@ionic/angular';
import {BarangService} from '../../barang/barang.service';
import {Barang} from '../../barang/barang.model';
import {ActivatedRoute} from '@angular/router';
import {Cpu} from '../../barang/cpu.model';
import {Gpu} from '../../barang/gpu.model';
import {Ram} from '../../barang/ram.model';
import {Motherboard} from '../../barang/motherboard.model';


@Component({
  selector: 'app-edit-barang',
  templateUrl: './edit-barang.page.html',
  styleUrls: ['./edit-barang.page.scss'],
})
export class EditBarangPage implements OnInit {
  form: FormGroup;
  loadEditBarang: Barang;
  barangId: string;

  loadEditCpu: Cpu;
  loadEditGpu: Gpu;
  loadEditRam: Ram;
  loadEditMobo: Motherboard;
  constructor(
      private modalCtrl: ModalController,
      private barangService: BarangService,
      private activatedRoute: ActivatedRoute,
      private loadingCtrl: LoadingController,
      private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('barangId')) {return; }
      this.barangId = paramMap.get('barangId');
      this.loadEditBarang = this.barangService.getItem(this.barangId);
      switch (this.loadEditBarang.type) {
        case 'cpu': this.loadEditCpu = this.barangService.getCpu(this.barangId);
                    break;
        case 'gpu': this.loadEditGpu = this.barangService.getGpu(this.barangId);
                    break;
        case 'ram' : this.loadEditRam = this.barangService.getRam(this.barangId);
                     break;
        case 'motherboard': this.loadEditMobo = this.barangService.getMobo(this.barangId);
                            break;
      }
    });

    if (this.loadEditBarang.type === 'cpu'){
      this.form = new FormGroup({
        fImageUrl: new FormControl(this.loadEditCpu.imageUrl, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fBrandName: new FormControl(this.loadEditCpu.brandName, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fModelName: new FormControl(this.loadEditCpu.modelName, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fPrice: new FormControl(this.loadEditCpu.price, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fStock: new FormControl(this.loadEditCpu.stock, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fBaseClock: new FormControl(this.loadEditCpu.baseClock, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fBoostClock: new FormControl(this.loadEditCpu.boostClock, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fCoreCount: new FormControl(this.loadEditCpu.coreCount, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fThreadCount: new FormControl(this.loadEditCpu.threadCount, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
      });
    }

    else if (this.loadEditBarang.type === 'gpu'){
      this.form = new FormGroup({
        fImageUrl: new FormControl(this.loadEditGpu.imageUrl, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fBrandName: new FormControl(this.loadEditGpu.brandName, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fModelName: new FormControl(this.loadEditGpu.modelName, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fPrice: new FormControl(this.loadEditGpu.price, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fStock: new FormControl(this.loadEditGpu.stock, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fVram: new FormControl(this.loadEditGpu.vramSize, {
          updateOn: 'blur',
          validators: [Validators.required]
        })
      });
    }

    else if (this.loadEditBarang.type === 'ram'){
      this.form = new FormGroup({
        fImageUrl: new FormControl(this.loadEditRam.imageUrl, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fBrandName: new FormControl(this.loadEditRam.brandName, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fModelName: new FormControl(this.loadEditRam.modelName, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fPrice: new FormControl(this.loadEditRam.price, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fStock: new FormControl(this.loadEditRam.stock, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fSize: new FormControl(this.loadEditRam.size, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fSpeedType: new FormControl(this.loadEditRam.speedType, {
          updateOn: 'blur',
          validators: [Validators.required]
        })
      });
    }

    else if (this.loadEditBarang.type === 'motherboard'){
      this.form = new FormGroup({
        fImageUrl: new FormControl(this.loadEditMobo.imageUrl, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fBrandName: new FormControl(this.loadEditMobo.brandName, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fModelName: new FormControl(this.loadEditMobo.modelName, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fPrice: new FormControl(this.loadEditMobo.price, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fStock: new FormControl(this.loadEditMobo.stock, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fSocket: new FormControl(this.loadEditMobo.socket, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        fCpuCompatible: new FormControl(this.loadEditMobo.cpuCompatible, {
          updateOn: 'blur',
          validators: [Validators.required]
        })
      });
    }

  }




  onSubmit(){
    const sId = this.loadEditBarang.id;
    const sImageUrl = this.form.get('fImageUrl').value;
    const sBrandName = this.form.get('fBrandName').value;
    const sModelName = this.form.get('fModelName').value;
    const sPrice = this.form.get('fPrice').value;
    const sStock = this.form.get('fStock').value.toString();

    if (this.loadEditBarang.type === 'cpu'){
      const sBaseClock = this.form.get('fBaseClock').value;
      const sBoostClock = this.form.get('fBoostClock').value;
      const sCoreCount = this.form.get('fCoreCount').value.toString();
      const sThreadCount = this.form.get('fThreadCount').value.toString();

      this.presentLoading().then(() => {
        this.barangService.editCpu(
            sId, sImageUrl, sBrandName, sModelName, sPrice, sStock
            , sBaseClock, sBoostClock, sCoreCount, sThreadCount
        );
        this.navCtrl.navigateBack('/admin');
      });
    }

    else if (this.loadEditBarang.type === 'gpu'){
      const sVramSize = this.form.get('fVram').value;

      this.presentLoading().then(() => {
        this.barangService.editGpu(
            sId, sImageUrl, sBrandName, sModelName, sPrice, sStock,
            sVramSize
        );
        this.navCtrl.navigateBack('/admin');
      });
    }

    else if (this.loadEditBarang.type === 'ram'){
      const sSize = this.form.get('fSize').value;
      const sSpeedType = this.form.get('fSpeedType').value;

      this.presentLoading().then(() => {
        this.barangService.editRam(
            sId, sImageUrl, sBrandName, sModelName, sPrice, sStock,
            sSize, sSpeedType
        );
        this.navCtrl.navigateBack('/admin');
      });
    }

    else if (this.loadEditBarang.type === 'motherboard'){
      const sSocket = this.form.get('fSocket').value;
      const sCpuCompatible = this.form.get('fCpuCompatible').value;

      this.presentLoading().then(() => {
        this.barangService.editMobo(
            sId, sImageUrl, sBrandName, sModelName, sPrice, sStock,
            sSocket, sCpuCompatible
        );
        this.navCtrl.navigateBack('/admin');
      });
    }


  }


  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Editing contact...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
}
