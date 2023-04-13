export const MenuConfig = [
  // Tjt: 数组操作
  {
    title: '数组操作',
    icon: 'icon--devil',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '乱序数组',
        router: '/index/util-4',
        functionName: 'randomArray',
      },
      {
        exhibitStr: '打平/扁平化数组',
        router: '/index/util-78',
        functionName: 'flatArray',
      },
      {
        exhibitStr: '数组按照某属性/键值计数',
        router: '/index/util-81',
        functionName: 'countBy',
      },
      {
        exhibitStr: '筛选数组中相同的元素组成新数组',
        router: '/index/util-79',
        functionName: 'screenSthArray',
      },
      {
        exhibitStr: '获取数组最后一个元素',
        router: '/index/util-82',
        functionName: 'lastArrayItem',
      },
      {
        exhibitStr: '匹配两个数组中相等值，返回新数组',
        router: '/index/util-72',
        functionName: 'filterArray',
      },
      {
        exhibitStr: '从数组中过滤出假值',
        router: '/index/util-73',
        functionName: 'filterBooleanArray',
      },
      {
        exhibitStr: '筛选出数组中重复最多的值',
        router: '/index/util-75',
        functionName: 'filterArrayRepetition',
      },
      {
        exhibitStr: '数组求和、取数组最大值、最小值',
        router: '/index/util-74',
        functionName: 'reduceArray',
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
        exhibitStr: '数组按照某一键值组成新数组（复杂）',
        router: '/index/util-97',
        functionName: 'filterSthForArray',
      },
      {
        exhibitStr: '交换数组中两个元素',
        router: '/index/util-53',
        functionName: 'swapItems',
      },
      {
        exhibitStr: '[Ld]将数组拆分成多个【size】长的区块，返回新数组',
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
        exhibitStr:
          '[Ld]创建一个切片数组，去除Array★【前面的】★n个元素,返回新数组',
        router: '/index/util-62',
        functionName: 'dropStartArray',
      },
      {
        exhibitStr:
          '[Ld]创建一个切片数组，去除Array★【后面的】★n个元素,返回新数组',
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
      {
        exhibitStr: '[Ld]返回value在数组中的下标，没有则返回-1',
        router: '/index/util-68',
        functionName: 'indexOfArray',
      },
      {
        exhibitStr:
          '[Ld]返回数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）',
        router: '/index/util-69',
        functionName: 'initialArray',
      },
      {
        exhibitStr: '[Ld]返回新的去重后的数组',
        router: '/index/util-85',
        functionName: 'uniqArray',
      },
      {
        exhibitStr:
          '[Ld]返回新的去重后的数组（1.能处理复杂数组 2.能附带去重条件）',
        router: '/index/util-86',
        functionName: 'uniqByArray',
      },
      {
        exhibitStr: '[Ld]返回新的去重数组（去重数组中相同的json）',
        router: '/index/util-87',
        functionName: 'uniqWithArray',
      },
      {
        exhibitStr: '[Ld]提取/对比两个数组中相同的值，返回新数组',
        router: '/index/util-91',
        functionName: 'intersectionWithArray',
      },
      {
        exhibitStr: '[Ld]将解构的数组转成JSON对象',
        router: '/index/util-98',
        functionName: 'fromPairs',
      },
    ],
  },

  // Tjt: 字符串操作
  {
    title: '字符串操作',
    icon: 'icon--astonished',
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
      {
        exhibitStr: '获取/筛选/匹配字符串中相同的字符，返回新数组',
        router: '/index/util-92',
        functionName: 'getSameStrToArr',
      },
    ],
  },

  // Tjt: 数字操作
  {
    title: '数字操作',
    icon: 'icon--scared-',
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
    icon: 'icon--cool',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '遍历json数组',
        router: '/index/util-80',
        functionName: 'mapJson',
      },
      {
        exhibitStr: '判断json对象是否为空对象 || 判断json中是否存在假值',
        router: '/index/util-71',
        functionName: 'isObjEmpty',
      },
      {
        exhibitStr: '删除json中假值，生成新json',
        router: '/index/util-83',
        functionName: 'removeNullAndUndefinedJSON',
      },
      {
        exhibitStr: '打平JSON，找到键值对应的枚举，生成新数组',
        router: '/index/util-84',
        functionName: 'flatJSON',
      },
      {
        exhibitStr: '打平、扁平化JSON/打平Object对象',
        router: '/index/util-96',
        functionName: 'flattenObj',
      },
      {
        exhibitStr: '[Ld]将JSON对象转成被解构的数组',
        router: '/index/util-99',
        functionName: 'toPairs',
      },
    ],
  },

  // Tjt: URL操作
  {
    title: 'URL操作',
    icon: 'icon--in-love',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '获取URL上参数信息',
        router: '/index/util-27',
        functionName: 'getUrlInfo',
      },
      {
        exhibitStr: '获取URL上某一键值对应的值',
        router: '/index/util-70',
        functionName: 'getUrlKeyInfo',
      },
      {
        exhibitStr: '与location相关的一些操作',
        router: '/index/util-76',
        functionName: 'aboutLocation',
      },
    ],
  },

  // Tjt: 存储(localStorage/sessionStorage)操作
  {
    title: 'localStorage / sessionStorage操作',
    icon: 'icon--angry',
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
    icon: 'icon--angel',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '获取cookie',
        router: '/index/util-17',
        functionName: 'getCookie',
      },
      {
        exhibitStr: '获取其他页面cookie，同时格式化cookie',
        router: '/index/util-90',
        functionName: 'getHTMLCookie',
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
    icon: 'icon--flushed',
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

  // Tjt: 判断/检查信息
  {
    title: '判断/检查信息',
    icon: 'icon--smirking',
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
      {
        exhibitStr: '[Ld]深比较判断对象是否相等',
        router: '/index/util-88',
        functionName: 'isEqual',
      },
    ],
  },

  // Tjt: 设备判断
  {
    title: '设备判断',
    icon: 'icon--thinking',
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
    icon: 'icon--tongue-1',
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
        exhibitStr: '平滑滚动/不平滑跳转 到指定元素区域',
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
    icon: 'icon--mute',
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
    icon: 'icon--zombie',
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
    icon: 'icon--vomiting-',
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
      {
        exhibitStr: '等待函数',
        router: '/index/util-77',
        functionName: 'waitTime',
      },
      {
        exhibitStr: '颜色转换 rgba ⇋ #000',
        router: '/index/util-89',
        functionName: 'changeColor',
      },
      {
        exhibitStr: '复制功能',
        router: '/index/util-93',
        functionName: 'copy',
      },
      {
        exhibitStr:
          '修改伪类样式的方法，动态控制伪元素(::before,::after)的方法',
        router: '/index/util-94',
        functionName: 'changAfterBefore',
      },
      {
        exhibitStr: '创建a链接并点击',
        router: '/index/util-95',
        functionName: 'createALinkAndClick',
      },
      {
        exhibitStr: '可拖拽移动弹窗',
        router: '/index/util-100',
        functionName: 'dragModalDemo',
      },
      {
        exhibitStr: '生成uuid',
        router: '/index/util-101',
        functionName: 'generateUuid',
      },
    ],
  },
];
