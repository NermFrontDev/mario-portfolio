import { Routes } from '@angular/router';
import { FerraraComponent } from "./ferrara/ferrara.component";
import { JamieTurnerComponent } from "./jamie-turner/jamie-turner.component";
import { LatitudComponent } from "./latitud/latitud.component";
import { RolandComponent } from "./roland/roland.component";


export const ProjectsRoutes: Routes = [
  { path: 'ferrara', component: FerraraComponent },
  { path: 'latitud', component: LatitudComponent },
  { path: 'roland', component: RolandComponent },
  { path: 'jamie-turner', component: JamieTurnerComponent },
];
