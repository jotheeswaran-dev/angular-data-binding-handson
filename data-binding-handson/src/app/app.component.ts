import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    username = '';
    disableUser = false;

    constructor() {
        this.disableUsername();
    }

    addUser(event : Event) {
        this.username = (<HTMLInputElement>event.target).value;
            //if (this.username.length >= 1) {
            //this.disableUser = true;
        //}
    }

    disableUsername() {
        if (this.username) {
            this.disableUser = false;
        }
        else {
            this.disableUser = true;
        }
    }

    resetUsername() {
        this.username = '';
    }
}
