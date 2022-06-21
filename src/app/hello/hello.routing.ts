import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent
  },
];

export const HelloRoutes = RouterModule.forChild(routes);
