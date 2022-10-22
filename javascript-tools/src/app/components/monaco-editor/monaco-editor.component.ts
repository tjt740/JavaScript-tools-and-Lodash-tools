import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  forwardRef,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MonacoEditorConfigService } from '../../services/monaco-editor-config.service';

let loadedMonaco = false;
let loadPromise: Promise<void>;

@Component({
  selector: 'app-monaco-editor',
  templateUrl: './monaco-editor.component.html',
  styleUrls: ['./monaco-editor.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MonacoEditorConfigService),
      multi: true,
    },
  ],
})
export class MonacoEditorComponent implements AfterViewInit, OnChanges {
  @ViewChild('editorContainer') _editorContainer: any;
  @Input() code = '';
  @Output() codeChange = new EventEmitter<String>();

  // @ts-ignore
  codeEditorInstance: monaco.editor.IStandaloneCodeEditor;
  constructor(private configService: MonacoEditorConfigService) {}

  ngOnChanges() {
    if (this.codeEditorInstance) {
      this.codeEditorInstance.setValue(this.code);
    }
  }

  ngAfterViewInit() {
    if (loadedMonaco) {
      loadPromise.then(() => {
        this.initMonaco();
      });
    } else {
      loadedMonaco = true;
      loadPromise = new Promise<void>((resolve: any) => {
        if (typeof (<any>window).monaco === 'object') {
          resolve();
          return;
        }
        const onAmdLoader: any = () => {
          (<any>window).require.config({ paths: { vs: 'assets/monaco/vs' } });
          (<any>window).require(['vs/editor/editor.main'], () => {
            this.initMonaco();
            resolve();
          });
        };

        if (!(<any>window).require) {
          const loaderScript: HTMLScriptElement =
            document.createElement('script');
          loaderScript.type = 'text/javascript';
          loaderScript.src = 'assets/monaco/vs/loader.js';
          loaderScript.addEventListener('load', onAmdLoader);
          document.body.appendChild(loaderScript);
        } else {
          onAmdLoader();
        }
      });
    }
  }

  initMonaco(): void {
    monaco.languages.register(this.configService.getCustomLangExtensionPoint());
    monaco.languages.setMonarchTokensProvider(
      'CustomLang',
      this.configService.getCustomLangTokenProviders()
    );
    monaco.editor.defineTheme(
      'customLangTheme',
      this.configService.getCustomLangTheme()
    );

    this.codeEditorInstance = monaco.editor.create(
      this._editorContainer.nativeElement,
      {
        value: this.code,
        language: 'javascript',
        theme: 'vs-dark',
      }
    );

    // @ts-ignore
    this.codeEditorInstance.getModel().onDidChangeContent((e: any) => {
      this.codeChange.emit(this.codeEditorInstance.getValue());
    });
  }

  refreshPage() {}
}
