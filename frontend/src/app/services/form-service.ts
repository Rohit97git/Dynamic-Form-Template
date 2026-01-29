import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormModel } from '../models/field-config.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private configUrl = 'http://localhost:3000/fields';
  private submitUrl = 'http://localhost:3000/feedback';

  constructor(private http: HttpClient) {}

  getFormFields(): Observable<FormModel[]> {
    return this.http.get<FormModel[]>(this.configUrl);
  }

  submitFormFields(data: any): Observable<any> {
    return this.http.post(this.submitUrl, data);
  }
}
