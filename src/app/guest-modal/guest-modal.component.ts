import { Component, OnInit } from '@angular/core';
import {Guest} from '../guest';

@Component({
  selector: 'app-guest-modal',
  templateUrl: './guest-modal.component.html',
  styleUrls: ['./guest-modal.component.scss']
})
export class GuestModalComponent implements OnInit {
  selectedGuest:Guest;

  constructor() { }

  ngOnInit(): void {
  }
}
