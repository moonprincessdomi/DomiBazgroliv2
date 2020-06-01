import { Component, OnInit } from '@angular/core';
import {Guest} from '../guest';
import {GuestService} from '../guest.service';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.scss']
})
export class GuestlistComponent implements OnInit {

  guestlist=this.GuestService.guestlist;

  selectedGuest: Guest;
  name:string = '';

  addGuest(name:string):void{
    this.GuestService.addGuest(name);
    this.name ='';
    this.selectedGuest = null;
  }
  constructor(private GuestService:GuestService) { }

  ngOnInit(): void {
  }

  onSelect(sguest: Guest): void {
    this.selectedGuest = sguest;
  }

  // openModal(name:string){
  //   this.
  // }
}
