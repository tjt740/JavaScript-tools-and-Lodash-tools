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
  initCode: string = `
  // 数字转中文
  const intToChinese = (value) => {
      const str = String(value);
      const len = str.length - 1;
      const idxs = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'];
      const num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
      return str.replace(/([1-9]|0+)/g, ($, $1, idx, full) => {
          let pos = 0;
          if ($1[0] !== '0') {
              pos = len - idx;
              if (idx == 0 && $1[0] == 1 && idxs[len - idx] == '十') {
                  return idxs[len - idx];
              }
              return num[$1[0]] + idxs[len - idx];
          } else {
              let left = len - idx;
              let right = len - idx + $1.length;
              if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
                  pos = left - left % 4;
              }
              if (pos) {
                  return idxs[pos] + num[$1[0]];
              } else if (idx + $1.length >= len) {
                  return '';
              } else {
                  return num[$1[0]]
              }
          }
      });
  }
  intToChinese(1000);
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
