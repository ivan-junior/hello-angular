import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { SecondComponent } from './second.component';
import { SecondRoutes } from './second.routing';



@NgModule({
  declarations: [
    SecondComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    SecondRoutes
  ],
  entryComponents: [
    ChildComponent
  ]
})
export class SecondModule { }
