import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-pyplot-webgl';

  public graph = {
    data: [
        { x: [1, 2, 3], y: [2, 6, 3], type: 'scattergl', mode: 'lines+points', marker: {color: 'red'}, name: 'scattergl' },
        { x: [1, 2, 3], y: [4, 8, 6], type: 'scatter', mode: 'lines+points', marker: {color: 'blue'}, name: 'scatter' },
        { x: [1, 2, 3], y: [1, 2, 2.5], type: 'markers', name: 'markers' },
        { x: [1, 2, 3], y: [1.2, 1.5, 1.3], type: 'bar', name: 'bar' },
    ],
    layout: {width: 640, height: 480, title: 'A Fancy Plot'}
  };
}
