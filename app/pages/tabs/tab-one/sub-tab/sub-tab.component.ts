import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'sub-tab',
    templateUrl: './pages/tabs/tab-one/sub-tab/sub-tab.html'
})
export class SubTabComponent {

    constructor(private router: RouterExtensions) {

    }

    showLogin() {
        this.router.navigate(['login'], {
            clearHistory: true,
            animated: false
        });
    }
}