import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PVEStatus from '../core/interfaces/PVEStatus';

@Injectable({
  providedIn: 'root',
})

export class PVEDataFetcherService {
  constructor(private http: HttpClient) { }

  getStatus(url: string) {
    return this.http.get<PVEStatus>(url);
  }
}
