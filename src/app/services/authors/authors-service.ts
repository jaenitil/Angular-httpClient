import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, Author } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private httpClient = inject(HttpClient);

  private apiUrl = 'https://frontend53.somee.com/api/authors';

  getAuthors() {
    return this.httpClient.get<ApiResponse<Author>>(this.apiUrl);
  }
}
