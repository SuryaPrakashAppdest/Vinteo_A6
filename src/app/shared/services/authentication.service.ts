import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
    private commentsUrl = 'http://localhost:64781/api/Values/Login?userName=7095448855&password=12345';
    constructor(private http: HttpClient) { }
    login() {
        return this.http.get(this.commentsUrl)
            // ...now we return data
            .map(res => res)
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    logout() {
        localStorage.removeItem('isLoggedin');
    }
}