import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import zh from '@angular/common/locales/zh';
import { IconsProviderModule } from './icons-provider.module';

// monaco-editor 组件
import { MonacoEditorComponent } from './components/monaco-editor/monaco-editor.component';

// 页面
import { IndexComponent } from './pages/index/index.component';
import { NoFoundComponent } from './pages/no-found/no-found.component';
import { OpenAnimationComponent } from './components/open-animation/open-animation.component';
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


// 组件
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';


// 服务


// 管道



// 其他

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NoFoundComponent,
    OpenAnimationComponent,
    UtilOneComponent,
    MonacoEditorComponent,
    UtilTwoComponent,
    UtilThreeComponent,
    UtilFourComponent,
    UtilFiveComponent,
    UtilSixComponent,
    UtilSevenComponent,
    UtilEightComponent,
    UtilNineComponent,
    UtilTenComponent,
    UtilElevenComponent,
    UtilTwelveComponent,
    UtilThirteenComponent,
    UtilFourteenComponent,
    UtilFifteenComponent,
    UtilSixteenComponent,
    UtilSeventeenComponent,
    UtilEighteenComponent,
    UtilNineteenComponent,
    UtilTwentyComponent,
    UtilTwentyOneComponent,
    UtilTwentyTwoComponent,
    UtilTwentyThreeComponent,
    UtilTwentyFourComponent,
    UtilTwentyFiveComponent,
    UtilTwentySixComponent,
    UtilTwentySevenComponent,
    UtilTwentyEightComponent,
    UtilTwentyNineComponent,
    UtilThirtyComponent,
    UtilThirtyOneComponent,
    UtilThirtyTwoComponent,
    UtilThirtyThreeComponent,
    UtilThirtyFourComponent,
    UtilThirtyFiveComponent,
    UtilThirtySixComponent,
    UtilThirtySevenComponent,
    UtilThirtyEightComponent,
    UtilThirtyNineComponent,
    UtilFortyComponent,
    UtilFortyOneComponent,
    UtilFortyTwoComponent,
    UtilFortyThreeComponent,
    UtilFortyFourComponent,
    UtilFortyFiveComponent,
    UtilFortySixComponent,
    UtilFortySevenComponent,
    UtilFortyEightComponent,
    UtilFortyNineComponent,
    UtilFiftyComponent,
    UtilFiftyOneComponent,
    UtilFiftyTwoComponent,
    UtilFiftyThreeComponent,
    UtilFiftyFourComponent,
    UtilFiftyFiveComponent,
    UtilFiftySixComponent,
    UtilFiftySevenComponent,
    UtilFiftyEightComponent,
    UtilFiftyNineComponent,
    UtilSixtyComponent,
    UtilSixtyOneComponent,
    UtilSixtyTwoComponent,
    UtilSixtyThreeComponent,
    UtilSixtyFourComponent,
    UtilSixtyFiveComponent,
    UtilSixtySixComponent,
    UtilSixtySevenComponent,
    UtilSixtyEightComponent,
    UtilSixtyNineComponent,
    UtilSeventyComponent,
    UtilSeventyOneComponent,
    UtilSeventyTwoComponent,
    UtilSeventyThreeComponent,
    UtilSeventyFourComponent,
    UtilSeventyFiveComponent,
    UtilSeventySixComponent,
    UtilSeventySevenComponent,
    UtilSeventyEightComponent,
    UtilSeventyNineComponent,
    UtilEightyComponent,
    UtilEightyOneComponent,
    UtilEightyTwoComponent,
    UtilEightyThreeComponent,
    UtilEightyFourComponent,
    UtilEightyFiveComponent,
    UtilEightySixComponent,
    UtilEightySevenComponent,
    UtilEightyEightComponent,
    UtilEightyNineComponent,
    UtilNinetyComponent,
    UtilNinetyOneComponent,
    UtilNinetyTwoComponent,
    UtilNinetyThreeComponent,
    UtilNinetyFourComponent,
    UtilNinetyFiveComponent,
    UtilNinetySixComponent,
    UtilNinetySevenComponent,
    UtilNinetyEightComponent,
    UtilNinetyNineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
