import { Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main-dashboard',
        pathMatch: 'full'
    },
    {
        path: 'main-dashboard',
        loadComponent: () => import('./components/main-dashboard/main-dashboard.component').then(m => m.MainDashboardComponent)
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        children: [
            {
                path: 'register-form',
                loadComponent: () => import('./components/register/register.component').then(m => m.RegisterComponent)
            }
        ]
    }
];
