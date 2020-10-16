import {Barang} from './barang.model';

export interface Cpu extends Barang{
    baseClock: string;
    boostClock: string;
    coreCount: string;
    threadCount: string;
}
