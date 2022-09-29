import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { WindowViewModel } from 'src/app/components/window-control/window.model';
import { EventRecord } from 'src/app/models/event-record/event.record';
import { Page } from 'src/app/models/page-list.model';
import { StructuredDataBodyQueryModel } from '../structured-data-body-query/structured-data-body-query.model';
import { StructuredDataItemModel } from '../structured-data-item/structured-data-item.model';
import { StructuredDataBodyBusiness } from './structured-data-body.business';

@Component({
  selector: 'app-structured-data-body',
  templateUrl: './structured-data-body.component.html',
  styleUrls: ['./structured-data-body.component.less'],
  providers: [StructuredDataBodyBusiness],
})
export class StructuredDataBodyComponent implements OnInit {
  constructor(private business: StructuredDataBodyBusiness) {}
  page?: Page;
  query?: StructuredDataBodyQueryModel;
  datas: StructuredDataItemModel[] = [];
  selected?: EventRecord;
  window: WindowViewModel = new WindowViewModel();
  style = {
    width: 'calc(815px + 40px)',
    height: 'calc(465px + 40px)',
  };
  ngOnInit(): void {}
  pageEvent(page: PageEvent) {
    if (!this.page) {
      this.page = new Page();
    }
    this.page.PageIndex = page.pageIndex + 1;
    this.loadData(this.page.PageIndex);
  }
  onquery(query: StructuredDataBodyQueryModel) {
    console.log(query);
    this.query = query;
    this.loadData(1);
  }
  async loadData(index: number) {
    if (this.query) {
      let paged = await this.business.load(this.query, index);
      this.page = paged.Page;
      console.log(paged.Data);
      this.datas = paged.Data;
    }
  }
  onselected(item: StructuredDataItemModel) {
    this.selected = item.data;
    this.window.show = true;
  }
  onclosewindow() {
    this.window.show = false;
  }
}
