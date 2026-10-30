import { Routes } from '@angular/router';
import { FerraraComponent } from "./ferrara/ferrara.component";
import { JamieTurnerComponent } from "./jamie-turner/jamie-turner.component";
import { LatitudComponent } from "./latitud/latitud.component";
import { RolandComponent } from "./roland/roland.component";
import { JellyBellyComponent } from './jelly-belly/jelly-belly.component';
import { StashTeaComponent } from './stash-tea/stash-tea.component';
import { LandfrostComponent } from './landfrost/landfrost.component';


export const ProjectsRoutes: Routes = [
  { path: 'ferrara', component: FerraraComponent },
  { path: 'latitud', component: LatitudComponent },
  { path: 'roland', component: RolandComponent },
  { path: 'jamie-turner', component: JamieTurnerComponent },
  { path: 'jelly-belly', component: JellyBellyComponent },
  { path: 'stash-tea', component: StashTeaComponent },
  { path: 'landfrost', component: LandfrostComponent },
];
