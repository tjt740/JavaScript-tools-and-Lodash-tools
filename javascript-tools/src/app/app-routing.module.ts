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
import { UtilTwentyFourComponent } from './pages/util-twenty-four/util-twenty-four.component';
import { UtilTwentyFiveComponent } from './pages/util-twenty-five/util-twenty-five.component';
import { UtilTwentySixComponent } from './pages/util-twenty-six/util-twenty-six.component';
import { UtilTwentySevenComponent } from './pages/util-twenty-seven/util-twenty-seven.component';
import { UtilTwentyEightComponent } from './pages/util-twenty-eight/util-twenty-eight.component';
import { UtilTwentyNineComponent } from './pages/util-twenty-nine/util-twenty-nine.component';
import { UtilThirtyComponent } from './pages/util-thirty/util-thirty.component';
import { UtilThirtyOneComponent } from './pages/util-thirty-one/util-thirty-one.component';
import { UtilThirtyTwoComponent } from './pages/util-thirty-two/util-thirty-two.component';
import { UtilThirtyThreeComponent } from './pages/util-thirty-three/util-thirty-three.component';
import { UtilThirtyFourComponent } from './pages/util-thirty-four/util-thirty-four.component';
import { UtilThirtyFiveComponent } from './pages/util-thirty-five/util-thirty-five.component';
import { UtilThirtySixComponent } from './pages/util-thirty-six/util-thirty-six.component';
import { UtilThirtySevenComponent } from './pages/util-thirty-seven/util-thirty-seven.component';
import { UtilThirtyEightComponent } from './pages/util-thirty-eight/util-thirty-eight.component';
import { UtilThirtyNineComponent } from './pages/util-thirty-nine/util-thirty-nine.component';
import { UtilFortyComponent } from './pages/util-forty/util-forty.component';
import { UtilFortyOneComponent } from './pages/util-forty-one/util-forty-one.component';
import { UtilFortyTwoComponent } from './pages/util-forty-two/util-forty-two.component';
import { UtilFortyThreeComponent } from './pages/util-forty-three/util-forty-three.component';
import { UtilFortyFourComponent } from './pages/util-forty-four/util-forty-four.component';
import { UtilFortyFiveComponent } from './pages/util-forty-five/util-forty-five.component';
import { UtilFortySixComponent } from './pages/util-forty-six/util-forty-six.component';
import { UtilFortySevenComponent } from './pages/util-forty-seven/util-forty-seven.component';
import { UtilFortyEightComponent } from './pages/util-forty-eight/util-forty-eight.component';
import { UtilFortyNineComponent } from './pages/util-forty-nine/util-forty-nine.component';
import { UtilFiftyComponent } from './pages/util-fifty/util-fifty.component';
import { UtilFiftyOneComponent } from './pages/util-fifty-one/util-fifty-one.component';
import { UtilFiftyTwoComponent } from './pages/util-fifty-two/util-fifty-two.component';
import { UtilFiftyThreeComponent } from './pages/util-fifty-three/util-fifty-three.component';
import { UtilFiftyFourComponent } from './pages/util-fifty-four/util-fifty-four.component';
import { UtilFiftyFiveComponent } from './pages/util-fifty-five/util-fifty-five.component';
import { UtilFiftySixComponent } from './pages/util-fifty-six/util-fifty-six.component';
import { UtilFiftySevenComponent } from './pages/util-fifty-seven/util-fifty-seven.component';
import { UtilFiftyEightComponent } from './pages/util-fifty-eight/util-fifty-eight.component';
import { UtilFiftyNineComponent } from './pages/util-fifty-nine/util-fifty-nine.component';
import { UtilSixtyComponent } from './pages/util-sixty/util-sixty.component';

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
      },
      {
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
      },
      {
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
      {
        path: 'util-24',
        component: UtilTwentyFourComponent,
      },
      {
        path: 'util-25',
        component: UtilTwentyFiveComponent,
      },
      {
        path: 'util-26',
        component: UtilTwentySixComponent,
      },
      {
        path: 'util-27',
        component: UtilTwentySevenComponent,
      },
      {
        path: 'util-28',
        component: UtilTwentyEightComponent,
      },
      {
        path: 'util-29',
        component: UtilTwentyNineComponent,
      },
      {
        path: 'util-30',
        component: UtilThirtyComponent,
      },
      {
        path: 'util-31',
        component: UtilThirtyOneComponent,
      },
      {
        path: 'util-32',
        component: UtilThirtyTwoComponent,
      },
      {
        path: 'util-33',
        component: UtilThirtyThreeComponent,
      },
      {
        path: 'util-34',
        component: UtilThirtyFourComponent,
      },
      {
        path: 'util-35',
        component: UtilThirtyFiveComponent,
      },
      {
        path: 'util-36',
        component: UtilThirtySixComponent,
      },
      {
        path: 'util-37',
        component: UtilThirtySevenComponent,
      },
      {
        path: 'util-38',
        component: UtilThirtyEightComponent,
      },
      {
        path: 'util-39',
        component: UtilThirtyNineComponent,
      },
      {
        path: 'util-40',
        component: UtilFortyComponent,
      },
      {
        path: 'util-41',
        component: UtilFortyOneComponent,
      },
      {
        path: 'util-42',
        component: UtilFortyTwoComponent,
      },
      {
        path: 'util-43',
        component: UtilFortyThreeComponent,
      },
      {
        path: 'util-44',
        component: UtilFortyFourComponent,
      },
      {
        path: 'util-45',
        component: UtilFortyFiveComponent,
      },
      {
        path: 'util-46',
        component: UtilFortySixComponent,
      },
      {
        path: 'util-47',
        component: UtilFortySevenComponent,
      },
      {
        path: 'util-48',
        component: UtilFortyEightComponent,
      },
      {
        path: 'util-49',
        component: UtilFortyNineComponent,
      },
      {
        path: 'util-50',
        component: UtilFiftyComponent,
      },
      {
        path: 'util-51',
        component: UtilFiftyOneComponent,
      },
      {
        path: 'util-52',
        component: UtilFiftyTwoComponent,
      },
      {
        path: 'util-53',
        component: UtilFiftyThreeComponent,
      },
      {
        path: 'util-54',
        component: UtilFiftyFourComponent,
      },
      {
        path: 'util-55',
        component: UtilFiftyFiveComponent,
      },
      {
        path: 'util-56',
        component: UtilFiftySixComponent,
      },
      {
        path: 'util-57',
        component: UtilFiftySevenComponent,
      },
      {
        path: 'util-58',
        component: UtilFiftyEightComponent,
      },
      {
        path: 'util-59',
        component: UtilFiftyNineComponent,
      },
      {
        path: 'util-60',
        component: UtilSixtyComponent,
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
  // {
  //   path: '**',
  //   //*1) component: NoFoundComponent,
  //   //*2) 路由懒加载 (有点麻烦，需要创建 index-routing-modules.ts 将index路由导出)
  //   loadChildren: () =>
  //     import('./pages/no-found/no-found-routing.module').then(
  //       (m) => m.NoFoundRoutingModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
