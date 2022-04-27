import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { UtilOneComponent } from './pages/a/util-one/util-one.component';
import { UtilTwoComponent } from './pages/a/util-two/util-two.component';
import { UtilThreeComponent } from './pages/a/util-three/util-three.component';
import { UtilFourComponent } from './pages/a/util-four/util-four.component';
import { UtilFiveComponent } from './pages/a/util-five/util-five.component';
import { UtilSixComponent } from './pages/a/util-six/util-six.component';
import { UtilSevenComponent } from './pages/a/util-seven/util-seven.component';
import { UtilEightComponent } from './pages/a/util-eight/util-eight.component';
import { UtilNineComponent } from './pages/a/util-nine/util-nine.component';
import { UtilTenComponent } from './pages/a/util-ten/util-ten.component';
import { UtilElevenComponent } from './pages/b/util-eleven/util-eleven.component';
import { UtilTwelveComponent } from './pages/b/util-twelve/util-twelve.component';
import { UtilThirteenComponent } from './pages/b/util-thirteen/util-thirteen.component';
import { UtilFourteenComponent } from './pages/b/util-fourteen/util-fourteen.component';
import { UtilFifteenComponent } from './pages/b/util-fifteen/util-fifteen.component';
import { UtilSixteenComponent } from './pages/b/util-sixteen/util-sixteen.component';
import { UtilSeventeenComponent } from './pages/b/util-seventeen/util-seventeen.component';
import { UtilEighteenComponent } from './pages/b/util-eighteen/util-eighteen.component';
import { UtilNineteenComponent } from './pages/b/util-nineteen/util-nineteen.component';
import { UtilTwentyComponent } from './pages/c/util-twenty/util-twenty.component';
import { UtilTwentyOneComponent } from './pages/c/util-twenty-one/util-twenty-one.component';
import { UtilTwentyTwoComponent } from './pages/c/util-twenty-two/util-twenty-two.component';
import { UtilTwentyThreeComponent } from './pages/c/util-twenty-three/util-twenty-three.component';
import { UtilTwentyFourComponent } from './pages/c/util-twenty-four/util-twenty-four.component';
import { UtilTwentyFiveComponent } from './pages/c/util-twenty-five/util-twenty-five.component';
import { UtilTwentySixComponent } from './pages/c/util-twenty-six/util-twenty-six.component';
import { UtilTwentySevenComponent } from './pages/c/util-twenty-seven/util-twenty-seven.component';
import { UtilTwentyEightComponent } from './pages/c/util-twenty-eight/util-twenty-eight.component';
import { UtilTwentyNineComponent } from './pages/c/util-twenty-nine/util-twenty-nine.component';
import { UtilThirtyComponent } from './pages/d/util-thirty/util-thirty.component';
import { UtilThirtyOneComponent } from './pages/d/util-thirty-one/util-thirty-one.component';
import { UtilThirtyTwoComponent } from './pages/d/util-thirty-two/util-thirty-two.component';
import { UtilThirtyThreeComponent } from './pages/d/util-thirty-three/util-thirty-three.component';
import { UtilThirtyFourComponent } from './pages/d/util-thirty-four/util-thirty-four.component';
import { UtilThirtyFiveComponent } from './pages/d/util-thirty-five/util-thirty-five.component';
import { UtilThirtySixComponent } from './pages/d/util-thirty-six/util-thirty-six.component';
import { UtilThirtySevenComponent } from './pages/d/util-thirty-seven/util-thirty-seven.component';
import { UtilThirtyEightComponent } from './pages/d/util-thirty-eight/util-thirty-eight.component';
import { UtilThirtyNineComponent } from './pages/d/util-thirty-nine/util-thirty-nine.component';
import { UtilFortyComponent } from './pages/e/util-forty/util-forty.component';
import { UtilFortyOneComponent } from './pages/e/util-forty-one/util-forty-one.component';
import { UtilFortyTwoComponent } from './pages/e/util-forty-two/util-forty-two.component';
import { UtilFortyThreeComponent } from './pages/e/util-forty-three/util-forty-three.component';
import { UtilFortyFourComponent } from './pages/e/util-forty-four/util-forty-four.component';
import { UtilFortyFiveComponent } from './pages/e/util-forty-five/util-forty-five.component';
import { UtilFortySixComponent } from './pages/e/util-forty-six/util-forty-six.component';
import { UtilFortySevenComponent } from './pages/e/util-forty-seven/util-forty-seven.component';
import { UtilFortyEightComponent } from './pages/e/util-forty-eight/util-forty-eight.component';
import { UtilFortyNineComponent } from './pages/e/util-forty-nine/util-forty-nine.component';
import { UtilFiftyComponent } from './pages/f/util-fifty/util-fifty.component';
import { UtilFiftyOneComponent } from './pages/f/util-fifty-one/util-fifty-one.component';
import { UtilFiftyTwoComponent } from './pages/f/util-fifty-two/util-fifty-two.component';
import { UtilFiftyThreeComponent } from './pages/f/util-fifty-three/util-fifty-three.component';
import { UtilFiftyFourComponent } from './pages/f/util-fifty-four/util-fifty-four.component';
import { UtilFiftyFiveComponent } from './pages/f/util-fifty-five/util-fifty-five.component';
import { UtilFiftySixComponent } from './pages/f/util-fifty-six/util-fifty-six.component';
import { UtilFiftySevenComponent } from './pages/f/util-fifty-seven/util-fifty-seven.component';
import { UtilFiftyEightComponent } from './pages/f/util-fifty-eight/util-fifty-eight.component';
import { UtilFiftyNineComponent } from './pages/f/util-fifty-nine/util-fifty-nine.component';
import { UtilSixtyComponent } from './pages/g/util-sixty/util-sixty.component';

import { UtilSixtyOneComponent } from './pages/g/util-sixty-one/util-sixty-one.component';
import { UtilSixtyTwoComponent } from './pages/g/util-sixty-two/util-sixty-two.component';
import { UtilSixtyThreeComponent } from './pages/g/util-sixty-three/util-sixty-three.component';
import { UtilSixtyFourComponent } from './pages/g/util-sixty-four/util-sixty-four.component';
import { UtilSixtyFiveComponent } from './pages/g/util-sixty-five/util-sixty-five.component';
import { UtilSixtySixComponent } from './pages/g/util-sixty-six/util-sixty-six.component';
import { UtilSixtySevenComponent } from './pages/g/util-sixty-seven/util-sixty-seven.component';
import { UtilSixtyEightComponent } from './pages/g/util-sixty-eight/util-sixty-eight.component';
import { UtilSixtyNineComponent } from './pages/g/util-sixty-nine/util-sixty-nine.component';
import { UtilSeventyComponent } from './pages/h/util-seventy/util-seventy.component';
import { UtilSeventyOneComponent } from './pages/h/util-seventy-one/util-seventy-one.component';
import { UtilSeventyTwoComponent } from './pages/h/util-seventy-two/util-seventy-two.component';
import { UtilSeventyThreeComponent } from './pages/h/util-seventy-three/util-seventy-three.component';
import { UtilSeventyFourComponent } from './pages/h/util-seventy-four/util-seventy-four.component';
import { UtilSeventyFiveComponent } from './pages/h/util-seventy-five/util-seventy-five.component';
import { UtilSeventySixComponent } from './pages/h/util-seventy-six/util-seventy-six.component';
import { UtilSeventySevenComponent } from './pages/h/util-seventy-seven/util-seventy-seven.component';
import { UtilSeventyEightComponent } from './pages/h/util-seventy-eight/util-seventy-eight.component';
import { UtilSeventyNineComponent } from './pages/h/util-seventy-nine/util-seventy-nine.component';
import { UtilEightyComponent } from './pages/i/util-eighty/util-eighty.component';
import { UtilEightyOneComponent } from './pages/i/util-eighty-one/util-eighty-one.component';
import { UtilEightyTwoComponent } from './pages/i/util-eighty-two/util-eighty-two.component';
import { UtilEightyThreeComponent } from './pages/i/util-eighty-three/util-eighty-three.component';
import { UtilEightyFourComponent } from './pages/i/util-eighty-four/util-eighty-four.component';
import { UtilEightyFiveComponent } from './pages/i/util-eighty-five/util-eighty-five.component';
import { UtilEightySixComponent } from './pages/i/util-eighty-six/util-eighty-six.component';
import { UtilEightySevenComponent } from './pages/i/util-eighty-seven/util-eighty-seven.component';
import { UtilEightyEightComponent } from './pages/i/util-eighty-eight/util-eighty-eight.component';
import { UtilEightyNineComponent } from './pages/i/util-eighty-nine/util-eighty-nine.component';
import { UtilNinetyComponent } from './pages/j/util-ninety/util-ninety.component';
import { UtilNinetyOneComponent } from './pages/j/util-ninety-one/util-ninety-one.component';
import { UtilNinetyTwoComponent } from './pages/j/util-ninety-two/util-ninety-two.component';
import { UtilNinetyThreeComponent } from './pages/j/util-ninety-three/util-ninety-three.component';
import { UtilNinetyFourComponent } from './pages/j/util-ninety-four/util-ninety-four.component';
import { UtilNinetyFiveComponent } from './pages/j/util-ninety-five/util-ninety-five.component';
import { UtilNinetySixComponent } from './pages/j/util-ninety-six/util-ninety-six.component';
import { UtilNinetySevenComponent } from './pages/j/util-ninety-seven/util-ninety-seven.component';
import { UtilNinetyEightComponent } from './pages/j/util-ninety-eight/util-ninety-eight.component';
import { UtilNinetyNineComponent } from './pages/j/util-ninety-nine/util-ninety-nine.component';

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
