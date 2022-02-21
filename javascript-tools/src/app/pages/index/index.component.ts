import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as all from '../../config/menu-config';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  isCollapsed = false;

  isIndex: string | boolean = '';

  routeConfig: any;

  constructor(
    private route: Router,
  ) { }

  ngOnInit(): void {
    // 获取左边menu的菜单栏详情
    this.routeConfig = all.MenuConfig;
  }

  ngAfterContentChecked(): void {
    this.isIndex = window.location.pathname === '/index' || false;
  }

  goBack() {
    this.route.navigateByUrl('/index');
  }

  trackFn(item:any) {
    return item.id;
  }

}
