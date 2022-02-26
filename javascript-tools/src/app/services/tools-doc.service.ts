import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToolsDocService {
  constructor() {}
  // >>>处理数字<<<
  // *生成范围随机数
  randomNum(min: number, max: number): string {
    return `
      //生成范围随机数
      const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

      // randomNum(0,5)  [0-5]
    `;
  }

  // >>>处理字符串<<<
  // *数字转中文
  intToChinese(): string {
    return `
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
      };

      // intToChinese(1000)    '一千'
      // intToChinese('9999')  '九千九百九十九'
    `;
  }

  // >>>处理数组<<<

  // >>>处理JSON<<<
}
