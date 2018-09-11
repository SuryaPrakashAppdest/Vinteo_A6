import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class AdminReportService {
    options: RequestOptions;
    private apiUrl = 'http://localhost:62258/api/Vinteo/RedeemLog';
    private videoContentUrl = 'http://localhost:62258/api/Vinteo/VideoContent?catagoryId=1';
    private userId = 1;
    constructor(private http: Http) {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        headers.append('Access-Control-Allow-Headers', 'Content-Type,Authorization');
        this.options = new RequestOptions({ headers: headers });
    }
    getRedeemLog(): Observable<any> {
        // return this.http.get(this.apiUrl).map((res: Response) => (
        //     res.json()
        // )).catch((error: any) => Observable.throw(error.json().error || 'Server error'));

        return this.http
            .get(this.apiUrl, this.options)
            .map((res: Response) => (
                res.json() 
            ))
            .catch ((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    getVideoContentList(): Observable<any> {

        return this.http
            .post(this.videoContentUrl, this.options)
            .map((res: Response) => (
                res.json()
            ))
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}

