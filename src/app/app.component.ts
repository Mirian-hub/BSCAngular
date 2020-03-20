import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OperationsService} from './operations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  operationNames: any = [];
  operationValues: any = [];
  operationValuesFormated : any [];
  counter = [0,1,2,3,4,5,6,7,8];
  dataSOurce: any;
  constructor(private http: HttpClient, public _servise: OperationsService) {}
  getSource() {
    this.operationNames = this._servise.getSourceDate('name');
    this.operationValues = this._servise.getSourceDate('value');
  }
}
