import { Component, OnInit, ViewChild, SystemJsNgModuleLoader, EventEmitter, Output } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { IgxGridComponent, IgxStringFilteringOperand, FilteringExpressionsTree, FilteringLogic } from 'igniteui-angular';
import { HtmlAstPath } from '@angular/compiler';
// tslint:disable-next-line: import-spacing
import { filter, map } from 'rxjs/operators';
import { IgxFilteringService } from 'igniteui-angular/lib/grids/filtering/grid-filtering.service';
// import { UserService } from '..../shared/user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopManuBarComponent } from '../../topManuBar.component';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';
declare const myFunc: any;
/** Constants used to fill up our data base. */

// tslint:disable-next-line: class-name
export interface listViewModel {
  id: string;
  name: string;
  format: string;
  key: string;
  code: string;
  groupId: string;
  groupKey: string;
  groupName: string;
}
export interface groupViewModel {
  groupId: string;
  groupKey: string;
  groupName: string;
}
@Component({
  selector: 'app-grouplist',
  templateUrl: './grouplist.component.html',
  styleUrls: ['./grouplist.component.css']
})
export class GrouplistComponent implements OnInit {
  @ViewChild('grid1', { read: IgxGridComponent, static: true })
  @Output() myEvent = new EventEmitter();
  public listViewResponse: listViewModel[];
  public grid1: IgxGridComponent;

  public data: listViewModel[];
  public groupData: groupViewModel[];
  public density = 'comfortable';
  public displayDensities;
  readonly BaseUrl = 'http://localhost:49946/api/';

  constructor(private http: HttpClient, private topManubarCompnent: TopManuBarComponent) {
    // Assign the data to the data source for the table to render
   }
 public getListView(): Observable<listViewModel[]> {
  return this.http.get<listViewModel[]>(this.BaseUrl + 'listview' + '/1500');
 }
  public ngOnInit(): void {
  this.getListView().subscribe(data => this.data = data);
}
  public selectDensity(event) {
    this.density = this.displayDensities[event.index].label;
    this.grid1.displayDensity = this.displayDensities[event.index].label;
    this.grid1.reflow();
 }

  public formatDate(val) {
      if (val !== 'Select All') {
          return new Intl.DateTimeFormat('en-US').format(val);
      } else {
          return val;
      }
  }

  public formatCurrency(val: string) {
      return parseInt(val, 10).toFixed(2);
  }
  public onGridLoad() {
    myFunc();
  }
 public addNewEditTab(event) {
 }

 public editBtnClick() {
   // tslint:disable-next-line: deprecation
   // tslint:disable-next-line: prefer-const
  // let distinctGroupList: groupViewModel[];
  // distinctGroupList = [];
  // const firstObjct = { groupId: this.data[0].groupId,
  //                      groupKey: this.data[0].groupKey,
  //                     groupName: this.data[0].groupName }
  // distinctGroupList.push(this.data[0]);
  // this.data.forEach(element => {
  //   let toAdd: boolean;
  //   // tslint:disable-next-line: prefer-for-of
  //   for (let i = 0; i < distinctGroupList.length; i++) {
  //     if ( distinctGroupList[i].groupId === element.groupId) {
  //       toAdd = false;
  //     } else {
  //     toAdd = true;
  //     }
  //   }
  //   if ( toAdd ) {
  //     const tmpObj = { groupId: element.groupId, groupKey: element.groupKey, groupName: element.groupName };
  //     distinctGroupList.push(tmpObj);
  //   }
  // });
  // tslint:disable-next-line: deprecation
  this.topManubarCompnent.addNewTab(event, true);
 }

}
