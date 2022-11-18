import { Injectable } from '@angular/core';
import { isEqual } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ToolsDocService {
  constructor() {}

  // Ps:数字操作

  // *随机数字
  randomNum() {
    return `
      // 随机数字

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

      // value: 数字(元)

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

      intToChinese(1000) // '一千'
      intToChinese('9999') // '九千九百九十九'

    `;
  }

  //*数字转化为大写金额
  digitUppercase() {
    return `
      // 数字转化为大写金额

      // n: 数字(元)

      const digitUppercase = (n) => {
        const fraction = ['角', '分'];
        const digit = [
          '零', '壹', '贰', '叁', '肆',
          '伍', '陆', '柒', '捌', '玖'
        ];
        const unit = [
          ['元', '万', '亿'],
          ['', '拾', '佰', '仟']
        ];
        n = Math.abs(n);
        let s = '';
        for (let i = 0; i < fraction.length; i++) {
          s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);
        for (let i = 0; i < unit[0].length && n > 0; i++) {
          let p = '';
          for (let j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
          }
          s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        return s.replace(/(零.)*零元/, '元')
          .replace(/(零.)+/g, '零')
          .replace(/^整$/, '零元整');
      };

      digitUppercase(1234)    // 壹仟贰佰叁拾肆元整
      digitUppercase(20)      // 贰拾元整
      digitUppercase(100000)  // 壹拾万元整
      digitUppercase(0.01)    // 壹分
      digitUppercase(0.0001)  // 零元整

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

  // Ps:字符串操作
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

  // *手机号中间几位变成'*'
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

  // *短横线命名转换成驼峰命名
  getCamelCase() {
    return `
      // 短横线命名转换成驼峰命名

      // str: 字符串

      const getCamelCase = (str) => {
        str = String(str);
        return str.replace( /-([a-z])/g, (i, item) => item.toUpperCase())
      };

      getCamelCase('tjt-qsn')     // 'tjtQsn'
      getCamelCase('-a-b-c-d-e')  // 'ABCDE'

    `;
  }

  // Ps:数组操作
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

  // *打平/扁平化数组
  flatArray() {
    return `
      // 打平/扁平化数组

      // arr: 数组

      const arr = [1,[2,3],[4],[5,[6,[7]]]];
      const newArr = arr.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7]

    `;
  }

  // *数组按照某属性/键值计数
  countBy() {
    return `
      // 数组按照某属性/键值计数

      // arr: 数组
      // keyName: string 键值

      const countBy = (arr, keyName) =>
        arr.reduce((prev, curr) => {
            (prev[curr[keyName]] = ++prev[curr[keyName]] || 1), prev;
            if (!curr[keyName]) {
                delete prev[curr[keyName]];
            }
            return prev;
      }, {});

      const arr = [
          {
              a: '谭金涛',
              b: '戚思宁',
              c: '柳晔',
              d: '张三',
          },
          {
              a: '柳晔',
              b: '王语嫣',
              c: '白帆',
              d: '李四',
          },
          {
              a: '谭金涛',
              b: '戚思宁',
              c: '白帆',
          },
          {
              a: '谭金涛',
              b: '王语嫣',
              c: '白帆',
          },
      ];

      countBy(arr, 'b'); // { '戚思宁': 2, '王语嫣': 2 }
      countBy(arr, 'd'); // { '张三': 1, '李四': 1 }

    `;
  }

  // *筛选数组中相同的元素组成新数组
  screenSthArray() {
    return `
      // 筛选数组中相同的元素组成新数组

      // arr: 数组
      // keyName: string 键值

      // Step1 先用map结构记录
      function arrayToMap(data, keyName) {
          // 当为非数组或数据长度为0，不做处理。
          if (!(data instanceof Array) || data.length === 0) {
              return {};
          }

          const map = {};
          let name;
          for (let i = 0; i < data.length; i++) {
              // array中item为多为数组。
              if (data[i] instanceof Array) {
                  data[i].flat(Infinity).forEach((item) => {
                      name = item;
                      if (!map[name]) {
                          map[name] = [];
                      }
                      map[name].push(item);
                  });
              }

              // array中item不为json。
              if (!(data[i] instanceof Object)) {
                  name = data[i];
                  if (name) {
                      if (!map[name]) {
                          map[name] = [];
                      }
                      map[name].push(data[i]);
                  }
              }

              // array中item为json对象。
              if (data[i] instanceof Object) {
                  name = data[i][keyName];
                  if (name) {
                      if (!map[name]) {
                          map[name] = [];
                      }
                      map[name].push(data[i]);
                  }
              }
          }
          return map;
      }

      // Step2 把map转成数组
      function mapToArray(mapData) {
          if (mapData) {
              const formatArr = [];
              Object.values(mapData).map((item) => formatArr.push(item));
              return formatArr;
          }
          return [];
      }

      // 测试
      const arr1 = [
        { key: 'a', lastName: '李世民', organization: '1' },
        { key: 'b', lastName: '朱元璋', organization: '2' },
        { key: 'c', lastName: '铁木真', organization: '3' },
        { key: 'c', lastName: '刘邦', organization: '4' },
        { key: 'a', lastName: '孙悟空', organization: '1' },
        { key: 'a', lastName: '刘彻', organization: '2' },
        { key: 'b', lastName: '曹操', organization: '2' },
        { key: 'a', lastName: '安吉拉', organization: '3' },
        { lastName: '赵云', organization: '3' },
      ];

      const map1 = arrayToMap(arr1, 'key');
      const array1 = mapToArray(map1);
      console.log('筛选后对象：', map1);
        //  {
        //     a: [
        //       { key: 'a', lastName: '李世民', organization: '1' },
        //       { key: 'a', lastName: '孙悟空', organization: '1' },
        //       { key: 'a', lastName: '刘彻', organization: '2' },
        //       { key: 'a', lastName: '安吉拉', organization: '3' }
        //     ],
        //     b: [
        //       { key: 'b', lastName: '朱元璋', organization: '2' },
        //       { key: 'b', lastName: '曹操', organization: '2' }
        //     ],
        //     c: [
        //       { key: 'c', lastName: '铁木真', organization: '3' },
        //       { key: 'c', lastName: '刘邦', organization: '4' }
        //     ]
        //  }
      console.log('筛选后数组：', array1);
        //   [
        //     [
        //       { key: 'a', lastName: '李世民', organization: '1' },
        //       { key: 'a', lastName: '孙悟空', organization: '1' },
        //       { key: 'a', lastName: '刘彻', organization: '2' },
        //       { key: 'a', lastName: '安吉拉', organization: '3' }
        //     ],
        //     [
        //       { key: 'b', lastName: '朱元璋', organization: '2' },
        //       { key: 'b', lastName: '曹操', organization: '2' }
        //     ],
        //     [
        //       { key: 'c', lastName: '铁木真', organization: '3' },
        //       { key: 'c', lastName: '刘邦', organization: '4' }
        //     ]
        //   ]


      const arr2 = [
        186766, 167040, 167040, 167040, 167040, 167040, 167040, 167040, 167040,
        167040, 167040, 167040, 167040, 151380, 151380, 105633, 105570, 105570,
        105570, 100980, 100980, 100062, 100062, 100062, 100062, 100062, 100062,
        100062, 100062, 99990, 99990, 99990, 99990, 99990, 99144, 83853, 83853,
        79233, 58080, 57600, 57596, 57596, 57596, 47520, 45880, 45880, 41011, 31329,
        31329, 31329, 31329, 26928, 26880, 26880, 26811, 20328, 20328, 19266, 18644,
        18585, 17490, 16800, 12106, 12106, 11286, 8769, 6976, 6976, 6976,
      ];

      const map2 = arrayToMap(arr2);
      const array2 = mapToArray(map2);
      console.log('筛选后对象：', map2);
        //  {
        //     '6976': [ 6976, 6976, 6976 ],
        //     '8769': [ 8769 ],
        //     '11286': [ 11286 ],
        //     '12106': [ 12106, 12106 ],
        //     '16800': [ 16800 ],
        //     '17490': [ 17490 ],
        //     '18585': [ 18585 ],
        //     '18644': [ 18644 ],
        //     '19266': [ 19266 ],
        //     '20328': [ 20328, 20328 ],
        //     '26811': [ 26811 ],
        //     '26880': [ 26880, 26880 ],
        //     '26928': [ 26928 ],
        //     '31329': [ 31329, 31329, 31329, 31329 ],
        //     '41011': [ 41011 ],
        //     '45880': [ 45880, 45880 ],
        //     '47520': [ 47520 ],
        //     '57596': [ 57596, 57596, 57596 ],
        //     '57600': [ 57600 ],
        //     '58080': [ 58080 ],
        //     '79233': [ 79233 ],
        //     '83853': [ 83853, 83853 ],
        //     '99144': [ 99144 ],
        //     '99990': [ 99990, 99990, 99990, 99990, 99990 ],
        //     '100062': [
        //       100062, 100062,
        //       100062, 100062,
        //       100062, 100062,
        //       100062, 100062
        //     ],
        //     '100980': [ 100980, 100980 ],
        //     '105570': [ 105570, 105570, 105570 ],
        //     '105633': [ 105633 ],
        //     '151380': [ 151380, 151380 ],
        //     '167040': [
        //       167040, 167040,
        //       167040, 167040,
        //       167040, 167040,
        //       167040, 167040,
        //       167040, 167040,
        //       167040, 167040
        //     ],
        //     '186766': [ 186766 ]
        //   }
      console.log('筛选后数组：', array2);
        //  [
        //     [ 6976, 6976, 6976 ],
        //     [ 8769 ],
        //     [ 11286 ],
        //     [ 12106, 12106 ],
        //     [ 16800 ],
        //     [ 17490 ],
        //     [ 18585 ],
        //     [ 18644 ],
        //     [ 19266 ],
        //     [ 20328, 20328 ],
        //     [ 26811 ],
        //     [ 26880, 26880 ],
        //     [ 26928 ],
        //     [ 31329, 31329, 31329, 31329 ],
        //     [ 41011 ],
        //     [ 45880, 45880 ],
        //     [ 47520 ],
        //     [ 57596, 57596, 57596 ],
        //     [ 57600 ],
        //     [ 58080 ],
        //     [ 79233 ],
        //     [ 83853, 83853 ],
        //     [ 99144 ],
        //     [ 99990, 99990, 99990, 99990, 99990 ],
        //     [
        //       100062, 100062,
        //       100062, 100062,
        //       100062, 100062,
        //       100062, 100062
        //     ],
        //     [ 100980, 100980 ],
        //     [ 105570, 105570, 105570 ],
        //     [ 105633 ],
        //     [ 151380, 151380 ],
        //     [
        //       167040, 167040,
        //       167040, 167040,
        //       167040, 167040,
        //       167040, 167040,
        //       167040, 167040,
        //       167040, 167040
        //     ],
        //     [ 186766 ]
        //   ]

      const arr3 = [
        { name: '谭金涛', age: 23, tall: 175 },
        { name: '戚思宁', age: 23, tall: 173 },
        { name: '柳晔', age: 24, tall: 168 },
        { name: '徐晨彦', age: 24, tall: 161 },
        { name: '白帆', age: 21, tall: 161 },
        { name: '王语嫣', age: 21, tall: 167 },
        [7, 4, 0],
        [1, [2, 3]],
        [[1, 2, [4, 5]]],
        1,
        2,
        3,
      ];

      const map3 = arrayToMap(arr3, 'age');
      const array3 = mapToArray(map3);
      console.log('筛选后对象：', map3);
        //  {
        //     '0': [ 0 ],
        //     '1': [ 1, 1, 1 ],
        //     '2': [ 2, 2, 2 ],
        //     '3': [ 3, 3 ],
        //     '4': [ 4, 4 ],
        //     '5': [ 5 ],
        //     '7': [ 7 ],
        //     '21': [
        //       { name: '白帆', age: 21, tall: 161 },
        //       { name: '王语嫣', age: 21, tall: 167 }
        //     ],
        //     '23': [
        //       { name: '谭金涛', age: 23, tall: 175 },
        //       { name: '戚思宁', age: 23, tall: 173 }
        //     ],
        //     '24': [
        //       { name: '柳晔', age: 24, tall: 168 },
        //       { name: '徐晨彦', age: 24, tall: 161 }
        //     ]
        //  }
      console.log('筛选后数组：', array3);
        //   [
        //     [ 0 ],
        //     [ 1, 1, 1 ],
        //     [ 2, 2, 2 ],
        //     [ 3, 3 ],
        //     [ 4, 4 ],
        //     [ 5 ],
        //     [ 7 ],
        //     [
        //       { name: '白帆', age: 21, tall: 161 },
        //       { name: '王语嫣', age: 21, tall: 167 }
        //     ],
        //     [
        //       { name: '谭金涛', age: 23, tall: 175 },
        //       { name: '戚思宁', age: 23, tall: 173 }
        //     ],
        //     [
        //       { name: '柳晔', age: 24, tall: 168 },
        //       { name: '徐晨彦', age: 24, tall: 161 }
        //     ]
        //   ]

    `;
  }

  // *获取数组最后一个元素
  lastArrayItem() {
    return `
      // 获取数组最后一个元素

      Array.at(-1);

      [1,2,3,4,5].at(-1); // 5

    `;
  }

  // *筛选出两个数组相同值组成数组
  filterArray() {
    return `
      // 筛选出两个数组相同值组成数组

      // arr: 被匹配的数组
      // matchArr: 条件数组

      let arr = [{name:'1',age:1},{name:'2',age:2},{name:'3',age:3},{name:'4',age:4}];

      let matchArr = ['1','3','7','9'];

      方法1:
        let newArr = arr.map(i => matchArr.map(o => { if (o === i.name) return i })).flat(Infinity).filter(Boolean);
        // [{name:'1',age:1},{name:'3',age:3}]

      方法2:
        let newArr = arr.filter(i=> matchArr.includes(i.name));
        // [{name:'1',age:1},{name:'3',age:3}]

    `;
  }

  // *筛选出数组中重复最多的值
  filterArrayRepetition() {
    return `
      // 筛选出数组中重复最多的值，组成新数组
      const filterArrayRepetition = (array) => {
        let arr = []; // 存放最多次数的值
        let temp = {}; // 保存每个数的个数
        let res = 0; // 记录出现最多次数的个数
        array.forEach((item) => {
            if (temp[item] === undefined) { // 如果这个数之前没出现过
                temp[item] = 1; // 将它的次数赋为1
            } else {
                temp[item]++; // 次数++
            }
        });
        for (let i in temp) {
            // 遍历下标
            if (temp[i] > res) {// 如果这个数的次数比之前出现过的最多次数还多
                arr.length = 0; // 清空数组
                arr.push(i); // 将这个数加入最终答案，因为属性名是字符串，将它转换为数字
                res = temp[i]; // 更新最大次数
            } else if (temp[i] === res) {
                // 出现次数相同的数字
                arr.push(i); // 将答案加入数组
                res = temp[i]; // 更新最大次数
            }
        }
        return arr;
    };

    const result = ['mqZPaNKiLoyiAxboAhQO5A', '4Pl6Hd7JqbAeazPyZtxg5A', 'PS37Y_1TCy1E4t48Kg9LrQ', 'NJt83GheHI-LvUcRrjrZxg', 'aTSSk6oEn3TM02DEU3jPuA', '2PkMJOTIz-KxEcoUHwTEvA', 'cWuHkPJUWf_L64s2gregDQ', '_aXbgqSod0OQDjaBcu_Njg', 'aTSSk6oEn3TM02DEU3jPuA', '2PkMJOTIz-KxEcoUHwTEvA', 'wsf0Vn2mGxtzXgHOS2vjkg', 'nHP3mZmOvVyZti5CUVbucw', 'Of3m9Adl2F-j7OSusipuxQ', '_rc1XHOt_dhdbUt-g3F7iQ', 'cWuHkPJUWf_L64s2gregDQ', 'mqZPaNKiLoyiAxboAhQO5A', 'PS37Y_1TCy1E4t48Kg9LrQ', 'aTSSk6oEn3TM02DEU3jPuA', 'YDVxsy7-npw2kIjXwWYqXA', 'ajygfh8S5R0rzwSffds2OA', 'wsf0Vn2mGxtzXgHOS2vjkg'];

    const newArr = filterArrayRepetition(result); // ['aTSSk6oEn3TM02DEU3jPuA']

    `;
  }
  // *从数组中过滤出假值
  filterBooleanArray() {
    return `
      // 从数组中过滤出虚假值，0，undefined，null，false，""，''可以通过以下方法省略。

      const array = [3, 0, 6, 7, '', false];

      const newArr = array.filter(Boolean);

      //  [3, 6, 7]

    `;
  }

  // *数组求和、取数组最大值、最小值
  reduceArray() {
    return `
      // 数组求和、取数组最大值、最小值

      const arr = [1, 4, 7, 2, 5, 8, 3];

      // 求和:
      arr.reduce((a, b) => a + b);  // 30

      // 取最大值:
      arr.reduce((a, b) => (a > b ? a : b)); // 8

      // 取最小值:
      arr.reduce((a, b) => (a < b ? a : b)); // 1

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

  // *数组按照数组中某一对象进行排序
  sortItemArray() {
    return `
      // 数组按照数组中某一对象进行排序

      // a,b : Array.sort(a,b) <固定>形参;
      // xxx : 目标数组需要进行排序的key;
      // a.xxx - b.xxx 正序 | b.xxx - a.xxx 倒序;

      function sortItemArray (a,b) {
        return a.label - b.label; // (正序) 1 2 3 4 ...
        return b.xxx - a.xxx;     // (倒序) 4 3 2 1 ...
      };

      let oldArr = [
        {"value":"甲","label":1},
        {"value":"丁","label":4},
        {"value":"戊","label":5},
        {"value":"乙","label":2},
        {"value":"己","label":6},
        {"value":"丙","label":3}
      ];

      let newArr1 = oldArr.sort(sortItemArray); // 正序 a-b
      let newArr2 = oldArr.sort(sortItemArray); // 倒序 b-a

    `;
  }

  // *交换数组中两个元素
  swapItems() {
    return `
      // 交换数组中两个元素

      // arr: 数组
      // index1: 数组需要交换的下标1
      // index2: 数组需要交换的下标2

      function swapItems (arr, index1, index2) {
        arr[index1] = arr.splice(index2, 1, arr[index1])[0];
        return arr;
      };

      swapItems([1,3,2,4,5],2,1)         // [1, 2, 3, 4, 5]
      swapItems([{a:1},{c:3},{b:2}],1,2) // [{a:1},{b:2},{c:3}]

    `;
  }
  // *[Ld]将数组拆分成多个【size】长的区块，组成新数组
  chunkArray() {
    return `
        /*
          将数组拆分成多个【size】长的区块，生成新数组。
          如果【Array】无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
        */

        _.chunk(array, [size=1])

        let arr1 = ['a1', 'b2', 'c3', 'd4', 'e5']
        let arr2 = [['a', 'b'], 'c', 'd','e']

        let newArr1 = _.chunk(arr1, 2);
        // → [['a1', 'b2'], ['c3', 'd4'], ['e5']];

        let newArr2 = _.chunk(arr2, 2);
        // → [[["a","b"],"c"], ["d","e"]];

      `;
  }

  // *[Ld]剔除数组中的假值，返回新数组
  compactArray() {
    return `
        /*
          剔除数组中的假值，返回新数组。
          例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
        */

        _.compact(array);

        _.compact([0, 1, false, 2, '', 3]);
        // → [1,2,3];

        _.compact([[NaN, 0, false], '0', 740]);
        // → [[NaN, 0, false],'0', 740];

      `;
  }

  // *[Ld]将【Array】与任何数组或值拼接，返回新数组
  concatArray() {
    return `
        /*
          将【Array】与任何数组、值拼接，返回新数组
        */

        _.concat(Array,[values]);

        let arr = [1, 2, 3, 4];

        _.concat(arr, 5, 6, [7]);
        // → [1, 2, 3, 4, 5, 6, 7];

        _.concat(arr, 2, [3], [[4]]);
        // → [1, 2, 3, 4, 5, 6, [7]];

      `;
  }

  // *[Ld]筛选出【Array】中需要被排除的值[values]，返回新数组
  difference() {
    return `
      /*
          筛选出【Array】中需要被排除的值[values]，返回新数组。
          
          array: 被检查的数组
          [values]:(...Array) 需要被排除的值（必须是数组形式）
      */

      _.difference(array, [values]);

      let arr = [1, 2, 3];
      _.difference(arr, [2, 3]);
      // → [1];

      let arr2 = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
      _.difference(arr2, ['一', '二', '三', '四']);
      // → ['零', '五', '六', '七', '八', '九'];

    `;
  }
  // *[Ld]获取数组中第一个元素
  getFirstElement() {
    return `
      /*
        获取数组中第一个元素

        array: 被查找的数组
      */

      _.head(array)

      const list = [
        { userName: '谭金涛', active: false },
        { userName: '戚思宁', active: false },
        { userName: '柳晔', active: true },
        { userName: '徐晨彦', active: true },
      ];

      _.head(list);
      // →  { userName: '谭金涛', active: false }


      const arr = [1, 2, 3];
      _.head(arr)
      // 1

    `;
  }

  // *[Ld]获取数组中最后一个元素
  getLastElement() {
    return `
      /*
        获取数组中最后一项
      */

      _.last(array);

      const arr = [1, 2, 3, 4, 5];
      _.last(arr);
      // → 5;

    `;
  }

  // *[Ld]创建一个切片数组，去除Array前面的n个元素。（n默认值为1。）
  dropStartArray() {
    return `
      /*
        创建一个切片数组，去除array★前面的★n个元素（n默认值为1。）

        array: 被裁剪的数组
        n: 裁剪数组★前★的n位
      */

      _.drop(array, n=1)

      const arr1 = [1, 2, 3, 4, 5];
      _.drop(arr1);
      // → [2, 3, 4, 5];

      const arr2 = ['一', '二', '三', '四'];
      _.drop(arr2, 2);
      // → ['三', '四'];

      const arr3 = ['壹', '贰', '叁', '肆'];
      _.drop(arr3, 10);
      // → []

      const arr4 = ['h', 'e', 'l', 'l', 'o'];
      _.drop(arr4, 0);
      // → ['h', 'e', 'l', 'l', 'o'];

    `;
  }

  // *[Ld]创建一个切片数组，去除Array后面的n个元素。（n默认值为1。）
  dropEndArray() {
    return `
      /*
        创建一个切片数组，去除array★后面的★n个元素（n默认值为1。）

        array: 被裁剪的数组
        n: 裁剪数组★后★的n位
      */

      _.dropRight(array, n=1)

      const arr1 = [1, 2, 3, 4, 5];
      _.dropRight(arr1);
      // → [1, 2, 3, 4];

      const arr2 = ['一', '二', '三', '四'];
      _.dropRight(arr2, 2);
      // → ['一', '二'];

      const arr3 = ['壹', '贰', '叁', '肆'];
      _.dropRight(arr3, 10);
      // → []

      const arr4 = ['h', 'e', 'l', 'l', 'o'];
      _.dropRight(arr4, 0);
      // → ['h', 'e', 'l', 'l', 'o'];

    `;
  }

  // *[Ld]创建一个新数组，使用 value 值来填充（替换） Array;
  fillArray() {
    return `
      /*
        使用 value 值来填充（替换） Array，从start位置开始, 到length位置结束。
        PS:这个方法会改变原 array（注：不是创建新数组）

        Array: 要填充改变的数组
        value: 填充给Array的值
        [start=0]: 开始下标
        [end=array.length]: 结束下标（length） 类似于字符串的substr

      */

      _.fill(array, value, [start=0], [end=array.length]);

      const arr1 = [1, 2, 3, 4, 5];
      const newArr1 = _.fill(arr1, 'tjt');
      console.log('newArr1:', newArr1); // → ['tjt', 'tjt', 'tjt', 'tjt', 'tjt']
      console.log('arr1:', arr1);// → ['tjt', 'tjt', 'tjt', 'tjt', 'tjt']

      const arr2 = [1, 2, 3, 4, 5];
      const newArr2 = _.fill(arr2, 'qsn',1,4);
      console.log('newArr2:', newArr2); // → [1, 'qsn', 'qsn', 'qsn', 5]
      console.log('arr2:', arr2);  // → [1, 'qsn', 'qsn', 'qsn', 5]

      const newArr3 = _.fill(new Array(3), 7);
      console.log('newArr3:', newArr3); // → [7, 7, 7]

    `;
  }

  // *[Ld]返回数组中符合条件的第一个下标【从前向后】
  findIndex() {
    return `
      /*
        返回数组中符合条件的第一个下标【从前向后】。
        该方法类似_.find，区别是该方法返回第一个通过 condition 判断为真值的元素的索引值（index），而不是元素本身。

        array: 要搜索的数组
        condition: 条件 function(o){return ....} / {key:value} / ['key',value];
      */

      _.findIndex(array,condition)

      const users = [
        { userName: '谭金涛', active: false },
        { userName: '戚思宁', active: false },
        { userName: '柳晔', active: true },
        { userName: '徐晨彦', active: true },
      ];

      _.findIndex(users, { userName: '戚思宁' });
      // → 1

      _.findIndex(users, ['active', true]);
      // → 2

      _.findIndex(users, function (o) {
        return o.userName === '徐晨彦';
      });
      // → 3


      const arr = [1, 2, 3, 4, 5];
      _.findIndex(arr, function (o) {
        return o === 3;
      });
      // → 2

    `;
  }

  // *[Ld]返回数组中符合条件的第一个下标【从后向前】
  findLastIndex() {
    return `
      /*
        返回数组中符合条件的第一个下标【从后向前】。
        该方法类似_.find，区别是该方法返回第一个通过 condition 判断为真值的元素的索引值（index），而不是元素本身。

        array: 要搜索的数组
        condition: 条件 function(o){return ....} / {key:value} / ['key',value];
      */

      _.findLastIndex(array,condition)

      const users = [
        { userName: '谭金涛', active: false },
        { userName: '谭金涛', active: false },
        { userName: '谭金涛', active: true },
        { userName: '谭金涛', active: false },
      ];

      _.findLastIndex(users, { userName: '谭金涛' });
      // → 3

      _.findLastIndex(users, ['active', true]);
      // → 2

      _.findLastIndex(users, function (o) {
        return o.userName === '谭金涛' && o.active===false;
      });
      // → 3


      const arr = [1, 2, 3, 2, 5];
      _.findLastIndex(arr, function (o) {
        return o === 2;
      });
      // → 3

    `;
  }

  // *[Ld]返回value在数组中的下标，没有则返回-1
  indexOfArray() {
    return `
      /*
        返回value在数组中的下标，没有则返回-1

        array: 需要被检索的数组
        value: 需要被查找的值
        [fromIndex=0]: 从下标几开始查找，默认是0
      */

      _.indexOf(array,value,[fromIndex=0])

      const arr = [1, 2, 3, 1, 2, 3];

      _.indexOf(arr, 2);
      // → 1

      _.indexOf(arr, 2, 3);
      // → 4

    `;
  }

  // *[Ld]返回数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）
  initialArray() {
    return `
      /*
        返回数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）

        array: 需要被去除最后一个元素的数组
      */

      _.initial(array);

      const arr = [1, 2, 3];

      _.initial(arr);
      // → [1, 2]

    `;
  }

  // *[Ld]返回新的去重后的数组
  uniqArray() {
    return `
      /* 
        返回新的去重后的数组

        array: 需要被去重的数组
      */

      _.uniq(array);

      const arr = [4, 2, 'a', 'b', 'b', '我', '你', '你', 1, 2, 3, 4];

      _.uniq(arr);
      // → [4, 2, 'a', 'b', '我', '你', 1, 3];

    `;
  }

  // *[Ld]返回新的去重数组（1.能处理复杂数组 2.能附带去重条件）
  uniqByArray() {
    return `
      /*
        返回新的去重数组，跟_.uniq(array)相似。
        1.能处理复杂数组 
        2.能附带去重条件

        array: 需要被去重的数组
        (Array|Function|Object|string): 数组按照什么条件去重
      */

      _.uniqBy(array, (Array|Function|Object|string));

      const arr = [{name:'谭金涛',key:'tjt'},{name:'戚思宁',key:'740'},{name:'柳晔',key:'ly'},{name:'谭金涛',key:'abc'},{name:'陆游',key:'ly'}];

      const uniqByArr1 = _.uniqBy(arr,(item)=> item.name); 
      // → [{"name":"谭金涛","key":"tjt"},{"name":"戚思宁","key":"740"},{"name":"柳晔","key":"ly"},{"name":"陆游","key":"ly"}];

      const uniqByArr2 = _.uniqBy(arr,(item)=> item.key); 
      // → [{"name":"谭金涛","key":"tjt"},{"name":"戚思宁","key":"740"},{"name":"柳晔","key":"ly"},{"name":"谭金涛","key":"abc"}];

      const arr2 = [1.2, 2.4, 3.3, 4, 1.3, 1.1, 2.1];
      _.uniqBy(arr2, Math.floor);
      // → [1.2, 2.4, 3.3, 4];

      const arr3 = [{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }];
      _.uniqBy(arr3, 'x');
      // → [{ 'x': 1 }, { 'x': 2 }];

      const arr3 = [[1, 2, 3], [1, 2, 3], [3, 2, 1], [1, 3, 2]];
      _.uniqBy(arr3, [1, 2, 3]);
      // → [[1,2,3],[1,3,2]];

    `;
  }

  // *[Ld]返回新的去重数组（去重数组中相同的json）
  uniqWithArray() {
    return `
      /*
        返回新的去重数组 （去重数组中相同的json）

        array: 需要被去重的数组
        _.isEqual: 【深比较】两者的值是否相等 👇  _.isEqual功能
        const obj = { 'a': 1 };
        const otherObj = { 'a': 1 };
        
        _.isEqual(obj, otherObj);
        // => true
        obj === other;
        // => false
      */

      const objArr = [{ 'a': 1, 'b': 2 }, { 'a': 2, 'b': 1 }, { 'a': 1, 'b': 2 }, { 'a': 1, b: 2 }, { c: 1, d: 2 }];

      _.uniqWith(objArr, _.isEqual);
      // → [{"a":1,"b":2},{"a":2,"b":1},{"c":1,"d":2}];

    `;
  }

  // Ps:JSON操作
  // *遍历json转为数组
  mapJson() {
    return `
      // 遍历json数组

      // json: json格式数据
      // keyName?:string 键值  'key' || 'value'   按照key返回新数组还是value返回新数组

      const jsonKeysOrValuesToArray = (jsonData,keyName) => {
          const arr = [];

          Object.entries(jsonData).map((item) => {
              const [keys, values] = item;

              if (keyName === 'key') {
                  arr.push(keys);
                  return;
              }

              arr.push(values);
          });

          return arr;
      };

      const json = { a: '谭金涛', b: '戚思宁', c: '柳晔', d: '徐晨彦' };

      jsonKeysOrValuesToArray(json, 'key');   // [ 'a', 'b', 'c', 'd' ];
      jsonKeysOrValuesToArray(json, 'value'); // ['谭金涛', '戚思宁', '柳晔', '徐晨彦']';

    `;
  }

  // *判断json对象里面是否是全为空的属性值 || 判断json对象里是否全为假值
  isObjEmpty() {
    return `
      // 判断json对象里面是否是全为空的属性值 || 判断json对象里是否全为假值

      false: json中 有不为空/假值的值。
      true: json 中 全为空值undefined/假值。

      const isObjEmpty = (obj) => {
          let flag = true;
          if (obj) {
              flag = false;
              let arr = Object.keys(obj).map(function (i) {
                  return obj[i];
              });
              let arrV2 = [];
              for (let j of arr) {
                  if (!j) {
                      arrV2.push(j);
                  }
              }
              if (arrV2.length == arr.length) {
                  flag = true;
              }
              return flag;
          }
          return flag;
      };

      const emptyJson = {name:null,age:undefined,tall:'',work:false};
      isObjEmpty(emptyJson); // true json中全为假值。

      const json = {a:1,b:2,c:undefined};
      isObjEmpty(json); // true json中不是全为假值。

    `;
  }

  // *删除json中假值，生成新json
  removeNullAndUndefinedJSON() {
    return `
      // 删除json中假值，生成新json

      // jsonData： json数据

      const removeNullAndUndefinedJSON = (jsonData) => {
        const newJSON = {};

        Object.entries(jsonData).forEach((item) => {
            const [keys, values] = item;
            if (keys && values || keys && String(values) === '0' ) {
                Object.defineProperty(newJSON, keys, {
                    value: values,
                    enumerable: true,
                    configurable: true,
                });
            }
        });
        return newJSON;
      };

    const json = { 张三: 1, 李四: 1, undefined, 谭金涛: 3 , 'name': null ,age: 0};

    removeNullAndUndefinedJSON(json); // { '张三': 1, '李四': 1, '谭金涛': 3, age: 0 }

    `;
  }

  // *打平JSON，找到键值对应的枚举，生成新数组
  flatJSON() {
    return `
      // 打平JSON，找到键值对应的枚举，生成新数组

      // jsonData： json数据
      // contextEnum：json键值对应的枚举

      const flatJSON = (jsonData, contextEnum) =>
          Object.entries(jsonData).map((v) => {
            const [key, value] = v;
            if (Object.prototype.toString.call(value) === '[object Object]') {
                return flatJSON(value, contextEnum);
            }
            return contextEnum[key] || null;
      });

      // 集装箱信息枚举
      const containerContextEnum = {
          frontId: '物品前面对应的id',
          itemId: '物品id',
          itemName: '物品名',
          height: '包装箱高度',
          width: '包装箱宽度',
          length: '包装箱长度',
          containerId: '包装箱id',
          price: '价格',
          volume: '体积',
          weight: '重量',
      };

      // 接口数据
      const data = {
          containerId: '集装箱01号',
          cube: { height: 2698, length: 12032, volume: 76351414272, width: 2352 },
          price: 3400,
          volume: 76351414272,
          weight: 30400,
      };

      flatJSON(data, containerContextEnum); // [ '包装箱id', [ '包装箱高度', '包装箱长度', '体积', '包装箱宽度' ], '价格', '体积', '重量' ];

    `;
  }

  // Ps:URL操作
  // *获取URL上参数信息
  getUrlInfo() {
    return `
      // 获取URL上参数信息

      // https://www.baidu.com/s?ie=UTF-8&wd=baidu

      getUrlInfo() // {ie: 'UTF-8', wd: 'baidu'}

      const getUrlInfo = ()=> {
        let urlInfo = {};
        let flag = window.location.href.split('').includes('?'); //判断是否传参。

        if (flag) {
          let keyWords = window.location.href.split('?')[1].split('&');

          // '?' :  获取https://hzcac2-dev.alibaba.net/app/admin/admin-layout/case-manage-list?pageCode=case-manage-secretary#id=ELPEeS-2QNz3w4yjxO_3iQ (？后的内容)。
          // 如果想要获取（#)后面的内容, 就改成 let keyWords = window.location.href.split('#')[1].split('&');

          for (let i = 0; i < keyWords.length; i++) {
            let arr1 = keyWords[i].split('=');
            urlInfo[arr1[0]] = arr1[1];
          }
          let key = Object.keys(urlInfo)[0];

          console.log('key:', key);         // url上的键值
          console.log('urlInfo:', urlInfo); // url上键值所对应的参数集合json
          return urlInfo;                   // 函数返回值

        } else {
          console.log('未携带参数');
        }
      };


    `;
  }

  // *获取URL上某一键值对应的值
  getUrlKeyInfo() {
    return `
      // 获取URL上某一键值对应的值

      // https://www.baidu.com/s?ie=UTF-8&wd=baidu

      getUrlKeyInfo('wd') // 'baidu'

      const getUrlKeyInfo =(urlKey)=>{
        return new URLSearchParams(window.location.search)
        .get(urlKey)
      }

    `;
  }

  // *与location相关的一些操作
  aboutLocation() {
    return `
      // 与location相关的一些操作

        window.history.back()     // 返回前一条页面

        window.history.forward()  // 返回后一条页面

        window.history.go()
          /*
              0:   返回当前的页面
              -1:	  返回前一次页面
              1:   返回后一次页面
            -n/n:	  返回前n次页面 / 后n次页面
          */

        window.open(url,null,style)  // 打开新窗口,用逗号隔开","
          /*
              第一个参数：'新开窗口的URL'
            ☆ 第二个参数： 填写形参（新窗口打开），不填写形参（本窗口刷新）
              第三个参数： 设置新打开的窗口大小 'width=400px,height=400px'

              window.open('http://jd.com','','width=200px,height=200px') ★必须是 width=xxxpx, 不能写css样式★
          */

        window.close()  // 关闭当前页面

        window.location.reload() // 重载当前页面

        window.location.href ='xxxx' // 让页面原地跳转至当前URL

        window.location.hash="#admin" // 更改路由hash值,不会触发页面刷新

        window.location.search='?key=xxxxx' // 返回或者设置URL问号(?)后面的值,会触发页面刷新
          /*
            https://hzcac2-dev.alibaba.net/app/case-detail?id=kOk2H9mJH3bOpM7Bflh3JQ&pageCode=case-manage-secretary

            ?id=kOk2H9mJH3bOpM7Bflh3JQ&pageCode=case-manage-secretary
          */

        window.location.port // 返回浏览器端口号
          /*
            http://localhost:53079/index#util-75

            53079
          */

        window.location.hostname  // 返回或者设置主机名
          /*
            https://hzcac2-dev.alibaba.net/app/case-detail?id=kOk2H9mJH3bOpM7Bflh3JQ&pageCode=case-manage-secretary

            hzcac2-dev.alibaba.net
          */

        window.location.pathname='xxxxx' 返回或者设置路由部分,会触发页面刷新
          /*
            window.location.pathname= '/app/admin/admin-layout/examine-approve-list'
          */

        encodeURIComponent('谭金涛'); // 字符串转encode码
        decodeURI('%E8%B0%AD%E9%87%91%E6%B6%9B'); // encode码转字符串


    `;
  }

  // Ps:存储(localStorage/sessionStorage)操作
  // *获取localStorage
  getLocalStorage() {
    return `
      // 获取localStorage

      // key: 键值

      const getLocalStorage = (key) => {
        if (!key) return;
        return window.localStorage.getItem(key);
      };

    `;
  }

  // *存储localStorage
  setLocalStorage() {
    return `
      // 存储localStorage

      // key: 键值
      // value: 值

      const setLocalStorage = (key, value) => {
        if (!key) return;
        if (typeof value !== 'string') {
          value = JSON.stringify(value);
        }
        window.localStorage.setItem(key, value);
      };

    `;
  }

  // *删除localStorage
  removeLocalStorage() {
    return `
      // 删除localStorage

      // key: 键值

      const removeLocalStorage = (key) => {
        if (!key) return;
        window.localStorage.removeItem(key);
      };

    `;
  }

  // *获取sessionStorage
  getSessionStorage() {
    return `
      // 获取sessionStorage

      // key: 键值

      const getSessionStorage = (key) => {
        if (!key) return;
         return window.sessionStorage.getItem(key)
      };

    `;
  }

  // *存储sessionStorage
  setSessionStorage() {
    return `
      // 存储sessionStorage

      // key: 键值
      // value: 值

      const setSessionStorage = (key, value) => {
        if (!key) return;
        if (typeof value !== 'string') {
          value = JSON.stringify(value);
        }
        window.sessionStorage.setItem(key, value)
      };

    `;
  }

  // *删除sessionStorage
  removeSessionStorage() {
    return `
      // 删除sessionStorage

      // key: 键值

      const sessionStorageRemove = (key) => {
        if (!key) return;
          window.sessionStorage.removeItem(key)
      };

    `;
  }

  // Ps:cookie操作
  // *获取cookie
  getCookie() {
    return `
      // 获取cookie

      // key: 键值

      const getCookie = (key) => {
        const cookieStr = unescape(document.cookie);
            const arr = cookieStr.split('; ');
            let cookieValue = '';
            for (let i = 0; i < arr.length; i++) {
                const temp = arr[i].split('=');
                if (temp[0] === key) {
                    cookieValue = temp[1];
                    break;
            }
        }
        return cookieValue;
      };

    `;
  }

  // *设置cookie
  setCookie() {
    return `
      // 设置cookie

      // key:    键值
      // value:  值
      // days:   持续月数

      const setCookie = (key, value, months=1) => {
        const exp = new Date();
        exp.setTime(exp.getTime() + months*30*24*60*60*1000);
        document.cookie = key + '=' + value + ';expires=' + exp.toUTCString();
      };
      
      setCookie('tjt','哈哈哈哈哈哈')

    `;
  }

  // *删除cookie
  delCookie() {
    return `
      // 删除cookie

      // key: 键值

      const delCookie = (key) => {
        document.cookie = encodeURIComponent(key) + '=;expires=' + new Date();
      };

    `;
  }

  // Ps:格式校验
  // *校验身份证号码
  checkCardNo() {
    return `
      // 校验身份证号码

      // value: 值

      const checkCardNo = (value) => {
        const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        return reg.test(value);
      };

    `;
  }

  // *校验是否包含中文
  haveCNChars() {
    return `
      // 校验是否包含中文

      // value: 值

      const haveCNChars = (value) => {
        const reg = /[\\u4e00-\\u9fa5]/;
        return reg.test(value);
      };

    `;
  }

  // *校验是否为中国大陆的邮政编码
  isPostCode() {
    return `
      // 校验是否为中国大陆的邮政编码

      // value: 值

      const isPostCode = (value) => {
        const reg = /^[1-9][0-9]{5}$/;
        return reg.test(value.toString());
      };

    `;
  }

  // *校验是否为IPv6地址
  isIPv6() {
    return `
      // 校验是否为IPv6地址

      // value: 值

      const isIPv6 = (str) => {
        return Boolean(str.match(/:/g)?str.match(/:/g).length<=7:false && /::/.test(str)?/^([\da-f]{1,4}(:|::)){1,6}[\da-f]{1,4}$/i.test(str):/^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i.test(str));
      };

    `;
  }

  // *校验是否为邮箱地址
  isEmail() {
    return `
      // 校验是否为邮箱地址

      // value: 值

      const isEmail = (value) => {
        const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        return reg.test(value);
      };

    `;
  }

  // *校验是否为中国大陆手机号
  isTel() {
    return `
      // 校验是否为中国大陆手机号

      // value: 值

      const isTel = (value) => {
        const reg = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
        return reg.test(value.toString());
      };

    `;
  }

  // *校验是否包含emoji表情
  isEmojiCharacter() {
    return `
      // 校验是否包含emoji表情

      // value: 值

      const isEmojiCharacter = (value) => {
        value = String(value);
        for (let i = 0; i < value.length; i++) {
            const hs = value.charCodeAt(i);
            if (0xd800 <= hs && hs <= 0xdbff) {
                if (value.length > 1) {
                    const ls = value.charCodeAt(i + 1);
                    const uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
                    if (0x1d000 <= uc && uc <= 0x1f77f) {
                        return true;
                    }
                }
            } else if (value.length > 1) {
                const ls = value.charCodeAt(i + 1);
                if (ls == 0x20e3) {
                    return true;
                }
            } else {
                if (0x2100 <= hs && hs <= 0x27ff) {
                    return true;
                } else if (0x2B05 <= hs && hs <= 0x2b07) {
                    return true;
                } else if (0x2934 <= hs && hs <= 0x2935) {
                    return true;
                } else if (0x3297 <= hs && hs <= 0x3299) {
                    return true;
                } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
                        || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
                        || hs == 0x2b50) {
                    return true;
                }
            }
        }
        return false;
    };

    `;
  }

  // Ps:判断/检查信息
  // *判断是否是数字
  isNumber() {
    return `
      // 判断是否是数字

      // value: 值

      function isNumber(value){
        return Object.prototype.toString.call(value) === '[object Number]' && !isNaN(value);
      };

      isNumber(-1)   // true;
      isNumber('-1') // false;
      isNumber(-'1') // true;
      isNumber(0)    // true;

    `;
  }

  // *判断是否是数组
  isArray() {
    return `
      // 判断是否是数组

      let arr = [];
      let json = {};
      let fn = () =>{};
      let str = '谭金涛';

      // 1. 通过Array.isArray()判断;
            Array.isArray(arr)    // true
            Array.isArray(json)   // false

      // 2. 通过Object.prototype.toString.call()判断;
            Object.prototype.toString.call(arr) ==="[object Array]";    // true
            Object.prototype.toString.call(fn) ==="[object Function]";  // true

      // 3. 通过instanceof判断;
            arr instanceof Array;   // true
            json instanceof Array;  // false

      // 4. 通过constructor判断;
            arr.constructor === Array   // true
            json.constructor === Array  // 报错

    `;
  }

  // *[Ld]深比较判断对象是否相等
  isEqual() {
    return `
      /*
        深比较判断对象是否相等

        value1: 用来比较的值
        value2: 另一个用来比较的值
      */

      _.isEqual(value1, value2);

      const obj = { name: 'tjt' };
      const otherObj = { name: 'tjt' };

      _.isEqual(obj, otherObj);
      // → true
      
      obj === otherObj;
      // → false

      _.isEqual(()=>1, ()=>1);
      // → false

      _.isEqual(1,1);
      // → true

      _.isEqual(null ,null);
      // → true
      
      _.isEqual(NaN,NaN);
      // → true

      NaN === NaN;
      // → false

    `;
  }

  // Ps:设备判断
  // *判断是移动还是PC设备
  isMobile() {
    return `
      // 判断是移动还是PC设备

      const isMobile = () => {
        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {
        return 'mobile';
        }
        return 'desktop';
      };

    `;
  }

  // *判断是否是苹果设备
  isAppleMobileDevice() {
    return `
      // 判断是否是苹果设备

      const isAppleMobileDevice = () => {
        let reg = /iphone|ipod|ipad|Macintosh/i;
        return reg.test(navigator.userAgent.toLowerCase());
      };

    `;
  }

  // *判断是否是安卓设备
  isAndroidMobileDevice() {
    return `
      // 判断是否是安卓设备

      const isAndroidMobileDevice = () => {
        return /android/i.test(navigator.userAgent.toLowerCase());
      };

    `;
  }

  // *判断是Windows还是Mac系统

  isPcType() {
    return `
      // 判断是Windows还是Mac系统

      const isPcType = () => {
        const agent = navigator.userAgent.toLowerCase();
        const isMac = /macintosh|mac os x/i.test(navigator.userAgent);
        const isWindows = agent.indexOf("win64") >= 0 || agent.indexOf("wow64") >= 0 || agent.indexOf("win32") >= 0 || agent.indexOf("wow32") >= 0;
        if (isWindows) {
            return "windows";
        }
        if (isMac) {
            return "mac";
        }
      };

    `;
  }

  // *判断是否是微信/QQ内置浏览器
  broswer() {
    return `
      // 判断是否是微信/QQ内置浏览器

      const broswer = () => {
        const ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return "VX";
        } else if (ua.match(/QQ/i) == "qq") {
            return "QQ";
        }
        // 不是微信/QQ内置浏览器;
        return false;
      };

    `;
  }

  // *获取浏览器型号和版本
  getExplorerInfo() {
    return `
      // 获取浏览器型号和版本

      const getExplorerInfo = () => {
        let t = navigator.userAgent.toLowerCase();
        return 0 <= t.indexOf("msie") ? { //ie < 11
            type: "IE",
            version: Number(t.match(/msie ([\d]+)/)[1])
        } : !!t.match(/trident\/.+?rv:(([\d.]+))/) ? { // ie 11
            type: "IE",
            version: 11
        } : 0 <= t.indexOf("edge") ? {
            type: "Edge",
            version: Number(t.match(/edge\/([\d]+)/)[1])
        } : 0 <= t.indexOf("firefox") ? {
            type: "Firefox",
            version: Number(t.match(/firefox\/([\d]+)/)[1])
        } : 0 <= t.indexOf("chrome") ? {
            type: "Chrome",
            version: Number(t.match(/chrome\/([\d]+)/)[1])
        } : 0 <= t.indexOf("opera") ? {
            type: "Opera",
            version: Number(t.match(/opera.([\d]+)/)[1])
        } : 0 <= t.indexOf("Safari") ? {
            type: "Safari",
            version: Number(t.match(/version\/([\d]+)/)[1])
        } : {
            type: t,
            version: -1
        }
      };

    `;
  }

  // Ps:浏览器操作
  // *平滑滚动到页面顶部
  scrollToTop() {
    return `
    // 滚动到页面顶部

    const scrollToTop = () => {
      const height = document.documentElement.scrollTop || document.body.scrollTop;

      if (height > 0) {
          // 24： 24hz
          window.scrollTo(0, height - height / 24);
          // 动画帧
          window.requestAnimationFrame(scrollToTop);
      }
    };

    `;
  }

  // *滚动到页面底部
  scrollToBottom() {
    return `
      // 滚动到页面底部

      // change: 滚动变化速度；
      let change = 0
      const scrollToBottom = () => {

        change += 24

        const height = document.documentElement.offsetHeight;

        window.scrollTo(0, change);

        if (height > change) {
          // 动画帧
          window.requestAnimationFrame(scrollToBottom);
        } else {
          change = 0
        }
      };

    `;
  }

  // *平滑滚动/不平滑跳转 到指定元素区域
  smoothScroll() {
    return `
      // 平滑滚动/不平滑跳转 到指定元素区域

      // element: 类名 ==> '.tjt740'

      // 例：
      // 平滑滚动到 id='item1'的dom位置。
      document.getElementById('btn').onclick = () => {
        smoothScroll('#item1');
      }

      const smoothScroll = (element) => {
        document.querySelector(element).scrollIntoView({
            behavior: 'smooth'
        });
      };

      // 直接跳转到指定锚点位置
      const jumpElement = (element) =>{
        document.querySelector(element).scrollIntoView(true);
      };

    `;
  }

  // *获取可视窗口高度
  getClientHeight() {
    return `
      // 获取可视窗口高度

      const getClientHeight = () => {
        let clientHeight = 0;
        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        else {
            clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;
        }
        return clientHeight;
      };

    `;
  }

  // *获取可视窗口宽度
  getClientWidth() {
    return `
      // 获取可视窗口宽度

      const getClientWidth = () => {
        return (document.compatMode == "BackCompat" ? document.body : document.documentElement.clientWidth);
      };

    `;
  }

  // *打开浏览器全屏
  toFullScreen() {
    return `
      // 打开浏览器全屏

      const toFullScreen = () => {
        let element = document.body;
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          element.msRequestFullscreen()
        } else if (element.webkitRequestFullscreen) {
          element.webkitRequestFullScreen()
        }
      };

    `;
  }

  // *退出浏览器全屏
  exitFullscreen() {
    return `
      // 退出浏览器全屏

      const exitFullscreen = () => {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        }
      };

    `;
  }

  // Ps:DOM操作
  // *事件监听
  listenEvent() {
    return `
      // 事件监听

      // 主流浏览器:
        obj.addEventListener('EventName', functionName, boolean);
          // obj: 触发事件的目标节点  不见得一定要加。 看兼容
          // 'EventName': 事件的名称 （不加on） click、mouseover...
          // functionName: 函数的名字（fn1/fn2...;
          // boolean : true/false(默认false不冒泡);
          /*
            true : 事件在捕获阶段执行   body -> parent -> son  打印从外到里
            false（默认）： 事件在冒泡阶段执行  son -> parent -> body  打印从里到外
          */


      // IE8以下:
        obj.attachEvent('on' + 'EventName', functionName, boolean);
          // 'EventName': 事件名字。 （必须加on） onclick、onmouseover...

      //----------------------------------------------------------------------
      // ★注意:
        // (1) attachEvent是后绑定先执行(fn2、fn1)，addEventListener是先绑定先执行(fn1、fn2)。
        // (2) attachEvent 的this指向window, addEventListener 的this指向当前元素

    `;
  }

  // *事件解绑
  eventRelieve() {
    return `
      // 事件解绑

      // 主流浏览器:
            obj.removeEventListener('EventName',functionName,boolean);

      // IE8以下:
            obj.detachEvent('on'+'EventName',functionName,boolean);

    `;
  }

  // *事件委托
  eventDelegation() {
    return `
      <ul class="ul-box">
        <li class="li-box">01</li>
        <li class="li-box">02</li>
        <li class="li-box">03</li>
        <li class="li-box">04</li>
        <li class="li-box">05</li>
      </ul>

      // 事件委托 (不消耗性能)

      // 主流浏览器:
      const ulBox = document.querySelector('.ul-box');

      ulBox.onclick = (e) => {
        if (e.target.nodeName.toLowerCase() == 'li') { // nodeName 都是大写，用toLowerCase()转为小写
          console.log(e.target) // 01 02 03 ...
        }
      }

      // 兼容IE写法:
      var ul = document.getElementsByTagName('ul')[0] // 用var为了兼容IE let也可以。 在父级上定义。
      ul.onclick = function (e) {
        var e = e || window.event
        var that = e.target || e.srcElement
        if (that.nodeName.toLowerCase() == 'li') {
          console.log(that) // 01 02 03 ...
        }
      }

    `;
  }

  // *阻止冒泡事件
  preventBubble() {
    return `
      // 阻止冒泡事件

      function preventBubble() {
        var e = e || window.event;

        if (e.stopPropagation) {
          e.stopPropagation()   // W3C 阻止冒泡;
        } else {
          e.cancelBubble = true // IE 阻止冒泡;
        }

      };

      eventFun(box, 'click', preventBubble, false);

    `;
  }

  // *阻止默认行为
  preventDefault() {
    return `
      // 阻止默认行为

      function preventDefault() {
        var e = e || window.event;

        if (e.preventDefault) {
          e.preventDefault() // W3C 阻止默认行为;
        } else {
          e.returnValue = false // IE 阻止默认行为;
        }

      };

      eventFun(box, 'click', preventDefault, false);

    `;
  }

  // Ps:时间操作
  // *格式化时间
  dateFormater() {
    return `
      // 格式化时间

      // formater: 格式 YYYY-MM-DD HH:mm:ss 、 yyyy.MM.DD HH:mm:ss ...
      // time: 时间 new Date().getTime() 1647854267083（可不传）

      const dateFormater = (formater, time) => {
        let date = time ? new Date(time) : new Date(),
            Y = date.getFullYear() + '',
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
        return formater.replace(/YYYY|yyyy/g, Y)
            .replace(/YY|yy/g, Y.slice(2, 4))
            .replace(/MM/g, (M < 10 ? '0' : '') + M)
            .replace(/DD/g, (D < 10 ? '0' : '') + D)
            .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
            .replace(/mm/g, (m < 10 ? '0' : '') + m)
            .replace(/ss/g, (s < 10 ? '0' : '') + s)
      };

      dateFormater('YYYY-MM-DD HH:mm:ss') // '2022-03-21 14:40:19'
      dateFormater('YYYYMMDDHHmmss')      // '20220321144026'
      dateFormater('yyyy.MM.DD HH:mm:ss') // '2022.03.21 14:41:02'

    `;
  }

  // *当前时间
  nowTime() {
    return `
      // 当前时间

      const nowTime = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth();
        const date = now.getDate() >= 10 ? now.getDate() : ('0' + now.getDate());
        const hour = now.getHours() >= 10 ? now.getHours() : ('0' + now.getHours());
        const miu = now.getMinutes() >= 10 ? now.getMinutes() : ('0' + now.getMinutes());
        const sec = now.getSeconds() >= 10 ? now.getSeconds() : ('0' + now.getSeconds());
        return +year + "年" + (month + 1) + "月" + date + "日 " + hour + ":" + miu + ":" + sec;
      };

      nowTime() // '2022年10月22日 21:56:36'

    `;
  }

  // Ps:JavaScript操作
  // *防抖
  debounce() {
    return `
      // 防抖: 在没有连续事件触发n秒后，执行一次回调函数，在n秒内重新触发事件则重新计算时间。

      // fn: 防抖结束后触发的回调函数
      // ms: 毫秒数

      /* <input type="text" placeholder="防抖" id="debounce"> */

      const debounceDom = document.getElementById('debounce');

      function debounce(fn, ms) {
        let timer = null;
        return (...arg) => {
          clearTimeout(timer);
          timer = setTimeout(() => {
            fn.apply(this, arg);
          }, ms)
        }
      }

      function fn(e) {
        console.log(e);
        console.log(防抖成功: e.target.value);
      }

      debounceDom.addEventListener('input', debounce(fn, 2000), false);

    `;
  }

  // *节流
  throttle() {
    return `
      // 节流: 连续事件发生时，每隔n秒触发一次事件。

      // fn: n秒内会被触发一次的回调函数
      // ms: 毫秒数

      /* <input type="text" placeholder="节流" id="throttle"> */

      const throttleDom = document.getElementById("throttle");

      function throttle(fn, ms) {
        let time = null;
        let mark = true; // 标记
        return (...arg) => {
          if (mark === false) {
            return;
          }
          clearTimeout(time);
          mark = false;
          time = setTimeout(() => {
            fn.apply(this, arg);
            mark = true;
          }, ms);
        };
      }

      function fn(e) {
        console.log(e);
        console.log(节流成功:e.target.value);
      }

      throttleDom.addEventListener("input", throttle(fn, 2000), false);

    `;
  }

  // *数据类型判断
  getType() {
    return `
      // 数据类型判断

      // val: 想要进行判断的参数

      function getType(value) {
        if (value === null) {
            return value + "";
        }
        // 判断数据是引用类型的情况
        if (typeof value === "object") {
            let valueClass = Object.prototype.toString.call(value),
                type = valueClass.split(" ")[1].split("");
            type.pop();
            return type.join("").toLowerCase();
        } else {
            // 判断数据是基本数据类型的情况和函数的情况
            return typeof value;
        }
      };

      getType()       // 'undefined'
      getType(null)   // 'null'
      getType([])     // 'array'

    `;
  }

  // *深克隆/深拷贝
  deepClone() {
    return `
      // 深克隆/深拷贝

      // obj: 想要被克隆的对象

      function deepClone(obj, hash = new WeakMap()) {
        // 日期对象直接返回一个新的日期对象
        if (obj instanceof Date) {
            return new Date(obj);
        }
        //正则对象直接返回一个新的正则对象
        if (obj instanceof RegExp) {
            return new RegExp(obj);
        }
        //如果循环引用,就用 weakMap 来解决
        if (hash.has(obj)) {
            return hash.get(obj);
        }
        // 获取对象所有自身属性的描述
        let allDesc = Object.getOwnPropertyDescriptors(obj);
        // 遍历传入参数所有键的特性
        let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);

        hash.set(obj, cloneObj);
        for (let key of Reflect.ownKeys(obj)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                cloneObj[key] = deepClone(obj[key], hash);
            } else {
                cloneObj[key] = obj[key];
            }
        }
        return cloneObj;
      };


      let arr = [[1, 2, [3]], [() => { return 4 }, [5, [6]]], { a: 7, b() { return 8 } }]
      let cloneArr = deepClone(arr);  //  [Array(3), Array(2), {…}]

      let date = new Date();
      let cloneDate = deepClone(date); // Wed Mar 30 2022 23:54:58 GMT+0800 (中国标准时间)

    `;
  }

  // *模糊查询/模糊匹配
  blurrySearch() {
    return `
      // 模糊查询/模糊匹配

      // allDataList: 想要被模糊匹配的数组

      // searchContent: 模糊匹配的内容

      function blurrySearch(allDataList, searchContent) {
        return allDataList.filter(v => v.name.match(searchContent));
      };

      let allTeacherList = [
        {
        "id": 15649876456456,
        "name": "戚思宁",
        "code": "4311221"
        },
        {
            "id": 15649876456457,
            "name": "谭金涛",
            "code": "1311641",

        },
        {
            "id": 15649876456458,
            "name": "柳晔",
            "code": "4311271",
        }
      ];

      let teacherList = blurrySearch(allTeacherList,'涛')  // [{ "id": 15649876456457, "name": "谭金涛","code": "1311641"}]

    `;
  }

  // *等待函数
  waitTime() {
    return `
      // 等待函数

      // waitTime: 时间控制器

      // asyncFn: 等待时间（ms）完成后触发的函数

      const waitTime = (ms) => new Promise((resolve)=> setTimeout(resolve, ms));

      const asyncFn = async () => {
        await waitTime(1000);
        console.log('等待异步函数执行结束!');
      };

      asyncFn()  // Promise {<pending>} >>>1s后>>>> 等待异步函数执行结束！

    `;
  }

  // *颜色转换
  changeColor() {
    return `
      // 颜色转换

      // rgbToHex：rgba格式转 #000000格式 （rgba格式转十六进制）
      // hexToRgb：#ffffff 格式转rgba格式 （十六进制转rgba格式）
      

      const colorChange = {
        rgbToHex: function (val) {
            //RGB(A)颜色转换为HEX十六进制的颜色值
            var r,
                g,
                b,
                a,
                regRgba = /rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([.\d]+))?\)/, //判断rgb颜色值格式的正则表达式，如rgba(255,20,10,.54)
                rsa = val.replace(/\s+/g, '').match(regRgba);
            if (!!rsa) {
                r = parseInt(rsa[1]).toString(16);
                r = r.length === 1 ? '0' + r : r;
                g = (+rsa[2]).toString(16);
                g = g.length === 1 ? '0' + g : g;
                b = (+rsa[3]).toString(16);
                b = b.length === 1 ? '0' + b : b;
                a = +(rsa[5] ? rsa[5] : 1) * 100;
                return {
                    hex: '#' + r + g + b,
                    r: parseInt(r, 16),
                    g: parseInt(g, 16),
                    b: parseInt(b, 16),
                    alpha: Math.ceil(a),
                };
            } else {
                return { hex: '无效', alpha: 100 };
            }
        },
        hexToRgb: function (val) {
            //HEX十六进制颜色值转换为RGB(A)颜色值
            // 16进制颜色值的正则
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            // 把颜色值变成小写
            var color = val.toLowerCase();
            var result = '';
            if (reg.test(color)) {
                // 如果只有三位的值，需变成六位，如：#fff => #ffffff
                if (color.length === 4) {
                    var colorNew = '#';
                    for (var i = 1; i < 4; i += 1) {
                        colorNew += color
                            .slice(i, i + 1)
                            .concat(color.slice(i, i + 1));
                    }
                    color = colorNew;
                }
                // 处理六位的颜色值，转为RGB
                var colorChange = [];
                for (let i = 1; i < 7; i += 2) {
                    colorChange.push(parseInt('0x' + color.slice(i, i + 2)));
                }
                result = 'rgb(' + colorChange.join(',') + ')';
                return {
                    rgb: result,
                    r: colorChange[0],
                    g: colorChange[1],
                    b: colorChange[2],
                };
            } else {
                result = '无效';
                return { rgb: result };
            }
        },
      };
    

      colorChange.rgbToHex('rgb(155,10,20)');     // { hex: '#9b0a14', r: 155, g: 10, b: 20, alpha: 100 }
      colorChange.rgbToHex('rgb(155,10,20,0.5)'); // { hex: '#9b0a14', r: 155, g: 10, b: 20, alpha: 50 }
      colorChange.hexToRgb('#ff0000');  // { rgb: 'rgb(255,0,0)', r: 255, g: 0, b: 0 }


      



    `;
  }
}
