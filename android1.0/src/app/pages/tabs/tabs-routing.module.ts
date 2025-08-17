import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      },  
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'card',
        loadChildren: () => import('./card/card.module').then( m => m.CardPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'transactions',
        loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
      },
      {
        path: 'youtubes',
        loadChildren: () => import('./youtubes/youtubes.module').then( m => m.YoutubesPageModule)
      },

      {
        path: 'registration',
        loadChildren: () => import('./pages/registrationpage/registrationpage.module').then( m => m.RegistrationpagePageModule)
      },
      {
        path: 'land',
        loadChildren: () => import('./pages/land/land.module').then( m => m.LandPageModule)
      },
    
    ],
  },
  {
    path: 'land',
    loadChildren: () => import('./pages/land/land.module').then( m => m.LandPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}