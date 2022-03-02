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
      },
      {
        exhibitStr: '随机获取数组中的某个数',
        router: '/index/util-5'
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      }
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
      },
      {
        exhibitStr: '字符串首字母大写',
        router: '/index/util-7',
      },
      {
        exhibitStr: '驼峰命名转换成短横线命名',
        router: '/index/util-8',
      },
      {
        exhibitStr: '短横线命名转换成驼峰命名',
        router: '/index/util-9',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      }
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
      },
      {
        exhibitStr: '数字转化为大写金额',
        router: '/index/util-10',
      },
      {
        exhibitStr: '数字转中文',
        router: '/index/util-1',
      },
      {
        exhibitStr: '数字千分位分隔',
        router: '/index/util-3',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      }
    ],
  },

  // Tjt: JSON对象操作
  {
    title: 'JSON操作',
    icon: 'cloud',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: 'xxx',
        router: '',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      }
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
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      }
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
      },
      {
        exhibitStr: '存储localStorage',
        router: '/index/util-12',
      },
      {
        exhibitStr: '删除localStorage',
        router: '/index/util-13',
      },
      {
        exhibitStr: '获取sessionStorage',
        router: '/index/util-14',
      },
      {
        exhibitStr: '存储sessionStorage',
        router: '/index/util-15',
      },
      {
        exhibitStr: '删除sessionStorage',
        router: '/index/util-16',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      },
      {
        exhibitStr: '',
        router: '/index/util-',
      }
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
      },
      {
        exhibitStr: '设置cookie',
        router: '/index/util-18',
      },
      {
        exhibitStr: '删除cookie',
        router: '/index/util-19',
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
      },
      {
        exhibitStr: '校验是否包含中文',
        router: '/index/util-21',
      },
      {
        exhibitStr: '校验是否为中国大陆的邮编',
        router: '/index/util-22',
      },
      {
        exhibitStr: '校验是否为IPv6地址',
        router: '/index/util-23',
      },
      {
        exhibitStr: '校验是否为邮箱地址',
        router: '/index/util-24',
      },
      {
        exhibitStr: '校验是否为中国大陆手机号',
        router: '/index/util-25',
      },
      {
        exhibitStr: '校验是否包含emoji表情',
        router: '/index/util-26',
      }
    ],
  },
  // Tjt: 设备判断

  // Tjt: 浏览器操作

  // Tjt: 时间操作
];
