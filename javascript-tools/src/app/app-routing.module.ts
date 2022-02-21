import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { IndexComponent } from './pages/index/index.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';

const routes: Routes = [
  {
    path: 'index',
    //*1) component: IndexComponent,
    //*2) 路由懒加载 (有点麻烦，需要创建 index-routing-modules.ts 将index路由导出)
    loadChildren: () =>
      import('./pages/index/index-routing.module').then(
        (m) => m.IndexRoutingModule
      ),
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
    component: NoFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
