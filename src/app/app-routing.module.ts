import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { AboutComponent } from './website/about/about.component';

export const routes: Routes = [
  /* {path: '', component: HomeComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'} */
]

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top', // Esto asegura que el scroll vaya siempre al inicio
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
})

export class AppRoutingModule { }
