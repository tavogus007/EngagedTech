import { Routes } from '@angular/router';
import { Vista1Component } from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';

export const routes: Routes = [
  { path: '', component: Vista1Component },
  { path: 'vista2', component: Vista2Component },
];
