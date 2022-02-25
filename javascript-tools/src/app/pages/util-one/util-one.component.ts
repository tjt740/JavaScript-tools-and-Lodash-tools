import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-util-one',
  templateUrl: './util-one.component.html',
  styleUrls: ['./util-one.component.less'],
})
export class UtilOneComponent implements OnInit {
  // monacoInstance: any;
  // @ViewChild('box', { static: true }) private monacoDom: any;
  constructor() {}

  ngOnInit(): void {}
  initCode:string = `
  function fn(){
    console.log(123);
  }
`;

  // Either you can use the two-way binding and abstraction or
  // you can directly access the monaco-editor instance in your parent class.
  // @ViewChild('MonacoEditorComponent')
  // editorComponent: MonacoEditorComponent;

  saveCode(): void {
    console.log(`saving code -> ${this.initCode}`);
  }

  clearCode(): void {
    console.log('clearing the code');
    this.initCode = '';
  }
}
