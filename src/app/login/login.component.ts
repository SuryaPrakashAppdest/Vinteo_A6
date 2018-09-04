import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../shared/services/index';
import { allowPreviousPlayerStylesMerge } from '@angular/animations/browser/src/util';
import { AuthenticationModel } from '../shared/Models/authenticationModel';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    model: any = {};
    authenticationModel: AuthenticationModel
    returnUrl: string;

    constructor(public router: Router,
        public route: ActivatedRoute,
        public authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    onLoggedin() {
        this.authenticationModel = { username: this.model.username, password: this.model.password };
        this.authenticationService.login(this.authenticationModel)
            .subscribe(
                data => {
                    // login successful so redirect to return url
                    localStorage.setItem('isLoggedin', 'true');
                    this.returnUrl = '/dashboard';
                    if (!data["UserName"]) {
                        this.returnUrl = '/register';
                    }
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    alert("Error on Login")
                });
    }
}
