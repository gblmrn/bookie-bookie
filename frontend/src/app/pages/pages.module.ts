import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutes } from './pages.routes';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    PagesRoutes,
  ]
})
export class PagesModule { }
