import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// 左侧菜单栏
import * as all from '../../config/menu-config';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less'],
})
export class IndexComponent implements OnInit {
  isCollapsed = false;

  isIndex: string | boolean = '';
  routeConfig: any;
  selectedValue = null;
  listOfGroupOption: any = [];

  // mock MenuConfig
  mockAll = JSON.parse(JSON.stringify(all.MenuConfig));

  constructor(protected route: Router) {}

  ngOnInit(): void {
    // 获取左边menu的菜单栏详情
    this.routeConfig = all.MenuConfig;

    // search搜索;

    this.mockAll.map((val: any) => {
      return val.childRoute.map((v: any) => {
        v.groupLabel = val.title;
        v.label = v.exhibitStr;
        v.value = v.router;
        delete v.exhibitStr;
        delete v.router;
      });
    });
    // @ts-ignore
    this.listOfGroupOption = this.mockAll
      .flatMap((v: any) => v.childRoute)
      .filter((v: any) => v.label);
    // console.log(all.MenuConfig)
  }

  ngAfterContentChecked(): void {
    this.isIndex = window.location.pathname === '/index' || false;
  }

  goBack() {
    this.route.navigateByUrl('/index');
  }

  trackFn(item: any) {
    return item.id;
  }

  search(value: any): void {
    // console.log(value);
    this.route.navigate([value]);
  };

}
