import {Component, OnInit} from '@angular/core';
import {BarangService} from '../barang/barang.service';
import {Barang} from '../barang/barang.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  barang: Barang[];
  displayMode: number;
  constructor(
      private barangService: BarangService
  ) {}

  ngOnInit() {
      this.displayMode = 1;
  }

  ionViewWillEnter(){
    this.barang = this.barangService.getAllBarang();
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
    console.log(this.displayMode);
  }

}
