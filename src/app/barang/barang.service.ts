import { Injectable } from '@angular/core';
import {Cpu} from './cpu.model';
import {Gpu} from './gpu.model';
import {Ram} from './ram.model';
import {Motherboard} from './motherboard.model';


@Injectable({
  providedIn: 'root'
})
export class BarangService {

  private cpus: Cpu[] = [
    {
      id: 'c1',
      type: 'cpu',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61THc9DLMCL._AC_SL1500_.jpg',
      brandName: 'AMD',
      modelName: 'Athlon 200ge',
      price: '700.000',
      stock: '5',
      baseClock: '3.2 Ghz',
      boostClock: '4.05 Ghz',
      coreCount: '2',
      threadCount: '4'
    },
    {
      id: 'c2',
      type: 'cpu',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/1/7134931/7134931_db639a48-e186-4e0c-9f3e-67b8065dff5b_700_700.jpg',
      brandName: 'Intel',
      modelName: 'Pentium G4560',
      price: '1.000.000',
      stock: '2',
      baseClock: '3.5 Ghz',
      boostClock: '4.05 Ghz',
      coreCount: '2',
      threadCount: '4'
    }
  ];

  private gpus: Gpu[] = [
    {
      id: 'g1',
      type: 'gpu',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/2/12/9414287/9414287_da703070-d85b-457c-a9fc-3d0407dc3847_700_700.jpg',
      brandName: 'Sapphire Pulse',
      modelName: 'Radeon RX560X',
      price: '1.700.000',
      stock: '4',
      vramSize: '2 GB GDDR5'
    },
    {
      id: 'g2',
      type: 'gpu',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/5/4/200609877/200609877_1e041b13-b7e6-4259-972b-e657062166eb_480_480.jpg',
      brandName: 'MSI',
      modelName: 'GeForce 1050Ti',
      price: '1.700.000',
      stock: '3',
      vramSize: '4 GB GDDR5'
    }
  ];

  private rams: Ram[] = [
    {
      id: 'r1',
      type: 'ram',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2016/11/16/63458436/63458436_06787bd2-5878-4553-95c6-0c999e01364a.png',
      brandName: 'Team Elite Plus',
      modelName: 'Team Elite Plus 4GB PC RAM',
      price: '325.000',
      stock: '1',
      size: '4 GB DDR4',
      speedType: '2666Mhz'
    },
    {
      id: 'r2',
      type: 'ram',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/1/5/122143688/122143688_4310781d-9c33-429d-a296-1d93cd1ff04f_448_336.jpg',
      brandName: 'Corsair',
      modelName: 'Corsair 8GB Macbook RAM',
      price: '725.000',
      stock: '3',
      size: '8 GB DDR3',
      speedType: '1600Mhz'
    }
  ];

  private mobos: Motherboard[] = [
    {
      id: 'm1',
      type: 'motherboard',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2017/5/13/13757756/13757756_7c7f055c-ae4a-490f-a789-be7ff4657d9d_700_700.jpg',
      brandName: 'Asus',
      modelName: 'Asus Prime A320M-K',
      price: '830.000',
      stock: '2',
     socket: 'AM4',
      cpuCompatible: 'AMD',
    },
    {
      id: 'm2',
      type: 'motherboard',
      imageUrl: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/7/10/5373285/5373285_a1a397d3-7cea-4ca3-aad8-6dd0dfb26ad9_800_800',
      brandName: 'ASRock',
      modelName: 'ASRock B460M PRO4',
      price: '1.500.000',
      stock: '2',
      socket: '1200',
      cpuCompatible: 'Intel',
    }
  ];

  constructor() { }

  getAllBarang(){
    return[...this.cpus, ...this.gpus, ...this.rams, ...this.mobos];
  }

  // get all by category
  getAllCpus(){
    return [...this.cpus];
  }
  getAllGpus(){
    return [...this.gpus];
  }
  getAllRams(){
    return [...this.rams];
  }
  getAllMobo(){
    return [...this.mobos];
  }

  // get single item
  getCpu(id: string){
    return{
      ...this.cpus.find(cpu => {
        return cpu.id === id;
      })
    };
  }
  getGpu(id: string){
    return{
      ...this.gpus.find(gpu => {
        return gpu.id === id;
      })
    };
  }
  getRam(id: string){
    return{
      ...this.rams.find(ram => {
        return ram.id === id;
      })
    };
  }
  getMobo(id: string){
    return{
      ...this.mobos.find(mobo => {
        return mobo.id === id;
      })
    };
  }

  // delete per category
  deleteCpu(id: string){
    this.cpus = this.cpus.filter(cpu => {
      return cpu.id !== id;
    });
  }
  deleteGpu(id: string){
    this.gpus = this.gpus.filter(gpu => {
      return gpu.id !== id;
    });
  }
  deleteRam(id: string){
    this.rams = this.rams.filter(ram => {
      return ram.id !== id;
    });
  }
  deleteMobo(id: string){
    this.mobos = this.mobos.filter(mobo => {
      return mobo.id !== id;
    });
  }

  getItemLength(type: string){
    switch (type) {
      case 'cpu': return this.cpus.length;
      case 'gpu' : return this.gpus.length;
      case 'ram' : return  this.rams.length;
      case 'mobo' : return this.mobos.length;
    }
  }

  // Get detail item
  getItem(id: string){
    const type = id.substr(0, 1);
    switch (type) {
      case 'c' : return this.getCpu(id);
      case 'g' : return this.getGpu(id);
      case 'r' : return this.getRam(id);
      case 'm': return this.getMobo(id);
    }
  }

  // delete item
  deleteItem(id: string){
    const type = id.substr(0, 1);
    switch (type) {
      case 'c' : this.cpus = this.cpus.filter(cpu => {
        return cpu.id !== id;
      });        break;
      case 'g' : this.gpus = this.gpus.filter(gpu => {
        return gpu.id !== id;
      });        break;
      case 'r' : this.rams = this.rams.filter(ram => {
        return ram.id !== id;
      });        break;
      case 'm': this.mobos = this.mobos.filter(mobo => {
        return mobo.id !== id;
      });
    }
  }


  // edit per category
  editCpu(
      id: string, eImageUrl: string , eBrandName: string, eModelName: string, ePrice: string, eStock: string,
      eBaseClock: string, eBoostClock: string, eCoreCount: string, eThreadCount: string){
    const loadEditedCpu = this.getCpu(id);
    const index = this.cpus.findIndex(cpu => cpu.id === id);
    loadEditedCpu.imageUrl = eImageUrl;
    loadEditedCpu.brandName = eBrandName;
    loadEditedCpu.modelName = eModelName;
    loadEditedCpu.price = ePrice;
    loadEditedCpu.stock = eStock;
    loadEditedCpu.baseClock = eBaseClock;
    loadEditedCpu.boostClock = eBoostClock;
    loadEditedCpu.coreCount = eCoreCount;
    loadEditedCpu.threadCount = eThreadCount;
    this.cpus[index] = loadEditedCpu;
  }

  editGpu(
      id: string, eImageUrl: string , eBrandName: string, eModelName: string, ePrice: string, eStock: string,
      eVramSize: string
  ){
    const loadEditedGpu = this.getGpu(id);
    const eIndex = this.gpus.findIndex(gpu => gpu.id === id);
    loadEditedGpu.imageUrl = eImageUrl;
    loadEditedGpu.brandName = eBrandName;
    loadEditedGpu.modelName = eModelName;
    loadEditedGpu.price = ePrice;
    loadEditedGpu.stock = eStock;
    loadEditedGpu.vramSize = eVramSize;
    this.gpus[eIndex] = loadEditedGpu;
  }

  editRam(
      id: string, eImageUrl: string , eBrandName: string, eModelName: string, ePrice: string, eStock: string,
      eSize: string, eSpeedType: string
  ){
    const loadEditedRam = this.getRam(id);
    const index = this.rams.findIndex(ram => ram.id === id);
    loadEditedRam.imageUrl = eImageUrl;
    loadEditedRam.brandName = eBrandName;
    loadEditedRam.modelName = eModelName;
    loadEditedRam.price = ePrice;
    loadEditedRam.stock = eStock;
    loadEditedRam.size = eSize;
    loadEditedRam.speedType = eSpeedType;
    this.rams[index] = loadEditedRam;
  }

  editMobo(
      id: string, eImageUrl: string , eBrandName: string, eModelName: string, ePrice: string, eStock: string,
      eSocket: string, eCpuCompatible: string
  ){
    const loadEditedMobo = this.getMobo(id);
    const index = this.mobos.findIndex(mobo => mobo.id === id);
    loadEditedMobo.imageUrl = eImageUrl;
    loadEditedMobo.brandName = eBrandName;
    loadEditedMobo.modelName = eModelName;
    loadEditedMobo.price = ePrice;
    loadEditedMobo.stock = eStock;
    loadEditedMobo.socket = eSocket;
    loadEditedMobo.cpuCompatible = eCpuCompatible;
    this.mobos[index] = loadEditedMobo;
  }

  // Add per category
  addCpu(cpu: Cpu){
    this.cpus.push(cpu);
  }

  addGpu(gpu: Gpu){
    this.gpus.push(gpu);
  }

  addRam(ram: Ram){
    this.rams.push(ram);
  }

  addMobo(mobo: Motherboard){
    this.mobos.push(mobo);
  }


}
