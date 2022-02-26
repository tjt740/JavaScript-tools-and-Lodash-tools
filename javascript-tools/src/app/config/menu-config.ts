export const MenuConfig = [
  // *数组操作
  {
    title: '处理数组',
    icon: 'smile',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: 'xxx',
        router: '',
      },
    ],
  },

  // *字符串操作
  {
    title: '处理字符串',
    icon: 'heart',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '数字转中文',
        router: '/index/util-1',
      },
      {
        exhibitStr: 'xxx',
        router: '/index/util-2',
      },
    ],
  },

  // *数字操作
  {
    title: '处理数字',
    icon: 'crown',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: '生成范围随机数',
        router: '/index/util-2',
      },
      {
        exhibitStr: 'xxx',
        router: '/index/util-2',
      },
    ],
  },

  // *JSON对象操作
  {
    title: '处理JSON',
    icon: 'cloud',
    id: Math.random(),
    childRoute: [
      {
        exhibitStr: 'xxx',
        router: '',
      },
    ],
  },
];
