import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { CreationCompteComponent } from './pages/compte/creation-compte/creation-compte.component';
import { FormationDetailsComponent } from './pages/formations-page/formation-details/formation-details.component';
import { FormationsThemeComponent } from './pages/formations-page/formations-theme/formations-theme.component';
import { FormationsPageComponent } from './pages/formations-page/formations-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'creation-compte', component: CreationCompteComponent},
    { path: 'formations', component: FormationsPageComponent },
    { path: 'formations/formation-theme', component: FormationsThemeComponent },
    { path: 'formations/formation-theme/formation-details', component: FormationDetailsComponent },
    { path: '**', component: NotFoundComponent }
];