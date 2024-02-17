import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';
import { CreationCompteComponent } from './pages/compte/creation-compte/creation-compte.component';
import { FormationDetailsComponent } from './pages/formations-page/formation-details/formation-details.component';
import { FormationsThemeComponent } from './pages/formations-page/formations-theme/formations-theme.component';
import { FormationsPageComponent } from './pages/formations-page/formations-page.component';
import { EvaluationFormationComponent } from './pages/evaluation-formation/evaluation-formation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SousthemesPageComponent } from './pages/sousthemes-page/sousthemes-page.component';
import { ConnexionPageComponent } from './pages/compte/connexion-page/connexion-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AdminGuard } from './guard/admin.guard';
import { AjouterUtilisateurComponent } from './pages/admin-page/ajouter-utilisateur/ajouter-utilisateur.component';
import { SupprimerUtilisateurComponent } from './pages/admin-page/supprimer-utilisateur/supprimer-utilisateur.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent },
    { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard]},
    { path: 'admin/ajouter-utilisateur', component: AjouterUtilisateurComponent, canActivate: [AdminGuard]},
    { path: 'admin/supprimer-utilisateur', component: SupprimerUtilisateurComponent, canActivate: [AdminGuard]},
    { path: 'identification', component: ConnexionPageComponent},
    { path: 'identification/creation-compte', component: CreationCompteComponent},
    { path: 'formations', component: FormationsPageComponent },
    { path: 'nous-contacter', component: ContactComponent},
    { path: 'formations/formation-theme', component: FormationsThemeComponent },
    {path: 'formations/sousthemes', component: SousthemesPageComponent},
    { path: 'formations/sousthemes/formation-details/:id', component: FormationDetailsComponent },
    { path: 'evaluation-formation', component: EvaluationFormationComponent },
    { path: '**', component: NotFoundComponent }
];