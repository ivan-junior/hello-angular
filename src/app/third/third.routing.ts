import { Routes, RouterModule } from '@angular/router';
import { ThirdComponent } from './third.component';

const routes: Routes = [
  {
    path: 'third',
    component: ThirdComponent
  },
];

export const ThirdRoutes = RouterModule.forChild(routes);
