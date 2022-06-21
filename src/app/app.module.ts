import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HelloRoutes } from './hello/hello.routing';
import { SecondComponent } from './second/second.component';
import { SecondRoutes } from './second/second.routing';

@NgModule({
  declarations: [		
    AppComponent, 
    HelloComponent, 
    SecondComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloRoutes,
    SecondRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
