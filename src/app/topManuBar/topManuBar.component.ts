import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { TabService } from './tab.service';
import {Tab} from './tab.model';
import {TableListViewComponent} from './components/tableListView/tableListView.component';
import {GrouplistComponent} from './components/grouplist/grouplist.component';
import {Comp2Component} from './components/comp2.component';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';
import {TabContentComponent} from './tab-content.component';
import {EditFormComponent} from './components/editForm/editForm.component'


@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-topManuBar',
  templateUrl: './topManuBar.component.html',
  styleUrls: ['./topManuBar.component.css'],
  providers: [TabService]
})

export class TopManuBarComponent implements OnInit {
    constructor(public tabService: TabService) { }
    @ViewChild('targetBtn', { static: true }) public targetBtn: ElementRef;
    tabTitle = '';
    tabs = new Array<Tab>();
    selectedTab: number;
    counter = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    ngOnInit() {
      this.tabService.tabSub.subscribe(tabs => {
        this.tabs = tabs;
        this.selectedTab = tabs.findIndex(tab => tab.active);
      });
    }
  tabChanged(event) {
  }
  addNewTab(event: any, edit: boolean) {
    const btnClassName = event.srcElement.className;
    const title = edit ? this.tabService.tabs.find(c => c.active === true).title + ' - ' : '';
    const component = edit ? EditFormComponent : GrouplistComponent ;
    if (!(btnClassName.includes('wrapper') || btnClassName.includes('trigger') ))
    {
      this.tabService.addTab(
         new Tab(component, title + event.srcElement.innerText , { parent: 'AppComponent' })
      );
    }
  }
  removeTab(index: number): void {
    this.tabService.removeTab(index);
   }
  }

