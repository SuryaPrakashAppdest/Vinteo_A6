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
    private apiUrl = 'http://localhost:64781/api/Values/';
    constructor(private http: Http) {
        this.headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }
    // login() {
    //     return this.http.get(this.commentsUrl)
    //         // ...now we return data
    //         .map(res => res)
    //         // ...errors if any
    //         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    // }
    login(param: any): Observable<any> {
        this.apiUrl = this.apiUrl + 'Login';
        let params: URLSearchParams = new URLSearchParams();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                let val = param[key];
                params.set(key, val);
            }
        }
        this.options = new RequestOptions({ headers: this.headers, search: params });
       
        return this.http
            .get(this.apiUrl, this.options)
            .map(res => res)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    logout() {
        localStorage.removeItem('isLoggedin');
    }
}