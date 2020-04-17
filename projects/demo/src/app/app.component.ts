import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    x1 = 20;
    y1 = 20;
    w1 = 100;
    h1 = 50;
    c1 = '#ff0000';

    x2 = 50;
    y2 = 50;
    w2 = 100;
    h2 = 50;
    c2 = '#00ff00';
}
