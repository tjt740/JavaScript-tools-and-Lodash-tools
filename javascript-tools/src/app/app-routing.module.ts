import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
  },
  // 重定向路由
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full',
  },

  // 404 路由
  // { path: '**', component: NoFoundComponent },
  {
    path: '**',
    //*第1种) component: NoFoundComponent,
    //*第2种) 路由懒加载 (有点麻烦，需要创建 index-routing-modules.ts 将index路由导出)
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
