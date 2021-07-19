import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

export interface LoginUserDto {
    username: string;
    password: string;
}

export interface RegisterUserDto {
    fullName: string;
    username: string;
    password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) { }

    login(payload: LoginUserDto) {
        return this.http.post(`${environment.apiUrl}/auth/login`, payload);
    }

    register(payload: RegisterUserDto) {
        return this.http.post(`${environment.apiUrl}/auth/register`, payload);

    }

}