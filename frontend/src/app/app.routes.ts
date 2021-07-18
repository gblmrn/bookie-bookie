import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'page',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
  },
  {
    path: '**',
    redirectTo: 'page/books'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
