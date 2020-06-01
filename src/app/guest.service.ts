import { Injectable } from '@angular/core';
import {Guest} from './guest';

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  guestlist:Guest[]=[];

  addGuest(name:string):void{
    this.guestlist.push({name});
    console.log(this.guestlist);
  }

  constructor() { }
}
