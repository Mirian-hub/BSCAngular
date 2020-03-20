import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tableListView',
  templateUrl: './tableListView.component.html',
  styleUrls: ['./tableListView.component.css']
})
export class TableListViewComponent  {

  @Input() data;

}
