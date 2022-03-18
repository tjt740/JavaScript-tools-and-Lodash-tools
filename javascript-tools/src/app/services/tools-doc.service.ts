import { Injectable } from '@angular/core';

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

  // Ps:JSON操作

  // Ps:URL操作
  // *获取URL上参数
  getUrlInfo() {
    return `
      // 获取URL上参数

      const getUrlInfo = ()=> {
        let urlInfo = {} as any;
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

  // *

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
      // days:   持续天数

      const setCookie = (key, value, days) => {
        const days = 30;
        const exp = new Date();
        exp.setTime(exp.getTime() + days*24*60*60*1000);
        document.cookie = key + '=' + value + ';expires=' + exp.toUTCString();
      };

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
            return "weixin";
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
  // *滚动到页面顶部
  scrollToTop() {
    return `
    // 滚动到页面顶部

    const scrollToTop = () => {
      const height = document.documentElement.scrollTop || document.body.scrollTop;

      if (height > 0) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, height - height / 8);
      }

    };

    `;
  };

  // *滚动到页面底部
  scrollToBottom() {
    return `
      // 滚动到页面底部

      const scrollToBottom = () => {
        window.scrollTo(0, document.documentElement.clientHeight);
      };

    `;
  };

  // *滚动到指定元素区域
  smoothScroll() {
    return `
      // 滚动到指定元素区域

      // element: 类名 ==> '.tjt740'

      const smoothScroll = (element) => {
        document.querySelector(element).scrollIntoView({
            behavior: 'smooth'
        });
      };

    `;
  };

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
  };

  // *获取可视窗口宽度
  getClientWidth() {
    return `
      // 获取可视窗口宽度

      const getClientWidth = () => {
        return (document.compatMode == "BackCompat" ? document.body : document.documentElement.clientWidth;
      };

    `;
  };


  // Ps:时间操作
}
