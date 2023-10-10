import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit {

  constructor(public mdService: ModalService) { }

  ngOnInit(): void {
    this.mdService.register('auth');
    this.mdService.register('test');
  }

}
