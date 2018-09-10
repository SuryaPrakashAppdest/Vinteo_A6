import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../shared/services/index';
import { allowPreviousPlayerStylesMerge } from '@angular/animations/browser/src/util';
import { RegisterModel } from '../shared/Models/registerModel';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    model: any = {};
    registerModel: RegisterModel
    returnUrl: string;
    constructor(public router: Router,
        public route: ActivatedRoute,
        public authenticationService: AuthenticationService
    ) { }

    ngOnInit() { }
    onRegister() {
        alert(this.model.username)
    }
}
