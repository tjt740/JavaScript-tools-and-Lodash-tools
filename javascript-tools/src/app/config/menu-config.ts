export const MenuConfig = [
  // Tjt: 数组操作
  {
    title: '数组操作',
    icon: 'smile',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '乱序数组',
        router: '/index/util-4',
        functionName: 'randomArray',
      },
      {
        exhibitStr: '随机获取数组中的某个数',
        router: '/index/util-5',
        functionName: 'randomArrayNum',
      },
      {
        exhibitStr: '数组按照数组中某一对象进行排序',
        router: '/index/util-49',
        functionName: 'sortItemArray',
      },
      {
        exhibitStr: '交换数组中两个元素',
        router: '/index/util-53',
        functionName: 'swapItems',
      },
      {
        exhibitStr: '[Ld]将数组拆分成多个【size】长的区块，组成新数组',
        router: '/index/util-57',
        functionName: 'chunkArray',
      },
      {
        exhibitStr: '[Ld]剔除数组中的假值，返回新数组',
        router: '/index/util-58',
        functionName: 'compactArray',
      },
      {
        exhibitStr: '[Ld]将【Array】与任何数组或值拼接，返回新数组',
        router: '/index/util-59',
        functionName: 'concatArray',
      },
      {
        exhibitStr: '[Ld]筛选出【Array】中需要被排除的值[values]，返回新数组',
        router: '/index/util-60',
        functionName: 'difference',
      },
      {
        exhibitStr: '[Ld]获取数组中第一个元素',
        router: '/index/util-67',
        functionName: 'getFirstElement',
      },
      {
        exhibitStr: '[Ld]获取数组中最后一个元素',
        router: '/index/util-61',
        functionName: 'getLastElement',
      },
      {
        exhibitStr: '[Ld]创建一个切片数组，去除Array★【前面的】★n个元素,返回新数组',
        router: '/index/util-62',
        functionName: 'dropStartArray',
      },
      {
        exhibitStr: '[Ld]创建一个切片数组，去除Array★【后面的】★n个元素,返回新数组',
        router: '/index/util-63',
        functionName: 'dropEndArray',
      },
      {
        exhibitStr: '[Ld]使用 value 值来填充（替换） Array，会改变原数组',
        router: '/index/util-64',
        functionName: 'fillArray',
      },
      {
        exhibitStr: '[Ld]【从前向后】返回数组中符合条件的第一个下标',
        router: '/index/util-65',
        functionName: 'findIndex',
      },
      {
        exhibitStr: '[Ld]【从后向前】返回数组中符合条件的第一个下标',
        router: '/index/util-66',
        functionName: 'findLastIndex',
      },

    ],
  },

  // Tjt: 字符串操作
  {
    title: '字符串操作',
    icon: 'heart',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '随机生成自定义长度的字符串',
        router: '/index/util-6',
        functionName: 'randomStr',
      },
      {
        exhibitStr: '字符串首字母大写',
        router: '/index/util-7',
        functionName: 'firstStrUpper',
      },
      {
        exhibitStr: '驼峰命名转换成短横线命名',
        router: '/index/util-8',
        functionName: 'getKebabCase',
      },
      {
        exhibitStr: '短横线命名转换成驼峰命名',
        router: '/index/util-9',
        functionName: 'getCamelCase',
      },
    ],
  },

  // Tjt: 数字操作
  {
    title: '数字操作',
    icon: 'crown',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '随机数字',
        router: '/index/util-2',
        functionName: 'randomNum',
      },
      {
        exhibitStr: '数字转化为大写金额',
        router: '/index/util-10',
        functionName: 'digitUppercase',
      },
      {
        exhibitStr: '数字转中文',
        router: '/index/util-1',
        functionName: 'intToChinese',
      },
      {
        exhibitStr: '数字千分位分隔',
        router: '/index/util-3',
        functionName: 'partitionNum',
      },
    ],
  },

  // Tjt: JSON对象操作
  {
    title: 'JSON操作',
    icon: 'cloud',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '遍历json数组',
        router: '/index/util-61',
        functionName: 'mapJson',
      },
    ],
  },

  // Tjt: URL操作
  {
    title: 'URL操作',
    icon: 'disconnect',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '获取URL上参数信息',
        router: '/index/util-27',
        functionName: 'getUrlInfo',
      },
    ],
  },

  // Tjt: 存储(localStorage/sessionStorage)操作
  {
    title: '存储操作',
    icon: 'download',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '获取localStorage',
        router: '/index/util-11',
        functionName: 'getLocalStorage',
      },
      {
        exhibitStr: '存储localStorage',
        router: '/index/util-12',
        functionName: 'setLocalStorage',
      },
      {
        exhibitStr: '删除localStorage',
        router: '/index/util-13',
        functionName: 'removeLocalStorage',
      },
      {
        exhibitStr: '获取sessionStorage',
        router: '/index/util-14',
        functionName: 'getSessionStorage',
      },
      {
        exhibitStr: '存储sessionStorage',
        router: '/index/util-15',
        functionName: 'setSessionStorage',
      },
      {
        exhibitStr: '删除sessionStorage',
        router: '/index/util-16',
        functionName: 'removeSessionStorage',
      },
    ],
  },

  // Tjt: cookie操作
  {
    title: 'cookie操作',
    icon: 'sliders',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '获取cookie',
        router: '/index/util-17',
        functionName: 'getCookie',
      },
      {
        exhibitStr: '设置cookie',
        router: '/index/util-18',
        functionName: 'setCookie',
      },
      {
        exhibitStr: '删除cookie',
        router: '/index/util-19',
        functionName: 'delCookie',
      },
    ],
  },

  // Tjt: 格式校验
  {
    title: '格式校验',
    icon: 'safety-certificate',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '校验身份证号码',
        router: '/index/util-20',
        functionName: 'checkCardNo',
      },
      {
        exhibitStr: '校验是否包含中文',
        router: '/index/util-21',
        functionName: 'haveCNChars',
      },
      {
        exhibitStr: '校验是否为中国大陆的邮编',
        router: '/index/util-22',
        functionName: 'isPostCode',
      },
      {
        exhibitStr: '校验是否为IPv6地址',
        router: '/index/util-23',
        functionName: 'isIPv6',
      },
      {
        exhibitStr: '校验是否为邮箱地址',
        router: '/index/util-24',
        functionName: 'isEmail',
      },
      {
        exhibitStr: '校验是否为中国大陆手机号',
        router: '/index/util-25',
        functionName: 'isTel',
      },
      {
        exhibitStr: '校验是否包含emoji表情',
        router: '/index/util-26',
        functionName: 'isEmojiCharacter',
      },
    ],
  },

  // Tjt: 判断类型
  {
    title: '判断类型',
    icon: 'message',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '判断是否是数字',
        router: '/index/util-47',
        functionName: 'isNumber',
      },
      {
        exhibitStr: '判断是否是数组',
        router: '/index/util-48',
        functionName: 'isArray',
      },
    ],
  },

  // Tjt: 设备判断
  {
    title: '设备判断',
    icon: 'instagram',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '判断是移动还是PC设备',
        router: '/index/util-28',
        functionName: 'isMobile',
      },
      {
        exhibitStr: '判断是否是苹果设备',
        router: '/index/util-29',
        functionName: 'isAppleMobileDevice',
      },
      {
        exhibitStr: '判断是否是安卓设备',
        router: '/index/util-30',
        functionName: 'isAndroidMobileDevice',
      },
      {
        exhibitStr: '判断是Windows还是Mac系统',
        router: '/index/util-31',
        functionName: 'isPcType',
      },
      {
        exhibitStr: '判断是否是微信/QQ内置浏览器',
        router: '/index/util-32',
        functionName: 'broswer',
      },
      {
        exhibitStr: '获取浏览器型号和版本',
        router: '/index/util-33',
        functionName: 'getExplorerInfo',
      },
    ],
  },

  // Tjt: 浏览器操作
  {
    title: '浏览器操作',
    icon: 'desktop',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '滚动到页面顶部',
        router: '/index/util-34',
        functionName: 'scrollToTop',
      },
      {
        exhibitStr: '滚动到页面底部',
        router: '/index/util-35',
        functionName: 'scrollToBottom',
      },
      {
        exhibitStr: '滚动到指定元素区域',
        router: '/index/util-36',
        functionName: 'smoothScroll',
      },
      {
        exhibitStr: '获取可视窗口高度',
        router: '/index/util-37',
        functionName: 'getClientHeight',
      },
      {
        exhibitStr: '获取可视窗口宽度',
        router: '/index/util-38',
        functionName: 'getClientWidth',
      },
      {
        exhibitStr: '打开浏览器全屏',
        router: '/index/util-39',
        functionName: 'toFullScreen',
      },
      {
        exhibitStr: '退出浏览器全屏',
        router: '/index/util-40',
        functionName: 'exitFullscreen',
      },
    ],
  },

  // Tjt: 时间操作
  {
    title: '时间操作',
    icon: 'field-time',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '格式化时间',
        router: '/index/util-41',
        functionName: 'dateFormater',
      },
      {
        exhibitStr: '当前时间',
        router: '/index/util-42',
        functionName: 'nowTime',
      },
    ],
  },

  // Tjt:DOM操作
  {
    title: 'DOM操作',
    icon: 'box-plot',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '事件监听',
        router: '/index/util-43',
        functionName: 'listenEvent',
      },
      {
        exhibitStr: '事件解绑',
        router: '/index/util-44',
        functionName: 'eventRelieve',
      },
      {
        exhibitStr: '事件委托',
        router: '/index/util-50',
        functionName: 'eventDelegation',
      },
      {
        exhibitStr: '阻止冒泡事件',
        router: '/index/util-45',
        functionName: 'preventBubble',
      },
      {
        exhibitStr: '阻止默认行为',
        router: '/index/util-46',
        functionName: 'preventDefault',
      },
    ],
  },

  // Tjt: JavaScript操作
  {
    title: 'JavaScript操作',
    icon: 'code',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '防抖',
        router: '/index/util-51',
        functionName: 'debounce',
      },
      {
        exhibitStr: '节流',
        router: '/index/util-52',
        functionName: 'throttle',
      },
      {
        exhibitStr: '数据类型判断',
        router: '/index/util-54',
        functionName: 'getType',
      },
      {
        exhibitStr: '深拷贝/深克隆',
        router: '/index/util-55',
        functionName: 'deepClone',
      },
      {
        exhibitStr: '模糊查询/模糊匹配',
        router: '/index/util-56',
        functionName: 'blurrySearch',
      },
    ],
  },
];
