import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { SecondComponent } from './second.component';

const routes: Routes = [
  { 
    path: 'second', 
    component: SecondComponent,
    title: 'Second'
  },
  {
    path: 'second/child',
    component: ChildComponent,
    title: 'Child'
  }
];

export const SecondRoutes = RouterModule.forRoot(routes);
