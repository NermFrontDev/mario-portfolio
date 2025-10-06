import { Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./website/home/home.component').then(
        (c) => c.HomeComponent
    ),
  },
  {
    path: 'work',
    loadComponent: () =>
      import('./website/work/work.component').then(
        (c) => c.WorkComponent
    ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./website/about/about.component').then(
        (c) => c.AboutComponent
    ),
  },
  {
    path: 'projects/ferrara',
    loadComponent: () =>
      import('./website/projects/ferrara/ferrara.component').then(
        (c) => c.FerraraComponent
    ),
  },
  {
    path: 'projects/latitude',
    loadComponent: () =>
      import('./website/projects/latitud/latitud.component').then(
        (c) => c.LatitudComponent
    ),
  },
  {
    path: 'projects/roland',
    loadComponent: () =>
      import('./website/projects/roland/roland.component').then(
        (c) => c.RolandComponent
    ),
  },
  {
    path: 'projects/jamie-turner',
    loadComponent: () =>
      import('./website/projects/jamie-turner/jamie-turner.component').then(
        (c) => c.JamieTurnerComponent
    ),
  },
  /* {
    path: '**',
    loadComponent: () =>
      import('./website/home/home.component').then(
        (c) => c.HomeComponent
    ),
  }, */
  /* { path: '**', redirectTo: 'home', pathMatch: 'full' }, */
];
