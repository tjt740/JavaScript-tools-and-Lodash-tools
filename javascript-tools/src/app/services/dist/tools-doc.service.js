"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ToolsDocService = void 0;
var core_1 = require("@angular/core");
var ToolsDocService = /** @class */ (function () {
    function ToolsDocService() {
    }
    // Ps:数字操作
    // *随机数字
    ToolsDocService.prototype.randomNum = function () {
        return "\n      // \u968F\u673A\u6570\u5B57\n\n      // min: \u6700\u5C0F\u503C\n      // max: \u6700\u5927\u503C\n\n      const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;\n\n      randomNum(0,5)  // 0\n      randomNum(0,5)  // 3\n      randomNum(0,5)  // 5\n\n    ";
    };
    // *数字转中文
    ToolsDocService.prototype.intToChinese = function () {
        return "\n      // \u6570\u5B57\u8F6C\u4E2D\u6587\n\n      // value: \u6570\u5B57(\u5143)\n\n      const intToChinese = (value) => {\n        const str = String(value);\n        const len = str.length - 1;\n        const idxs = ['', '\u5341', '\u767E', '\u5343', '\u4E07', '\u5341', '\u767E', '\u5343', '\u4EBF', '\u5341', '\u767E', '\u5343', '\u4E07', '\u5341', '\u767E', '\u5343', '\u4EBF'];\n        const num = ['\u96F6', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D', '\u4E03', '\u516B', '\u4E5D'];\n        return str.replace(/([1-9]|0+)/g, ($, $1, idx, full) => {\n          let pos = 0;\n          if ($1[0] !== '0') {\n            pos = len - idx;\n            if (idx == 0 && $1[0] == 1 && idxs[len - idx] == '\u5341') {\n              return idxs[len - idx];\n            }\n            return num[$1[0]] + idxs[len - idx];\n          } else {\n            let left = len - idx;\n            let right = len - idx + $1.length;\n            if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {\n              pos = left - left % 4;\n            }\n            if (pos) {\n              return idxs[pos] + num[$1[0]];\n            } else if (idx + $1.length >= len) {\n              return '';\n            } else {\n              return num[$1[0]];\n            }\n          }\n        });\n      };\n\n      intToChinese(1000) // '\u4E00\u5343'\n      intToChinese('9999') // '\u4E5D\u5343\u4E5D\u767E\u4E5D\u5341\u4E5D'\n\n    ";
    };
    //*数字转化为大写金额
    ToolsDocService.prototype.digitUppercase = function () {
        return "\n      // \u6570\u5B57\u8F6C\u5316\u4E3A\u5927\u5199\u91D1\u989D\n\n      // n: \u6570\u5B57(\u5143)\n\n      const digitUppercase = (n) => {\n        const fraction = ['\u89D2', '\u5206'];\n        const digit = [\n          '\u96F6', '\u58F9', '\u8D30', '\u53C1', '\u8086',\n          '\u4F0D', '\u9646', '\u67D2', '\u634C', '\u7396'\n        ];\n        const unit = [\n          ['\u5143', '\u4E07', '\u4EBF'],\n          ['', '\u62FE', '\u4F70', '\u4EDF']\n        ];\n        n = Math.abs(n);\n        let s = '';\n        for (let i = 0; i < fraction.length; i++) {\n          s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/\u96F6./, '');\n        }\n        s = s || '\u6574';\n        n = Math.floor(n);\n        for (let i = 0; i < unit[0].length && n > 0; i++) {\n          let p = '';\n          for (let j = 0; j < unit[1].length && n > 0; j++) {\n            p = digit[n % 10] + unit[1][j] + p;\n            n = Math.floor(n / 10);\n          }\n          s = p.replace(/(\u96F6.)*\u96F6$/, '').replace(/^$/, '\u96F6') + unit[0][i] + s;\n        }\n        return s.replace(/(\u96F6.)*\u96F6\u5143/, '\u5143')\n          .replace(/(\u96F6.)+/g, '\u96F6')\n          .replace(/^\u6574$/, '\u96F6\u5143\u6574');\n      };\n\n      digitUppercase(1234)    // \u58F9\u4EDF\u8D30\u4F70\u53C1\u62FE\u8086\u5143\u6574\n      digitUppercase(20)      // \u8D30\u62FE\u5143\u6574\n      digitUppercase(100000)  // \u58F9\u62FE\u4E07\u5143\u6574\n      digitUppercase(0.01)    // \u58F9\u5206\n      digitUppercase(0.0001)  // \u96F6\u5143\u6574\n\n    ";
    };
    // *数字千分位分隔
    ToolsDocService.prototype.partitionNum = function () {
        return "\n      // \u6570\u5B57\u5343\u5206\u4F4D\u5206\u9694\n\n      // n: \u6570\u5B57\n\n      const partitionNum = (n) => {\n          let num = n.toString();\n          let len = num.length;\n          if (len <= 3) {\n              return num;\n          } else {\n              let temp = '';\n              let remainder = len % 3;\n              if (remainder > 0) { // \u4E0D\u662F3\u7684\u6574\u6570\u500D\n                  return num.slice(0, remainder) + ',' + num.slice(remainder, len).match(/d{3}/g).join(',') + temp;\n              } else { // 3\u7684\u6574\u6570\u500D\n                  return num.slice(0, len).match(/d{3}/g).join(',') + temp;\n              }\n          }\n      }\n\n      partitionNum(12345)   // '12,345'\n      partitionNum(123)     // '123'\n      partitionNum('99999') // '99,999'\n\n    ";
    };
    // Ps:字符串操作
    // *随机生成自定义长度的字符串
    ToolsDocService.prototype.randomStr = function () {
        return "\n      // \u968F\u673A\u751F\u6210\u81EA\u5B9A\u4E49\u957F\u5EA6\u7684\u5B57\u7B26\u4E32\n\n      // len: \u968F\u673A\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\n\n      const randomString = (len) => {\n        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'; // \u968F\u673A\u5B57\u7B26\u4E32\u8BCD\u5178;\n        const strLen = chars.length;\n        const randomStr = '';\n        for (let i = 0; i < len; i++) {\n            randomStr += chars.charAt(Math.floor(Math.random() * strLen));\n        };\n        return randomStr;\n      };\n\n      randomString(3)   // 'zff'\n      randomString(5)   // '2D3Zy'\n      randomString(10)  // 'SpzTPtYZGt'\n\n    ";
    };
    // *字符串首字母大写
    ToolsDocService.prototype.firstStrUpper = function () {
        return "\n      // \u5B57\u7B26\u4E32\u9996\u5B57\u6BCD\u5927\u5199\n\n      // str: \u5B57\u7B26\u4E32\n\n      const firstStrUpper = str => str.slice(0,1).toLocaleUpperCase() + str.slice(1);\n\n      firstStrUpper('tjtqsn') // Tjtqsn\n      firstStrUpper('abcd')   // Abcd\n\n    ";
    };
    // *手机号中间几位变成'*'
    ToolsDocService.prototype.telFormat = function () {
        return "\n      // \u624B\u673A\u53F7\u4E2D\u95F4\u51E0\u4F4D\u53D8\u6210*\n\n      // tel: \u624B\u673A\u53F7\n      // symbol: *\u6570\u91CF\n\n      const telFormat = (tel, symbol = 4) => {\n        tel = String(tel);\n        symbol = symbol > 7 ? 7 : symbol;  // *\u6570\u4E0D\u80FD\u5927\u4E8E7\n        const telPerFix = tel.substr(0, 3); // \u624B\u673A\u53F7\u524D\u7F00\n        const symbolNum = new Array(symbol).fill('*').join(''); // \u751F\u6210\u6307\u5B9A\u7684 * \u6570\u91CF;\n        const telsSuffix = tel.substr(symbolNum.length + telPerFix.length); // \u624B\u673A\u53F7\u540E\u7F00\n        const formatTel = telPerFix + symbolNum + telsSuffix;\n        return formatTel;\n      };\n\n      telFormat(15751666937)    // 157****6937\n      telFormat(15751666937, 7) // 157*******7\n      telFormat(15751666937, 0) // 15751666937\n\n    ";
    };
    // *驼峰命名转换成短横线命名
    ToolsDocService.prototype.getKebabCase = function () {
        return "\n      // \u9A7C\u5CF0\u547D\u540D\u8F6C\u6362\u6210\u77ED\u6A2A\u7EBF\u547D\u540D\n\n      // str: \u82F1\u6587\u5B57\u7B26\u4E32\n\n      const getKebabCase = (str) => {\n        str = String(str);\n        return str.replace(/[A-Z]/g, (item) => '-' + item.toLowerCase())\n      };\n\n      getKebabCase('tjtQsn')  // tjt-qsn\n      getKebabCase('ABCDE')   // -a-b-c-d-e\n\n    ";
    };
    // *短横线命名转换成驼峰命名
    ToolsDocService.prototype.getCamelCase = function () {
        return "\n      // \u77ED\u6A2A\u7EBF\u547D\u540D\u8F6C\u6362\u6210\u9A7C\u5CF0\u547D\u540D\n\n      // str: \u5B57\u7B26\u4E32\n\n      const getCamelCase = (str) => {\n        str = String(str);\n        return str.replace( /-([a-z])/g, (i, item) => item.toUpperCase())\n      };\n\n      getCamelCase('tjt-qsn')     // 'tjtQsn'\n      getCamelCase('-a-b-c-d-e')  // 'ABCDE'\n\n    ";
    };
    // Ps:数组操作
    // *数组乱序
    ToolsDocService.prototype.randomArray = function () {
        return "\n      // \u6570\u7EC4\u4E71\u5E8F\n\n      // arr: \u6570\u7EC4\n\n      const arrScrambling = (arr) => {\n        for (let i = 0; i < arr.length; i++) {\n          const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;\n          [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];\n        }\n        return arr;\n      };\n\n      arrScrambling([1,2,3,4,5])                      // [2, 3, 5, 1, 4]\n      arrScrambling([{a:1},{a:2},{a:3},{a:4},{a:5}])  // [{a: 2},{a: 1},{a: 4},{a: 5},{a: 3}]\n\n    ";
    };
    // *随机获取数组中的某个数
    ToolsDocService.prototype.randomArrayNum = function () {
        return "\n      // \u968F\u673A\u83B7\u53D6\u6570\u7EC4\u4E2D\u7684\u67D0\u4E2A\u6570\n\n      // arr: \u6570\u7EC4\n\n      const sample = arr => arr[Math.floor(Math.random() * arr.length)];\n\n      sample(['1',2,'3',4,5])  // '3'\n      sample([{a:1},{a:2},{a:3},{a:4},{a:5}])  // {a: 2}\n      sample([1,2,3,4,5])  // 2\n\n    ";
    };
    // *数组按照数组中某一对象进行排序
    ToolsDocService.prototype.sortItemArray = function () {
        return "\n      // \u6570\u7EC4\u6309\u7167\u6570\u7EC4\u4E2D\u67D0\u4E00\u5BF9\u8C61\u8FDB\u884C\u6392\u5E8F\n\n      // a,b : Array.sort(a,b) <\u56FA\u5B9A>\u5F62\u53C2;\n      // xxx : \u76EE\u6807\u6570\u7EC4\u9700\u8981\u8FDB\u884C\u6392\u5E8F\u7684key;\n      // a.xxx - b.xxx \u6B63\u5E8F | b.xxx - a.xxx \u5012\u5E8F;\n\n      function sortItemArray (a,b) {\n        return a.label - b.label; // (\u6B63\u5E8F) 1 2 3 4 ...\n        return b.xxx - a.xxx;     // (\u5012\u5E8F) 4 3 2 1 ...\n      };\n\n      let oldArr = [\n        {\"value\":\"\u7532\",\"label\":1},\n        {\"value\":\"\u4E01\",\"label\":4},\n        {\"value\":\"\u620A\",\"label\":5},\n        {\"value\":\"\u4E59\",\"label\":2},\n        {\"value\":\"\u5DF1\",\"label\":6},\n        {\"value\":\"\u4E19\",\"label\":3}\n      ];\n\n      let newArr1 = oldArr.sort(sortItemArray); // \u6B63\u5E8F a-b\n      let newArr2 = oldArr.sort(sortItemArray); // \u5012\u5E8F b-a\n\n    ";
    };
    // *交换数组中两个元素
    ToolsDocService.prototype.swapItems = function () {
        return "\n      // \u4EA4\u6362\u6570\u7EC4\u4E2D\u4E24\u4E2A\u5143\u7D20\n\n      // arr: \u6570\u7EC4\n      // index1: \u6570\u7EC4\u9700\u8981\u4EA4\u6362\u7684\u4E0B\u68071\n      // index2: \u6570\u7EC4\u9700\u8981\u4EA4\u6362\u7684\u4E0B\u68072\n\n      function swapItems (arr, index1, index2) {\n        arr[index1] = arr.splice(index2, 1, arr[index1])[0];\n        return arr;\n      };\n\n      swapItems([1,3,2,4,5],2,1)         // [1, 2, 3, 4, 5]\n      swapItems([{a:1},{c:3},{b:2}],1,2) // [{a:1},{b:2},{c:3}]\n\n    ";
    };
    // *[Ld]将数组拆分成多个【size】长的区块，组成新数组
    ToolsDocService.prototype.chunkArray = function () {
        return "\n        /*\n          \u5C06\u6570\u7EC4\u62C6\u5206\u6210\u591A\u4E2A\u3010size\u3011\u957F\u7684\u533A\u5757\uFF0C\u751F\u6210\u65B0\u6570\u7EC4\u3002\n          \u5982\u679C\u3010Array\u3011\u65E0\u6CD5\u88AB\u5206\u5272\u6210\u5168\u90E8\u7B49\u957F\u7684\u533A\u5757\uFF0C\u90A3\u4E48\u6700\u540E\u5269\u4F59\u7684\u5143\u7D20\u5C06\u7EC4\u6210\u4E00\u4E2A\u533A\u5757\u3002\n        */\n\n        _.chunk(array, [size=1])\n\n        let arr1 = ['a1', 'b2', 'c3', 'd4', 'e5']\n        let arr2 = [['a', 'b'], 'c', 'd','e']\n\n        let newArr1 = _.chunk(arr1, 2);\n        // \u2192 [['a1', 'b2'], ['c3', 'd4'], ['e5']];\n\n        let newArr2 = _.chunk(arr2, 2);\n        // \u2192 [[[\"a\",\"b\"],\"c\"], [\"d\",\"e\"]];\n\n      ";
    };
    // *[Ld]剔除数组中的假值，返回新数组
    ToolsDocService.prototype.compactArray = function () {
        return "\n        /*\n          \u5254\u9664\u6570\u7EC4\u4E2D\u7684\u5047\u503C\uFF0C\u8FD4\u56DE\u65B0\u6570\u7EC4\u3002\n          \u4F8B\u5982false, null,0, \"\", undefined, \u548C NaN \u90FD\u662F\u88AB\u8BA4\u4E3A\u662F\u201C\u5047\u503C\u201D\u3002\n        */\n\n        _.compact(array);\n\n        _.compact([0, 1, false, 2, '', 3]);\n        // \u2192 [1,2,3];\n\n        _.compact([[NaN, 0, false], '0', 740]);\n        // \u2192 [[NaN, 0, false],'0', 740];\n\n      ";
    };
    // *[Ld]将【Array】与任何数组或值拼接，返回新数组
    ToolsDocService.prototype.concatArray = function () {
        return "\n        /*\n          \u5C06\u3010Array\u3011\u4E0E\u4EFB\u4F55\u6570\u7EC4\u3001\u503C\u62FC\u63A5\uFF0C\u8FD4\u56DE\u65B0\u6570\u7EC4\n        */\n\n        _.concat(Array,[values]);\n\n        let arr = [1, 2, 3, 4];\n\n        _.concat(arr, 5, 6, [7]);\n        // \u2192 [1, 2, 3, 4, 5, 6, 7];\n\n        _.concat(arr, 2, [3], [[4]]);\n        // \u2192 [1, 2, 3, 4, 5, 6, [7]];\n\n      ";
    };
    // *[Ld]筛选出【Array】中需要被排除的值[values]，返回新数组
    ToolsDocService.prototype.difference = function () {
        return "\n      /*\n        \u7B5B\u9009\u51FA\u3010Array\u3011\u4E2D\u9700\u8981\u88AB\u6392\u9664\u7684\u503C[values]\uFF0C\u8FD4\u56DE\u65B0\u6570\u7EC4\n          array: \u88AB\u68C0\u67E5\u7684\u6570\u7EC4\n          [values]:(...Array) \u9700\u8981\u88AB\u6392\u9664\u7684\u503C\uFF08\u5FC5\u987B\u662F\u6570\u7EC4\u5F62\u5F0F\uFF09\n      */\n\n      _.difference(array, [values]);\n\n      let arr = [1, 2, 3];\n      _.difference(arr, [2, 3]);\n      // \u2192 [1];\n\n      let arr2 = ['\u96F6', '\u4E00', '\u4E8C', '\u4E09', '\u56DB', '\u4E94', '\u516D', '\u4E03', '\u516B', '\u4E5D'];\n      _.difference(arr2, ['\u4E00', '\u4E8C', '\u4E09', '\u56DB']);\n      // \u2192\u00A0['\u96F6', '\u4E94', '\u516D', '\u4E03', '\u516B', '\u4E5D'];\n\n    ";
    };
    // *[Ld]获取数组中第一个元素
    ToolsDocService.prototype.getFirstElement = function () {
        return "\n      /*\n        \u83B7\u53D6\u6570\u7EC4\u4E2D\u7B2C\u4E00\u4E2A\u5143\u7D20\n\n        array: \u88AB\u67E5\u627E\u7684\u6570\u7EC4\n      */\n\n      _.head(array)\n\n      const list = [\n        { userName: '\u8C2D\u91D1\u6D9B', active: false },\n        { userName: '\u621A\u601D\u5B81', active: false },\n        { userName: '\u67F3\u6654', active: true },\n        { userName: '\u5F90\u6668\u5F66', active: true },\n      ];\n\n      _.head(list);\n      // \u2192  { userName: '\u8C2D\u91D1\u6D9B', active: false }\n\n\n      const arr = [1, 2, 3];\n      _.head(arr)\n      // 1\n\n    ";
    };
    // *[Ld]获取数组中最后一个元素
    ToolsDocService.prototype.getLastElement = function () {
        return "\n      /*\n        \u83B7\u53D6\u6570\u7EC4\u4E2D\u6700\u540E\u4E00\u9879\n      */\n\n      _.last(array);\n\n      const arr = [1, 2, 3, 4, 5];\n      _.last(arr);\n      // \u2192 5;\n\n    ";
    };
    // *[Ld]创建一个切片数组，去除Array前面的n个元素。（n默认值为1。）
    ToolsDocService.prototype.dropStartArray = function () {
        return "\n      /*\n        \u521B\u5EFA\u4E00\u4E2A\u5207\u7247\u6570\u7EC4\uFF0C\u53BB\u9664array\u2605\u524D\u9762\u7684\u2605n\u4E2A\u5143\u7D20\uFF08n\u9ED8\u8BA4\u503C\u4E3A1\u3002\uFF09\n\n        array: \u88AB\u88C1\u526A\u7684\u6570\u7EC4\n        n: \u88C1\u526A\u6570\u7EC4\u2605\u524D\u2605\u7684n\u4F4D\n\n      */\n\n      _.drop(array, n=1)\n\n      const arr1 = [1, 2, 3, 4, 5];\n      _.drop(arr1);\n      // \u2192 [2, 3, 4, 5];\n\n      const arr2 = ['\u4E00', '\u4E8C', '\u4E09', '\u56DB'];\n      _.drop(arr2, 2);\n      // \u2192 ['\u4E09', '\u56DB'];\n\n      const arr3 = ['\u58F9', '\u8D30', '\u53C1', '\u8086'];\n      _.drop(arr3, 10);\n      // \u2192 []\n\n      const arr4 = ['h', 'e', 'l', 'l', 'o'];\n      _.drop(arr4, 0);\n      // \u2192 ['h', 'e', 'l', 'l', 'o'];\n\n    ";
    };
    // *[Ld]创建一个切片数组，去除Array后面的n个元素。（n默认值为1。）
    ToolsDocService.prototype.dropEndArray = function () {
        return "\n      /*\n        \u521B\u5EFA\u4E00\u4E2A\u5207\u7247\u6570\u7EC4\uFF0C\u53BB\u9664array\u2605\u540E\u9762\u7684\u2605n\u4E2A\u5143\u7D20\uFF08n\u9ED8\u8BA4\u503C\u4E3A1\u3002\uFF09\n\n        array: \u88AB\u88C1\u526A\u7684\u6570\u7EC4\n        n: \u88C1\u526A\u6570\u7EC4\u2605\u540E\u2605\u7684n\u4F4D\n\n      */\n\n      _.dropRight(array, n=1)\n\n      const arr1 = [1, 2, 3, 4, 5];\n      _.dropRight(arr1);\n      // \u2192 [1, 2, 3, 4];\n\n      const arr2 = ['\u4E00', '\u4E8C', '\u4E09', '\u56DB'];\n      _.dropRight(arr2, 2);\n      // \u2192 ['\u4E00', '\u4E8C'];\n\n      const arr3 = ['\u58F9', '\u8D30', '\u53C1', '\u8086'];\n      _.dropRight(arr3, 10);\n      // \u2192 []\n\n      const arr4 = ['h', 'e', 'l', 'l', 'o'];\n      _.dropRight(arr4, 0);\n      // \u2192 ['h', 'e', 'l', 'l', 'o'];\n\n    ";
    };
    // *[Ld]创建一个新数组，使用 value 值来填充（替换） Array;
    ToolsDocService.prototype.fillArray = function () {
        return "\n      /*\n      \u4F7F\u7528 value \u503C\u6765\u586B\u5145\uFF08\u66FF\u6362\uFF09 Array\uFF0C\u4ECEstart\u4F4D\u7F6E\u5F00\u59CB, \u5230length\u4F4D\u7F6E\u7ED3\u675F\u3002\n      PS:\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u6539\u53D8\u539F array\uFF08\u6CE8\uFF1A\u4E0D\u662F\u521B\u5EFA\u65B0\u6570\u7EC4\uFF09\n\n      Array: \u8981\u586B\u5145\u6539\u53D8\u7684\u6570\u7EC4\n        value: \u586B\u5145\u7ED9Array\u7684\u503C\n        [start=0]: \u5F00\u59CB\u4E0B\u6807\n        [end=array.length]: \u7ED3\u675F\u4E0B\u6807\uFF08length\uFF09 \u7C7B\u4F3C\u4E8E\u5B57\u7B26\u4E32\u7684substr\n\n      */\n\n      _.fill(array, value, [start=0], [end=array.length]);\n\n      const arr1 = [1, 2, 3, 4, 5];\n      const newArr1 = _.fill(arr1, 'tjt');\n      console.log('newArr1:', newArr1); // \u2192 ['tjt', 'tjt', 'tjt', 'tjt', 'tjt']\n      console.log('arr1:', arr1);// \u2192 ['tjt', 'tjt', 'tjt', 'tjt', 'tjt']\n\n      const arr2 = [1, 2, 3, 4, 5];\n      const newArr2 = _.fill(arr2, 'qsn',1,4);\n      console.log('newArr2:', newArr2); // \u2192 [1, 'qsn', 'qsn', 'qsn', 5]\n      console.log('arr2:', arr2);  // \u2192 [1, 'qsn', 'qsn', 'qsn', 5]\n\n      const newArr3 = _.fill(new Array(3), 7);\n      console.log('newArr3:', newArr3); // \u2192 [7, 7, 7]\n\n    ";
    };
    // *[Ld]返回数组中符合条件的第一个下标【从前向后】
    ToolsDocService.prototype.findIndex = function () {
        return "\n      /*\n      \u8FD4\u56DE\u6570\u7EC4\u4E2D\u7B26\u5408\u6761\u4EF6\u7684\u7B2C\u4E00\u4E2A\u4E0B\u6807\u3010\u4ECE\u524D\u5411\u540E\u3011\u3002\n      \u8BE5\u65B9\u6CD5\u7C7B\u4F3C_.find\uFF0C\u533A\u522B\u662F\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u901A\u8FC7 condition \u5224\u65AD\u4E3A\u771F\u503C\u7684\u5143\u7D20\u7684\u7D22\u5F15\u503C\uFF08index\uFF09\uFF0C\u800C\u4E0D\u662F\u5143\u7D20\u672C\u8EAB\u3002\n\n       array: \u8981\u641C\u7D22\u7684\u6570\u7EC4\n       condition: \u6761\u4EF6 function(o){return ....} / {key:value} / ['key',value];\n      */\n\n      _.findIndex(array,condition)\n\n      const users = [\n        { userName: '\u8C2D\u91D1\u6D9B', active: false },\n        { userName: '\u621A\u601D\u5B81', active: false },\n        { userName: '\u67F3\u6654', active: true },\n        { userName: '\u5F90\u6668\u5F66', active: true },\n      ];\n\n      _.findIndex(users, { userName: '\u621A\u601D\u5B81' });\n      // \u2192 1\n\n      _.findIndex(users, ['active', true]);\n      // \u2192 2\n\n      _.findIndex(users, function (o) {\n        return o.userName === '\u5F90\u6668\u5F66';\n      });\n      // \u2192 3\n\n\n      const arr = [1, 2, 3, 4, 5];\n      _.findIndex(arr, function (o) {\n        return o === 3;\n      });\n      // \u2192 2\n\n    ";
    };
    // *[Ld]返回数组中符合条件的第一个下标【从后向前】
    ToolsDocService.prototype.findLastIndex = function () {
        return "\n      /*\n      \u8FD4\u56DE\u6570\u7EC4\u4E2D\u7B26\u5408\u6761\u4EF6\u7684\u7B2C\u4E00\u4E2A\u4E0B\u6807\u3010\u4ECE\u540E\u5411\u524D\u3011\u3002\n      \u8BE5\u65B9\u6CD5\u7C7B\u4F3C_.find\uFF0C\u533A\u522B\u662F\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u901A\u8FC7 condition \u5224\u65AD\u4E3A\u771F\u503C\u7684\u5143\u7D20\u7684\u7D22\u5F15\u503C\uFF08index\uFF09\uFF0C\u800C\u4E0D\u662F\u5143\u7D20\u672C\u8EAB\u3002\n\n       array: \u8981\u641C\u7D22\u7684\u6570\u7EC4\n       condition: \u6761\u4EF6 function(o){return ....} / {key:value} / ['key',value];\n      */\n\n      _.findLastIndex(array,condition)\n\n      const users = [\n        { userName: '\u8C2D\u91D1\u6D9B', active: false },\n        { userName: '\u8C2D\u91D1\u6D9B', active: false },\n        { userName: '\u8C2D\u91D1\u6D9B', active: true },\n        { userName: '\u8C2D\u91D1\u6D9B', active: false },\n      ];\n\n      _.findLastIndex(users, { userName: '\u8C2D\u91D1\u6D9B' });\n      // \u2192 3\n\n      _.findLastIndex(users, ['active', true]);\n      // \u2192 2\n\n      _.findLastIndex(users, function (o) {\n        return o.userName === '\u8C2D\u91D1\u6D9B' && o.active===false;\n      });\n      // \u2192 3\n\n\n      const arr = [1, 2, 3, 2, 5];\n      _.findLastIndex(arr, function (o) {\n        return o === 2;\n      });\n      // \u2192 3\n\n    ";
    };
    // Ps:JSON操作
    // *遍历json数组
    ToolsDocService.prototype.mapJson = function () {
        return "\n      // \u904D\u5386json\u6570\u7EC4\n      let json = {a:'\u8C2D\u91D1\u6D9B',b:'\u621A\u601D\u5B81',c:'\u67F3\u6654',d:'\u5F90\u6668\u5F66'};\n\n      let arr= [];\n\n      for(let i=0; i<Object.keys(json).length;i++){\n        arr.push(json[Object.keys(json)[i]])\n      };\n\n      console.log(arr);   // ['\u8C2D\u91D1\u6D9B', '\u621A\u601D\u5B81', '\u67F3\u6654', '\u5F90\u6668\u5F66']\n\n    ";
    };
    // Ps:URL操作
    // *获取URL上参数信息
    ToolsDocService.prototype.getUrlInfo = function () {
        return "\n      // \u83B7\u53D6URL\u4E0A\u53C2\u6570\u4FE1\u606F\n\n      const getUrlInfo = ()=> {\n        let urlInfo = {} as any;\n        let flag = window.location.href.split('').includes('?'); //\u5224\u65AD\u662F\u5426\u4F20\u53C2\u3002\n\n        if (flag) {\n          let keyWords = window.location.href.split('?')[1].split('&');\n\n          // '?' :  \u83B7\u53D6https://hzcac2-dev.alibaba.net/app/admin/admin-layout/case-manage-list?pageCode=case-manage-secretary#id=ELPEeS-2QNz3w4yjxO_3iQ (\uFF1F\u540E\u7684\u5185\u5BB9)\u3002\n          // \u5982\u679C\u60F3\u8981\u83B7\u53D6\uFF08#)\u540E\u9762\u7684\u5185\u5BB9, \u5C31\u6539\u6210 let keyWords = window.location.href.split('#')[1].split('&');\n\n          for (let i = 0; i < keyWords.length; i++) {\n            let arr1 = keyWords[i].split('=');\n            urlInfo[arr1[0]] = arr1[1];\n          }\n          let key = Object.keys(urlInfo)[0];\n\n          console.log('key:', key);         // url\u4E0A\u7684\u952E\u503C\n          console.log('urlInfo:', urlInfo); // url\u4E0A\u952E\u503C\u6240\u5BF9\u5E94\u7684\u53C2\u6570\u96C6\u5408json\n          return urlInfo;                   // \u51FD\u6570\u8FD4\u56DE\u503C\n\n        } else {\n          console.log('\u672A\u643A\u5E26\u53C2\u6570');\n        }\n      };\n\n    ";
    };
    // Ps:存储(localStorage/sessionStorage)操作
    // *获取localStorage
    ToolsDocService.prototype.getLocalStorage = function () {
        return "\n      // \u83B7\u53D6localStorage\n\n      // key: \u952E\u503C\n\n      const getLocalStorage = (key) => {\n        if (!key) return;\n        return window.localStorage.getItem(key);\n      };\n\n    ";
    };
    // *存储localStorage
    ToolsDocService.prototype.setLocalStorage = function () {
        return "\n      // \u5B58\u50A8localStorage\n\n      // key: \u952E\u503C\n      // value: \u503C\n\n      const setLocalStorage = (key, value) => {\n        if (!key) return;\n        if (typeof value !== 'string') {\n          value = JSON.stringify(value);\n        }\n        window.localStorage.setItem(key, value);\n      };\n\n    ";
    };
    // *删除localStorage
    ToolsDocService.prototype.removeLocalStorage = function () {
        return "\n      // \u5220\u9664localStorage\n\n      // key: \u952E\u503C\n\n      const removeLocalStorage = (key) => {\n        if (!key) return;\n        window.localStorage.removeItem(key);\n      };\n\n    ";
    };
    // *获取sessionStorage
    ToolsDocService.prototype.getSessionStorage = function () {
        return "\n      // \u83B7\u53D6sessionStorage\n\n      // key: \u952E\u503C\n\n      const getSessionStorage = (key) => {\n        if (!key) return;\n         return window.sessionStorage.getItem(key)\n      };\n\n    ";
    };
    // *存储sessionStorage
    ToolsDocService.prototype.setSessionStorage = function () {
        return "\n      // \u5B58\u50A8sessionStorage\n\n      // key: \u952E\u503C\n      // value: \u503C\n\n      const setSessionStorage = (key, value) => {\n        if (!key) return;\n        if (typeof value !== 'string') {\n          value = JSON.stringify(value);\n        }\n        window.sessionStorage.setItem(key, value)\n      };\n\n    ";
    };
    // *删除sessionStorage
    ToolsDocService.prototype.removeSessionStorage = function () {
        return "\n      // \u5220\u9664sessionStorage\n\n      // key: \u952E\u503C\n\n      const sessionStorageRemove = (key) => {\n        if (!key) return;\n          window.sessionStorage.removeItem(key)\n      };\n\n    ";
    };
    // Ps:cookie操作
    // *获取cookie
    ToolsDocService.prototype.getCookie = function () {
        return "\n      // \u83B7\u53D6cookie\n\n      // key: \u952E\u503C\n\n      const getCookie = (key) => {\n        const cookieStr = unescape(document.cookie);\n            const arr = cookieStr.split('; ');\n            let cookieValue = '';\n            for (let i = 0; i < arr.length; i++) {\n                const temp = arr[i].split('=');\n                if (temp[0] === key) {\n                    cookieValue = temp[1];\n                    break;\n            }\n        }\n        return cookieValue;\n      };\n\n    ";
    };
    // *设置cookie
    ToolsDocService.prototype.setCookie = function () {
        return "\n      // \u8BBE\u7F6Ecookie\n\n      // key:    \u952E\u503C\n      // value:  \u503C\n      // days:   \u6301\u7EED\u5929\u6570\n\n      const setCookie = (key, value, days) => {\n        const days = 30;\n        const exp = new Date();\n        exp.setTime(exp.getTime() + days*24*60*60*1000);\n        document.cookie = key + '=' + value + ';expires=' + exp.toUTCString();\n      };\n\n    ";
    };
    // *删除cookie
    ToolsDocService.prototype.delCookie = function () {
        return "\n      // \u5220\u9664cookie\n\n      // key: \u952E\u503C\n\n      const delCookie = (key) => {\n        document.cookie = encodeURIComponent(key) + '=;expires=' + new Date();\n      };\n\n    ";
    };
    // Ps:格式校验
    // *校验身份证号码
    ToolsDocService.prototype.checkCardNo = function () {
        return "\n      // \u6821\u9A8C\u8EAB\u4EFD\u8BC1\u53F7\u7801\n\n      // value: \u503C\n\n      const checkCardNo = (value) => {\n        const reg = /(^d{15}$)|(^d{18}$)|(^d{17}(d|X|x)$)/;\n        return reg.test(value);\n      };\n\n    ";
    };
    // *校验是否包含中文
    ToolsDocService.prototype.haveCNChars = function () {
        return "\n      // \u6821\u9A8C\u662F\u5426\u5305\u542B\u4E2D\u6587\n\n      // value: \u503C\n\n      const haveCNChars = (value) => {\n        const reg = /[\\u4e00-\\u9fa5]/;\n        return reg.test(value);\n      };\n\n    ";
    };
    // *校验是否为中国大陆的邮政编码
    ToolsDocService.prototype.isPostCode = function () {
        return "\n      // \u6821\u9A8C\u662F\u5426\u4E3A\u4E2D\u56FD\u5927\u9646\u7684\u90AE\u653F\u7F16\u7801\n\n      // value: \u503C\n\n      const isPostCode = (value) => {\n        const reg = /^[1-9][0-9]{5}$/;\n        return reg.test(value.toString());\n      };\n\n    ";
    };
    // *校验是否为IPv6地址
    ToolsDocService.prototype.isIPv6 = function () {
        return "\n      // \u6821\u9A8C\u662F\u5426\u4E3AIPv6\u5730\u5740\n\n      // value: \u503C\n\n      const isIPv6 = (str) => {\n        return Boolean(str.match(/:/g)?str.match(/:/g).length<=7:false && /::/.test(str)?/^([da-f]{1,4}(:|::)){1,6}[da-f]{1,4}$/i.test(str):/^([da-f]{1,4}:){7}[da-f]{1,4}$/i.test(str));\n      };\n\n    ";
    };
    // *校验是否为邮箱地址
    ToolsDocService.prototype.isEmail = function () {
        return "\n      // \u6821\u9A8C\u662F\u5426\u4E3A\u90AE\u7BB1\u5730\u5740\n\n      // value: \u503C\n\n      const isEmail = (value) => {\n        const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/;\n        return reg.test(value);\n      };\n\n    ";
    };
    // *校验是否为中国大陆手机号
    ToolsDocService.prototype.isTel = function () {
        return "\n      // \u6821\u9A8C\u662F\u5426\u4E3A\u4E2D\u56FD\u5927\u9646\u624B\u673A\u53F7\n\n      // value: \u503C\n\n      const isTel = (value) => {\n        const reg = /^1[3,4,5,6,7,8,9][0-9]{9}$/;\n        return reg.test(value.toString());\n      };\n\n    ";
    };
    // *校验是否包含emoji表情
    ToolsDocService.prototype.isEmojiCharacter = function () {
        return "\n      // \u6821\u9A8C\u662F\u5426\u5305\u542Bemoji\u8868\u60C5\n\n      // value: \u503C\n\n      const isEmojiCharacter = (value) => {\n        value = String(value);\n        for (let i = 0; i < value.length; i++) {\n            const hs = value.charCodeAt(i);\n            if (0xd800 <= hs && hs <= 0xdbff) {\n                if (value.length > 1) {\n                    const ls = value.charCodeAt(i + 1);\n                    const uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;\n                    if (0x1d000 <= uc && uc <= 0x1f77f) {\n                        return true;\n                    }\n                }\n            } else if (value.length > 1) {\n                const ls = value.charCodeAt(i + 1);\n                if (ls == 0x20e3) {\n                    return true;\n                }\n            } else {\n                if (0x2100 <= hs && hs <= 0x27ff) {\n                    return true;\n                } else if (0x2B05 <= hs && hs <= 0x2b07) {\n                    return true;\n                } else if (0x2934 <= hs && hs <= 0x2935) {\n                    return true;\n                } else if (0x3297 <= hs && hs <= 0x3299) {\n                    return true;\n                } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030\n                        || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b\n                        || hs == 0x2b50) {\n                    return true;\n                }\n            }\n        }\n        return false;\n    };\n\n    ";
    };
    // Ps:判断类型
    // *判断是否是数字
    ToolsDocService.prototype.isNumber = function () {
        return "\n      // \u5224\u65AD\u662F\u5426\u662F\u6570\u5B57\n\n      // value: \u503C\n\n      function isNumber(value){\n        return Object.prototype.toString.call(value) === '[object Number]' && !isNaN(value);\n      };\n\n      isNumber(-1)   // true;\n      isNumber('-1') // false;\n      isNumber(-'1') // true;\n      isNumber(0)    // true;\n\n    ";
    };
    // *判断是否是数组
    ToolsDocService.prototype.isArray = function () {
        return "\n      // \u5224\u65AD\u662F\u5426\u662F\u6570\u7EC4\n\n      let arr = [];\n      let json = {};\n      let fn = () =>{};\n      let str = '\u8C2D\u91D1\u6D9B';\n\n      // 1. \u901A\u8FC7Array.isArray()\u5224\u65AD;\n            Array.isArray(arr)    // true\n            Array.isArray(json)   // false\n\n      // 2. \u901A\u8FC7Object.prototype.toString.call()\u5224\u65AD;\n            Object.prototype.toString.call(arr) ===\"[object Array]\";    // true\n            Object.prototype.toString.call(fn) ===\"[object Function]\";  // true\n\n      // 3. \u901A\u8FC7instanceof\u5224\u65AD;\n            arr instanceof Array;   // true\n            json instanceof Array;  // false\n\n      // 4. \u901A\u8FC7constructor\u5224\u65AD;\n            arr.constructor === Array   // true\n            json.constructor === Array  // \u62A5\u9519\n\n    ";
    };
    // Ps:设备判断
    // *判断是移动还是PC设备
    ToolsDocService.prototype.isMobile = function () {
        return "\n      // \u5224\u65AD\u662F\u79FB\u52A8\u8FD8\u662FPC\u8BBE\u5907\n\n      const isMobile = () => {\n        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))) {\n        return 'mobile';\n        }\n        return 'desktop';\n      };\n\n    ";
    };
    // *判断是否是苹果设备
    ToolsDocService.prototype.isAppleMobileDevice = function () {
        return "\n      // \u5224\u65AD\u662F\u5426\u662F\u82F9\u679C\u8BBE\u5907\n\n      const isAppleMobileDevice = () => {\n        let reg = /iphone|ipod|ipad|Macintosh/i;\n        return reg.test(navigator.userAgent.toLowerCase());\n      };\n\n    ";
    };
    // *判断是否是安卓设备
    ToolsDocService.prototype.isAndroidMobileDevice = function () {
        return "\n      // \u5224\u65AD\u662F\u5426\u662F\u5B89\u5353\u8BBE\u5907\n\n      const isAndroidMobileDevice = () => {\n        return /android/i.test(navigator.userAgent.toLowerCase());\n      };\n\n    ";
    };
    // *判断是Windows还是Mac系统
    ToolsDocService.prototype.isPcType = function () {
        return "\n      // \u5224\u65AD\u662FWindows\u8FD8\u662FMac\u7CFB\u7EDF\n\n      const isPcType = () => {\n        const agent = navigator.userAgent.toLowerCase();\n        const isMac = /macintosh|mac os x/i.test(navigator.userAgent);\n        const isWindows = agent.indexOf(\"win64\") >= 0 || agent.indexOf(\"wow64\") >= 0 || agent.indexOf(\"win32\") >= 0 || agent.indexOf(\"wow32\") >= 0;\n        if (isWindows) {\n            return \"windows\";\n        }\n        if (isMac) {\n            return \"mac\";\n        }\n      };\n\n    ";
    };
    // *判断是否是微信/QQ内置浏览器
    ToolsDocService.prototype.broswer = function () {
        return "\n      // \u5224\u65AD\u662F\u5426\u662F\u5FAE\u4FE1/QQ\u5185\u7F6E\u6D4F\u89C8\u5668\n\n      const broswer = () => {\n        const ua = navigator.userAgent.toLowerCase();\n        if (ua.match(/MicroMessenger/i) == \"micromessenger\") {\n            return \"VX\";\n        } else if (ua.match(/QQ/i) == \"qq\") {\n            return \"QQ\";\n        }\n        // \u4E0D\u662F\u5FAE\u4FE1/QQ\u5185\u7F6E\u6D4F\u89C8\u5668;\n        return false;\n      };\n\n    ";
    };
    // *获取浏览器型号和版本
    ToolsDocService.prototype.getExplorerInfo = function () {
        return "\n      // \u83B7\u53D6\u6D4F\u89C8\u5668\u578B\u53F7\u548C\u7248\u672C\n\n      const getExplorerInfo = () => {\n        let t = navigator.userAgent.toLowerCase();\n        return 0 <= t.indexOf(\"msie\") ? { //ie < 11\n            type: \"IE\",\n            version: Number(t.match(/msie ([d]+)/)[1])\n        } : !!t.match(/trident/.+?rv:(([d.]+))/) ? { // ie 11\n            type: \"IE\",\n            version: 11\n        } : 0 <= t.indexOf(\"edge\") ? {\n            type: \"Edge\",\n            version: Number(t.match(/edge/([d]+)/)[1])\n        } : 0 <= t.indexOf(\"firefox\") ? {\n            type: \"Firefox\",\n            version: Number(t.match(/firefox/([d]+)/)[1])\n        } : 0 <= t.indexOf(\"chrome\") ? {\n            type: \"Chrome\",\n            version: Number(t.match(/chrome/([d]+)/)[1])\n        } : 0 <= t.indexOf(\"opera\") ? {\n            type: \"Opera\",\n            version: Number(t.match(/opera.([d]+)/)[1])\n        } : 0 <= t.indexOf(\"Safari\") ? {\n            type: \"Safari\",\n            version: Number(t.match(/version/([d]+)/)[1])\n        } : {\n            type: t,\n            version: -1\n        }\n      };\n\n    ";
    };
    // Ps:浏览器操作
    // *平滑滚动到页面顶部
    ToolsDocService.prototype.scrollToTop = function () {
        return "\n    // \u6EDA\u52A8\u5230\u9875\u9762\u9876\u90E8\n\n    const scrollToTop = () => {\n      const height = document.documentElement.scrollTop || document.body.scrollTop;\n\n      if (height > 0) {\n          // 24\uFF1A 24hz\n          window.scrollTo(0, height - height / 24);\n          // \u52A8\u753B\u5E27\n          window.requestAnimationFrame(scrollToTop);\n      }\n    };\n\n    ";
    };
    // *滚动到页面底部
    ToolsDocService.prototype.scrollToBottom = function () {
        return "\n      // \u6EDA\u52A8\u5230\u9875\u9762\u5E95\u90E8\n\n      // change: \u6EDA\u52A8\u53D8\u5316\u901F\u5EA6\uFF1B\n      let change = 0\n      const scrollToBottom = () => {\n\n        change += 24\n\n        const height = document.documentElement.offsetHeight;\n\n        window.scrollTo(0, change);\n\n        if (height > change) {\n          // \u52A8\u753B\u5E27\n          window.requestAnimationFrame(scrollToBottom);\n        } else {\n          change = 0\n        }\n      };\n\n    ";
    };
    // *平滑滚动到指定元素区域
    ToolsDocService.prototype.smoothScroll = function () {
        return "\n      // \u6EDA\u52A8\u5230\u6307\u5B9A\u5143\u7D20\u533A\u57DF\n\n      // element: \u7C7B\u540D ==> '.tjt740'\n\n      // \u4F8B\uFF1A\n      // \u5E73\u6ED1\u6EDA\u52A8\u5230 id='item1'\u7684dom\u4F4D\u7F6E\u3002\n      document.getElementById('btn').onclick = () => {\n        smoothScroll('#item1');\n      }\n\n      const smoothScroll = (element) => {\n        document.querySelector(element).scrollIntoView({\n            behavior: 'smooth'\n        });\n      };\n\n    ";
    };
    // *获取可视窗口高度
    ToolsDocService.prototype.getClientHeight = function () {
        return "\n      // \u83B7\u53D6\u53EF\u89C6\u7A97\u53E3\u9AD8\u5EA6\n\n      const getClientHeight = () => {\n        let clientHeight = 0;\n        if (document.body.clientHeight && document.documentElement.clientHeight) {\n            clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;\n        }\n        else {\n            clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight : document.documentElement.clientHeight;\n        }\n        return clientHeight;\n      };\n\n    ";
    };
    // *获取可视窗口宽度
    ToolsDocService.prototype.getClientWidth = function () {
        return "\n      // \u83B7\u53D6\u53EF\u89C6\u7A97\u53E3\u5BBD\u5EA6\n\n      const getClientWidth = () => {\n        return (document.compatMode == \"BackCompat\" ? document.body : document.documentElement.clientWidth);\n      };\n\n    ";
    };
    // *打开浏览器全屏
    ToolsDocService.prototype.toFullScreen = function () {
        return "\n      // \u6253\u5F00\u6D4F\u89C8\u5668\u5168\u5C4F\n\n      const toFullScreen = () => {\n        let element = document.body;\n        if (element.requestFullscreen) {\n          element.requestFullscreen()\n        } else if (element.mozRequestFullScreen) {\n          element.mozRequestFullScreen()\n        } else if (element.msRequestFullscreen) {\n          element.msRequestFullscreen()\n        } else if (element.webkitRequestFullscreen) {\n          element.webkitRequestFullScreen()\n        }\n      };\n\n    ";
    };
    // *退出浏览器全屏
    ToolsDocService.prototype.exitFullscreen = function () {
        return "\n      // \u9000\u51FA\u6D4F\u89C8\u5668\u5168\u5C4F\n\n      const exitFullscreen = () => {\n        if (document.exitFullscreen) {\n          document.exitFullscreen()\n        } else if (document.msExitFullscreen) {\n          document.msExitFullscreen()\n        } else if (document.mozCancelFullScreen) {\n          document.mozCancelFullScreen()\n        } else if (document.webkitExitFullscreen) {\n          document.webkitExitFullscreen()\n        }\n      };\n\n    ";
    };
    // Ps:DOM操作
    // *事件监听
    ToolsDocService.prototype.listenEvent = function () {
        return "\n      // \u4E8B\u4EF6\u76D1\u542C\n\n      // \u4E3B\u6D41\u6D4F\u89C8\u5668:\n        obj.addEventListener('EventName', functionName, boolean);\n          // obj: \u89E6\u53D1\u4E8B\u4EF6\u7684\u76EE\u6807\u8282\u70B9  \u4E0D\u89C1\u5F97\u4E00\u5B9A\u8981\u52A0\u3002 \u770B\u517C\u5BB9\n          // 'EventName': \u4E8B\u4EF6\u7684\u540D\u79F0 \uFF08\u4E0D\u52A0on\uFF09 click\u3001mouseover...\n          // functionName: \u51FD\u6570\u7684\u540D\u5B57\uFF08fn1/fn2...;\n          // boolean : true/false(\u9ED8\u8BA4false\u4E0D\u5192\u6CE1);\n          /*\n            true : \u4E8B\u4EF6\u5728\u6355\u83B7\u9636\u6BB5\u6267\u884C   body -> parent -> son  \u6253\u5370\u4ECE\u5916\u5230\u91CC\n            false\uFF08\u9ED8\u8BA4\uFF09\uFF1A \u4E8B\u4EF6\u5728\u5192\u6CE1\u9636\u6BB5\u6267\u884C  son -> parent -> body  \u6253\u5370\u4ECE\u91CC\u5230\u5916\n          */\n\n\n      // IE8\u4EE5\u4E0B:\n        obj.attachEvent('on' + 'EventName', functionName, boolean);\n          // 'EventName': \u4E8B\u4EF6\u540D\u5B57\u3002 \uFF08\u5FC5\u987B\u52A0on\uFF09 onclick\u3001onmouseover...\n\n      //----------------------------------------------------------------------\n      // \u2605\u6CE8\u610F:\n        // (1) attachEvent\u662F\u540E\u7ED1\u5B9A\u5148\u6267\u884C(fn2\u3001fn1)\uFF0CaddEventListener\u662F\u5148\u7ED1\u5B9A\u5148\u6267\u884C(fn1\u3001fn2)\u3002\n        // (2) attachEvent \u7684this\u6307\u5411window, addEventListener \u7684this\u6307\u5411\u5F53\u524D\u5143\u7D20\n\n    ";
    };
    // *事件解绑
    ToolsDocService.prototype.eventRelieve = function () {
        return "\n      // \u4E8B\u4EF6\u89E3\u7ED1\n\n      // \u4E3B\u6D41\u6D4F\u89C8\u5668:\n            obj.removeEventListener('EventName',functionName,boolean);\n\n      // IE8\u4EE5\u4E0B:\n            obj.detachEvent('on'+'EventName',functionName,boolean);\n\n    ";
    };
    // *事件委托
    ToolsDocService.prototype.eventDelegation = function () {
        return "\n      <ul class=\"ul-box\">\n        <li class=\"li-box\">01</li>\n        <li class=\"li-box\">02</li>\n        <li class=\"li-box\">03</li>\n        <li class=\"li-box\">04</li>\n        <li class=\"li-box\">05</li>\n      </ul>\n\n      // \u4E8B\u4EF6\u59D4\u6258 (\u4E0D\u6D88\u8017\u6027\u80FD)\n\n      // \u4E3B\u6D41\u6D4F\u89C8\u5668:\n      const ulBox = document.querySelector('.ul-box');\n\n      ulBox.onclick = (e) => {\n        if (e.target.nodeName.toLowerCase() == 'li') { // nodeName \u90FD\u662F\u5927\u5199\uFF0C\u7528toLowerCase()\u8F6C\u4E3A\u5C0F\u5199\n          console.log(e.target) // 01 02 03 ...\n        }\n      }\n\n      // \u517C\u5BB9IE\u5199\u6CD5:\n      var ul = document.getElementsByTagName('ul')[0] // \u7528var\u4E3A\u4E86\u517C\u5BB9IE let\u4E5F\u53EF\u4EE5\u3002 \u5728\u7236\u7EA7\u4E0A\u5B9A\u4E49\u3002\n      ul.onclick = function (e) {\n        var e = e || window.event\n        var that = e.target || e.srcElement\n        if (that.nodeName.toLowerCase() == 'li') {\n          console.log(that) // 01 02 03 ...\n        }\n      }\n\n    ";
    };
    // *阻止冒泡事件
    ToolsDocService.prototype.preventBubble = function () {
        return "\n      // \u963B\u6B62\u5192\u6CE1\u4E8B\u4EF6\n\n      function preventBubble() {\n        var e = e || window.event;\n\n        if (e.stopPropagation) {\n          e.stopPropagation()   // W3C \u963B\u6B62\u5192\u6CE1;\n        } else {\n          e.cancelBubble = true // IE \u963B\u6B62\u5192\u6CE1;\n        }\n\n      };\n\n      eventFun(box, 'click', preventBubble, false);\n\n    ";
    };
    // *阻止默认行为
    ToolsDocService.prototype.preventDefault = function () {
        return "\n      // \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A\n\n      function preventDefault() {\n        var e = e || window.event;\n\n        if (e.preventDefault) {\n          e.preventDefault() // W3C \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A;\n        } else {\n          e.returnValue = false // IE \u963B\u6B62\u9ED8\u8BA4\u884C\u4E3A;\n        }\n\n      };\n\n      eventFun(box, 'click', preventDefault, false);\n\n    ";
    };
    // Ps:时间操作
    // *格式化时间
    ToolsDocService.prototype.dateFormater = function () {
        return "\n      // \u683C\u5F0F\u5316\u65F6\u95F4\n\n      // formater: \u683C\u5F0F YYYY-MM-DD HH:mm:ss \u3001 yyyy.MM.DD HH:mm:ss ...\n      // time: \u65F6\u95F4 new Date().getTime() 1647854267083\uFF08\u53EF\u4E0D\u4F20\uFF09\n\n      const dateFormater = (formater, time) => {\n        let date = time ? new Date(time) : new Date(),\n            Y = date.getFullYear() + '',\n            M = date.getMonth() + 1,\n            D = date.getDate(),\n            H = date.getHours(),\n            m = date.getMinutes(),\n            s = date.getSeconds();\n        return formater.replace(/YYYY|yyyy/g, Y)\n            .replace(/YY|yy/g, Y.slice(2, 4))\n            .replace(/MM/g, (M < 10 ? '0' : '') + M)\n            .replace(/DD/g, (D < 10 ? '0' : '') + D)\n            .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)\n            .replace(/mm/g, (m < 10 ? '0' : '') + m)\n            .replace(/ss/g, (s < 10 ? '0' : '') + s)\n      };\n\n      dateFormater('YYYY-MM-DD HH:mm:ss') // '2022-03-21 14:40:19'\n      dateFormater('YYYYMMDDHHmmss')      // '20220321144026'\n      dateFormater('yyyy.MM.DD HH:mm:ss') // '2022.03.21 14:41:02'\n\n    ";
    };
    // *当前时间
    ToolsDocService.prototype.nowTime = function () {
        return "\n      // \u5F53\u524D\u65F6\u95F4\n\n      const nowTime = () => {\n        const now = new Date();\n        const year = now.getFullYear();\n        const month = now.getMonth();\n        const date = now.getDate() >= 10 ? now.getDate() : ('0' + now.getDate());\n        const hour = now.getHours() >= 10 ? now.getHours() : ('0' + now.getHours());\n        const miu = now.getMinutes() >= 10 ? now.getMinutes() : ('0' + now.getMinutes());\n        const sec = now.getSeconds() >= 10 ? now.getSeconds() : ('0' + now.getSeconds());\n        return +year + \"\u5E74\" + (month + 1) + \"\u6708\" + date + \"\u65E5 \" + hour + \":\" + miu + \":\" + sec;\n      };\n\n    ";
    };
    // Ps:JavaScript操作
    // *防抖
    ToolsDocService.prototype.debounce = function () {
        return "\n      // \u9632\u6296: \u5728\u6CA1\u6709\u8FDE\u7EED\u4E8B\u4EF6\u89E6\u53D1n\u79D2\u540E\uFF0C\u6267\u884C\u4E00\u6B21\u56DE\u8C03\u51FD\u6570\uFF0C\u5728n\u79D2\u5185\u91CD\u65B0\u89E6\u53D1\u4E8B\u4EF6\u5219\u91CD\u65B0\u8BA1\u7B97\u65F6\u95F4\u3002\n\n      // fn: \u9632\u6296\u7ED3\u675F\u540E\u89E6\u53D1\u7684\u56DE\u8C03\u51FD\u6570\n      // ms: \u6BEB\u79D2\u6570\n\n      /* <input type=\"text\" placeholder=\"\u9632\u6296\" id=\"debounce\"> */\n\n      const debounceDom = document.getElementById('debounce');\n\n      function debounce(fn, ms) {\n        let timer = null;\n        return (...arg) => {\n          clearTimeout(timer);\n          timer = setTimeout(() => {\n            fn.apply(this, arg);\n          }, ms)\n        }\n      }\n\n      function fn(e) {\n        console.log(e);\n        console.log(\u9632\u6296\u6210\u529F: e.target.value);\n      }\n\n      debounceDom.addEventListener('input', debounce(fn, 2000), false);\n\n    ";
    };
    // *节流
    ToolsDocService.prototype.throttle = function () {
        return "\n      // \u8282\u6D41: \u8FDE\u7EED\u4E8B\u4EF6\u53D1\u751F\u65F6\uFF0C\u6BCF\u9694n\u79D2\u89E6\u53D1\u4E00\u6B21\u4E8B\u4EF6\u3002\n\n      // fn: n\u79D2\u5185\u4F1A\u88AB\u89E6\u53D1\u4E00\u6B21\u7684\u56DE\u8C03\u51FD\u6570\n      // ms: \u6BEB\u79D2\u6570\n\n      /* <input type=\"text\" placeholder=\"\u8282\u6D41\" id=\"throttle\"> */\n\n      const throttleDom = document.getElementById(\"throttle\");\n\n      function throttle(fn, ms) {\n        let time = null;\n        let mark = true; // \u6807\u8BB0\n        return (...arg) => {\n          if (mark === false) {\n            return;\n          }\n          clearTimeout(time);\n          mark = false;\n          time = setTimeout(() => {\n            fn.apply(this, arg);\n            mark = true;\n          }, ms);\n        };\n      }\n\n      function fn(e) {\n        console.log(e);\n        console.log(\u8282\u6D41\u6210\u529F:e.target.value);\n      }\n\n      throttleDom.addEventListener(\"input\", throttle(fn, 2000), false);\n\n    ";
    };
    // *数据类型判断
    ToolsDocService.prototype.getType = function () {
        return "\n      // \u6570\u636E\u7C7B\u578B\u5224\u65AD\n\n      // val: \u60F3\u8981\u8FDB\u884C\u5224\u65AD\u7684\u53C2\u6570\n\n      function getType(value) {\n        if (value === null) {\n            return value + \"\";\n        }\n        // \u5224\u65AD\u6570\u636E\u662F\u5F15\u7528\u7C7B\u578B\u7684\u60C5\u51B5\n        if (typeof value === \"object\") {\n            let valueClass = Object.prototype.toString.call(value),\n                type = valueClass.split(\" \")[1].split(\"\");\n            type.pop();\n            return type.join(\"\").toLowerCase();\n        } else {\n            // \u5224\u65AD\u6570\u636E\u662F\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u60C5\u51B5\u548C\u51FD\u6570\u7684\u60C5\u51B5\n            return typeof value;\n        }\n      };\n\n      getType()       // 'undefined'\n      getType(null)   // 'null'\n      getType([])     // 'array'\n\n    ";
    };
    // *深克隆/深拷贝
    ToolsDocService.prototype.deepClone = function () {
        return "\n      // \u6DF1\u514B\u9686/\u6DF1\u62F7\u8D1D\n\n      // obj: \u60F3\u8981\u88AB\u514B\u9686\u7684\u5BF9\u8C61\n\n      function deepClone(obj, hash = new WeakMap()) {\n        // \u65E5\u671F\u5BF9\u8C61\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u65E5\u671F\u5BF9\u8C61\n        if (obj instanceof Date) {\n            return new Date(obj);\n        }\n        //\u6B63\u5219\u5BF9\u8C61\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6B63\u5219\u5BF9\u8C61\n        if (obj instanceof RegExp) {\n            return new RegExp(obj);\n        }\n        //\u5982\u679C\u5FAA\u73AF\u5F15\u7528,\u5C31\u7528 weakMap \u6765\u89E3\u51B3\n        if (hash.has(obj)) {\n            return hash.get(obj);\n        }\n        // \u83B7\u53D6\u5BF9\u8C61\u6240\u6709\u81EA\u8EAB\u5C5E\u6027\u7684\u63CF\u8FF0\n        let allDesc = Object.getOwnPropertyDescriptors(obj);\n        // \u904D\u5386\u4F20\u5165\u53C2\u6570\u6240\u6709\u952E\u7684\u7279\u6027\n        let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);\n\n        hash.set(obj, cloneObj);\n        for (let key of Reflect.ownKeys(obj)) {\n            if (typeof obj[key] === 'object' && obj[key] !== null) {\n                cloneObj[key] = deepClone(obj[key], hash);\n            } else {\n                cloneObj[key] = obj[key];\n            }\n        }\n        return cloneObj;\n      };\n\n\n      let arr = [[1, 2, [3]], [() => { return 4 }, [5, [6]]], { a: 7, b() { return 8 } }]\n      let cloneArr = deepClone(arr);  // \u00A0[Array(3), Array(2), {\u2026}]\n\n      let date = new Date();\n      let cloneDate = deepClone(date); // Wed Mar 30 2022 23:54:58 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)\n\n    ";
    };
    // *模糊查询/模糊匹配
    ToolsDocService.prototype.blurrySearch = function () {
        return "\n      // \u6A21\u7CCA\u67E5\u8BE2/\u6A21\u7CCA\u5339\u914D\n\n      // allDataList: \u60F3\u8981\u88AB\u6A21\u7CCA\u5339\u914D\u7684\u6570\u7EC4\n\n      // searchContent: \u6A21\u7CCA\u5339\u914D\u7684\u5185\u5BB9\n\n      function blurrySearch(allDataList, searchContent) {\n        return allDataList.filter(v => v.name.match(searchContent));\n      };\n\n      let allTeacherList = [\n        {\n        \"id\": 15649876456456,\n        \"name\": \"\u621A\u601D\u5B81\",\n        \"code\": \"4311221\"\n        },\n        {\n            \"id\": 15649876456457,\n            \"name\": \"\u8C2D\u91D1\u6D9B\",\n            \"code\": \"1311641\",\n\n        },\n        {\n            \"id\": 15649876456458,\n            \"name\": \"\u67F3\u6654\",\n            \"code\": \"4311271\",\n        }\n      ];\n\n      let teacherList = blurrySearch(allTeacherList,'\u6D9B')  // [{ \"id\": 15649876456457, \"name\": \"\u8C2D\u91D1\u6D9B\",\"code\": \"1311641\"}]\n\n    ";
    };
    ToolsDocService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ToolsDocService);
    return ToolsDocService;
}());
exports.ToolsDocService = ToolsDocService;
