import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
// import { DataTablesModule } from 'angular-datatables';

declare var $: any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: []
})
export class TableComponent implements OnInit, AfterViewInit{

  constructor(){
  }

  ngOnInit() {
    $('#test').dataTable();
    // console.log(this.dTable);
  }

  ngAfterViewInit() {
    // console.log(DataTableDirective);
  }

}
