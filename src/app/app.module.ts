import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HelloRoutes } from './hello/hello.routing';
import { SecondComponent } from './second/second.component';
import { SecondRoutes } from './second/second.routing';
import { ChildComponent } from './second/child/child.component';
import { ThirdComponent } from './third/third.component';
import { ThirdRoutes } from './third/third.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [		
    AppComponent, 
    HelloComponent, 
    SecondComponent, 
    ChildComponent, 
    ThirdComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HelloRoutes,
    SecondRoutes,
    ThirdRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
