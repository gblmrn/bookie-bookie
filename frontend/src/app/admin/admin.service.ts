import { BookPeGenunchi } from './../shared/models/book-pe-genunchi';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root'})
export class AdminService {
    constructor(private http: HttpClient){}

    public getBooks(): Observable<BookPeGenunchi[]> {
        return this.http.get<BookPeGenunchi[]>(`${environment.apiUrl}/books`);
    }
}

