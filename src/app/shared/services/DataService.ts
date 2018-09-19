import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {
    private userIdSource = new BehaviorSubject<number>(0);
    currentUser = this.userIdSource.asObservable();

    private catIdSource = new BehaviorSubject<number>(0);
    currentCatId = this.catIdSource.asObservable();

    constructor() { }
    // Set login user here
    setUser(userid: number) {
        this.userIdSource.next(userid)
    }
    // Set catagory Id from sidebar click
    setCatId(catagoryId: number) {
        this.catIdSource.next(catagoryId)
    }
}