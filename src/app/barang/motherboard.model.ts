import {Barang} from './barang.model';

export interface Motherboard extends Barang{
    socket: string;
    cpuCompatible: string;
}
