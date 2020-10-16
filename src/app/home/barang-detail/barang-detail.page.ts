import { Component, OnInit } from '@angular/core';
import {Barang} from '../../barang/barang.model';
import {ActivatedRoute} from '@angular/router';
import {BarangService} from '../../barang/barang.service';
import {Cpu} from '../../barang/cpu.model';
import {Gpu} from '../../barang/gpu.model';
import {Ram} from '../../barang/ram.model';
import {Motherboard} from '../../barang/motherboard.model';

@Component({
  selector: 'app-barang-detail',
  templateUrl: './barang-detail.page.html',
  styleUrls: ['./barang-detail.page.scss'],
})
export class BarangDetailPage implements OnInit {
  loadedBarang: Barang;
  loadCpuDetail: Cpu;
  loadGpuDetail: Gpu;
  loadRamDetail: Ram;
  loadMoboDetail: Motherboard;
  private barangId: string;
  constructor(
      private activatedRoute: ActivatedRoute,
      private barangService: BarangService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('barangId')) {return; }
      this.barangId = paramMap.get('barangId');
      this.loadedBarang = this.barangService.getItem(this.barangId);
      if (this.loadedBarang.type === 'cpu'){
        this.loadCpuDetail = this.barangService.getCpu(this.barangId);
      }
      else if (this.loadedBarang.type === 'gpu'){
        this.loadGpuDetail = this.barangService.getGpu(this.barangId);
      }
      else if (this.loadedBarang.type === 'ram'){
        this.loadRamDetail = this.barangService.getRam(this.barangId);
      }
      else if (this.loadedBarang.type === 'motherboard'){
        this.loadMoboDetail = this.barangService.getMobo(this.barangId);
      }

    });
  }

}
