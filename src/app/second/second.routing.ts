import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second.component';

const routes: Routes = [
  { path: 'second', component: SecondComponent },
];

export const SecondRoutes = RouterModule.forChild(routes);
