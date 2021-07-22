import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './../components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const ANGULAR_MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatSlideToggleModule,
  MatDialogModule
];

export const COMPONENTS = [
  NavbarComponent
]
@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ANGULAR_MATERIAL_MODULES,
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AuthService],
  exports: [...ANGULAR_MATERIAL_MODULES, ...COMPONENTS]
})
export class SharedModule { }
