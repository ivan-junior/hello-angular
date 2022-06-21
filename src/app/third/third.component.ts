import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThirdService } from './third.service';

@Component({
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  cep: string = ''
  result: any = null
  private subscriptions: Subscription[] = []
  constructor(
    private thirdService: ThirdService
  ) { }



  ngOnInit(): void {
  }

  buscarCep() {
    this.subscriptions.push(this.thirdService.getCep(this.cep).subscribe(
      result => this.actionForSuccess(result)
    ))
  }

  actionForSuccess(response: any) {
    this.result = response
  }

}
