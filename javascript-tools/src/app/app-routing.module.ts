import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { UtilOneComponent } from './pages/util-one/util-one.component';
import { UtilTwoComponent } from './pages/util-two/util-two.component';
import { UtilThreeComponent } from './pages/util-three/util-three.component';
import { UtilFourComponent } from './pages/util-four/util-four.component';
import { UtilFiveComponent } from './pages/util-five/util-five.component';
import { UtilSixComponent } from './pages/util-six/util-six.component';
import { UtilSevenComponent } from './pages/util-seven/util-seven.component';
import { UtilEightComponent } from './pages/util-eight/util-eight.component';
import { UtilNineComponent } from './pages/util-nine/util-nine.component';
import { UtilTenComponent } from './pages/util-ten/util-ten.component';
import { UtilElevenComponent } from './pages/util-eleven/util-eleven.component';
import { UtilTwelveComponent } from './pages/util-twelve/util-twelve.component';
import { UtilThirteenComponent } from './pages/util-thirteen/util-thirteen.component';
import { UtilFourteenComponent } from './pages/util-fourteen/util-fourteen.component';
import { UtilFifteenComponent } from './pages/util-fifteen/util-fifteen.component';
import { UtilSixteenComponent } from './pages/util-sixteen/util-sixteen.component';
import { UtilSeventeenComponent } from './pages/util-seventeen/util-seventeen.component';
import { UtilEighteenComponent } from './pages/util-eighteen/util-eighteen.component';
import { UtilNineteenComponent } from './pages/util-nineteen/util-nineteen.component';
import { UtilTwentyComponent } from './pages/util-twenty/util-twenty.component';
import { UtilTwentyOneComponent } from './pages/util-twenty-one/util-twenty-one.component';
import { UtilTwentyTwoComponent } from './pages/util-twenty-two/util-twenty-two.component';
import { UtilTwentyThreeComponent } from './pages/util-twenty-three/util-twenty-three.component';


const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    children: [
      {
        path: 'util-1',
        component: UtilOneComponent,
      },
      {
        path: 'util-2',
        component: UtilTwoComponent,
      },
      {
        path: 'util-3',
        component: UtilThreeComponent,
      },
      {
        path: 'util-4',
        component: UtilFourComponent,
      },
      {
        path: 'util-5',
        component: UtilFiveComponent,
      },
      {
        path: 'util-6',
        component: UtilSixComponent,
      },
      {
        path: 'util-7',
        component: UtilSevenComponent,
      },
      {
        path: 'util-8',
        component: UtilEightComponent,
      },
      {
        path: 'util-9',
        component: UtilNineComponent,
      },
      {
        path: 'util-10',
        component: UtilTenComponent,
      },
      {
        path: 'util-11',
        component: UtilElevenComponent,
      },
      {
        path: 'util-12',
        component: UtilTwelveComponent,
      },
      {
        path: 'util-13',
        component: UtilThirteenComponent,
      },  {
        path: 'util-14',
        component: UtilFourteenComponent,
      },
      {
        path: 'util-15',
        component: UtilFifteenComponent,
      },
      {
        path: 'util-16',
        component: UtilSixteenComponent,
      },
      {
        path: 'util-17',
        component: UtilSeventeenComponent,
      },
      {
        path: 'util-18',
        component: UtilEighteenComponent,
      },     {
        path: 'util-19',
        component: UtilNineteenComponent,
      },
      {
        path: 'util-20',
        component: UtilTwentyComponent,
      },
      {
        path: 'util-21',
        component: UtilTwentyOneComponent,
      },
      {
        path: 'util-22',
        component: UtilTwentyTwoComponent,
      },
      {
        path: 'util-23',
        component: UtilTwentyThreeComponent,
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
