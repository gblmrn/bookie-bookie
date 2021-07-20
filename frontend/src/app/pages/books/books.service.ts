import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";

@Injectable({providedIn: 'root'})
export class BooksService {
    constructor(private http: HttpClient){}

    getBooks() {
        return this.http.get(`${environment.apiUrl}/books`);
    }

    getBookById(id: string) {
        return this.http.get(`${environment.apiUrl}/books/${id}`);
    }
}