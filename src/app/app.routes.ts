import { AboutComponent } from './components/about/about.component';
import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    // {
    //     path: '#about',
    //     component: AboutComponent,
    // },
    // {
    //     path: '#experience',
    //     component: ExperienceComponent,
    // },
    // {
    //     path: '**',
    //     redirectTo: '#',
    // },
];
