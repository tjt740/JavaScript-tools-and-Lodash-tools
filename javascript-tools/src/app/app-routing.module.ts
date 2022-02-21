import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { UtilOneComponent } from './pages/util-one/util-one.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    children: [
      {
        path: 'util-1',
        component: UtilOneComponent,
      },
    ],
  },
  // 重定向路由
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },
  // 404 路由
  {
    path: '**',
    //*1) component: NoFoundComponent,
    //*2) 路由懒加载 (有点麻烦，需要创建 index-routing-modules.ts 将index路由导出)
    loadChildren: () =>
      import('./pages/no-found/no-found-routing.module').then(
        (m) => m.NoFoundRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
