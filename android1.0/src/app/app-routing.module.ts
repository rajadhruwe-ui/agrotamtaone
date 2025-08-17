import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddFieldComponent } from './components/add-field/add-field.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'logfire',
    loadChildren: () => import('./logfire/logfire.module').then( m => m.LogfirePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },  
  {
    path: 'registration',
    loadChildren: () => import('./frontend/pages/registrationpage/registrationpage.module').then( m => m.RegistrationpagePageModule)
  }, 
  {
    path: 'header',
    component:HeaderComponent
  },
  {
    path: 'farm-registration',
    loadChildren: () => import('./pages/farm-registration/farm-registration.module').then( m => m.FarmRegistrationPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
