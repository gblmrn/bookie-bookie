import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { NgModule } from '@angular/core';

export const AngularMaterialModules = [
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule
];

@NgModule({
  declarations: [],
  imports: [
    AngularMaterialModules,
    CommonModule,
    HttpClientModule
  ],
  providers: [AuthService],
  exports: [AngularMaterialModules]
})
export class SharedModule { }
