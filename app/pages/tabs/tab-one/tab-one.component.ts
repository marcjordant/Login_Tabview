import { Component } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    selector: 'tab-one',
    templateUrl: './pages/tabs/tab-one/tab-one.html'
})
export class TabOneComponent {

    constructor(private router: RouterExtensions) {

    }

    goToSubTab() {
        this.router.navigate(['/tabs', {
            outlets: {
                firstTab: ['sub-tab']
            }
        }], {
                clearHistory: false,
                animated: true
            });
    }
}
