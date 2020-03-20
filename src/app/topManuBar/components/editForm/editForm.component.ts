import { Component, OnInit } from '@angular/core';
import {GrouplistComponent, groupViewModel} from '../grouplist/grouplist.Component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { defaultCipherList } from 'constants';

export interface groupModel {
  id: string;
  name: string;
  format: string;
  key: string;
  code: string;
  groupId: string;
  groupKey: string;
  groupName: string;
}
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-editForm',
  templateUrl: './editForm.component.html',
  styleUrls: ['./editForm.component.css']
})

// tslint:disable-next-line: class-name

export class EditFormComponent implements OnInit {
  readonly BaseUrl = 'http://localhost:49946/api/';
  countries = ['USA', 'Canada', 'Uk'];

  public groupDatasource: groupModel[] = [];
  public distinctGroupData: groupModel[] = [];
  constructor(private http: HttpClient ) {}
  public getGroupView(): Observable<groupModel[]> {
    return this.http.get<groupModel[]>(this.BaseUrl + 'listview' + '/1500');
   }
  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    this.getGroupView().subscribe(data => this.groupDatasource = data.filter((element, i, arr) => arr.findIndex(t => t.id == element.id) === i));
    // this.distinctGroupData.push(this.groupDatasource[0]);
    // tslint:disable-next-line: no-shadowed-variable
    // console.log(this.groupDatasource.length);
    // this.distinctGroupData = this.groupDatasource.filter((element, i, arr) => arr.findIndex(t => t.id == element.id) === i);
    // console.log(this.distinctGroupData.length);
  }

}
