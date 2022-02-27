import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToolsDocService {
  constructor() { }




  // >>>数字操作<<<
  // *生成范围随机数
  randomNum() {
    return `
      // 生成范围随机数

      // min: 最小值
      // max: 最大值

      const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

      randomNum(0,5)  // 0
      randomNum(0,5)  // 3
      randomNum(0,5)  // 5
    `;
  }

  // *数字转中文
  intToChinese() {
    return `
      // 数字转中文

      // value: 数字

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
                      return num[$1[0]];
                  }
              }
          });
      };

      intToChinese(1000)    // '一千'
      intToChinese('9999')  // '九千九百九十九'
    `;
  }

  // *数字千分位分隔
  partitionNum() {
    return `
      // 数字千分位分隔

      // n: 数字

      const partitionNum = (n) => {

          let num = n.toString();

          let len = num.length;

          if (len <= 3) {

              return num;

          } else {

              let temp = '';

              let remainder = len % 3;

              if (remainder > 0) { // 不是3的整数倍

                  return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/\d{3}/g).join(',') + temp;

              } else { // 3的整数倍

                  return num.slice(0, len).match(/\d{3}/g).join(',') + temp;

              }
          }
      }

      partitionNum(12345)   // '12,345'
      partitionNum(123)     // '123'
      partitionNum('99999') // '99,999'

    `;
  }




  // >>>字符串操作<<<
  // *随机生成自定义长度的字符串
  randomStr() {
    return `
      // 随机生成自定义长度的字符串

      // len: 随机字符串的长度

      const randomString = (len) => {

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'; // 随机字符串词典;

        const strLen = chars.length;

        const randomStr = '';

        for (let i = 0; i < len; i++) {

            randomStr += chars.charAt(Math.floor(Math.random() * strLen));

        };

        return randomStr;
      };

      randomString(3)   // 'zff'
      randomString(5)   // '2D3Zy'
      randomString(10)  // 'SpzTPtYZGt'
    `;
  }

  // *字符串首字母大写
  firstStrUpper() {
    return `
      // 字符串首字母大写

      // str: 字符串

      const firstStrUpper = str => str.slice(0,1).toLocaleUpperCase() + str.slice(1);

      firstStrUpper('tjtqsn') // Tjtqsn
      firstStrUpper('abcd')   // Abcd
    `;
  }

  // *手机号中间几位变成*
  telFormat() {
    return `
      // 手机号中间几位变成*

      // tel: 手机号
      // symbol: *数量

      const telFormat = (tel, symbol = 4) => {

        tel = String(tel);

        symbol = symbol > 7 ? 7 : symbol;  // *数不能大于7

        const telPerFix = tel.substr(0, 3); // 手机号前缀

        const symbolNum = new Array(symbol).fill('*').join(''); // 生成指定的 * 数量;

        const telsSuffix = tel.substr(symbolNum.length + telPerFix.length); // 手机号后缀

        const formatTel = telPerFix + symbolNum + telsSuffix;

        return formatTel;
      };

      telFormat(15751666937)    // 157****6937
      telFormat(15751666937, 7) // 157*******7
      telFormat(15751666937, 0) // 15751666937
    `;
  }

  // *驼峰命名转换成短横线命名
  getKebabCase() {
    return `
      // 驼峰命名转换成短横线命名

      // str: 英文字符串

      const getKebabCase = (str) => {

        str = String(str);

        return str.replace(/[A-Z]/g, (item) => '-' + item.toLowerCase())
      };

      getKebabCase('tjtQsn')  // tjt-qsn
      getKebabCase('ABCDE')   // -a-b-c-d-e
    `;
  }




  // >>>数组操作<<<
  // *数组乱序
  randomArray() {
    return `
      // 数组乱序

      // arr: 数组

      const arrScrambling = (arr) => {

        for (let i = 0; i < arr.length; i++) {

          const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;

          [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];

        }

        return arr;
      };

      arrScrambling([1,2,3,4,5])                      // [2, 3, 5, 1, 4]
      arrScrambling([{a:1},{a:2},{a:3},{a:4},{a:5}])  // [{a: 2},{a: 1},{a: 4},{a: 5},{a: 3}]
    `;
  }
  // *随机获取数组中的某个数
  randomArrayNum() {
    return `
      // 随机获取数组中的某个数

      // arr: 数组

      const sample = arr => arr[Math.floor(Math.random() * arr.length)];

      sample(['1',2,'3',4,5])  // '3'
      sample([{a:1},{a:2},{a:3},{a:4},{a:5}])  // {a: 2}
      sample([1,2,3,4,5])  // 2
    `;
  }




  // >>>JSON操作<<<





  // >>>URL操作<<<






}
