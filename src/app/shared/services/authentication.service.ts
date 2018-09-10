import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
    headers: Headers;
    options: RequestOptions;
    // private apiUrl = 'http://localhost:64781/api/Values/Login?userName=7095448855&password=12345';
    private apiUrl = 'http://localhost:62258/api/Authentication/AuthenticateUser';
    constructor(private http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }
    login(param: any): Observable<any> {
        return this.http.post(this.apiUrl, JSON.stringify(param), {
            headers: this.headers,
        }).map((res: Response) => (
            res.json()
        )).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    logout() {
        localStorage.removeItem('isLoggedin');
    }
}