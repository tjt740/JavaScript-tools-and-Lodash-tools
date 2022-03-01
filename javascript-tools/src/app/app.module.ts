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
    UtilFortyComponent
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
