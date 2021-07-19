import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'books',
                loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/auth/login'
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutes { }
