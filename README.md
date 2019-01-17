订阅阅读器测试
=======
# 订阅阅读器测试项目 - Feed Reader Testing

## <i class="icon-list"></i> 索引

* [点击查看网页](#点击查看网页)
* [项目说明](#项目说明)
* [测试说明](#测试说明)

## 点击查看网页

[订阅阅读器测试（需挂VPN才能正常查看）](https://www.vernonn.com/udacity/project-three/index)

## 项目说明

测试工具：jasmine。

四个测试用例，共计七个测试。

## 测试说明

- RSS Feeds 测试用例
    - 第一个测试 `are defined` - 用来保证 `allFeeds` 变量被定义了而且不是空的，并利用正则表达式检查`url`的格式是有效的。
      测试：`app.js` 里面的 `allFeeds` 变量已定义，`allFeeds` 的长度不为 **0** ，并利用正则表达式检查`url`的格式是有效的。
    - 第二个测试 `have url and are not null` - 遍历 `allFeeds` 对象里面的所有的源来保证有链接字段而且链接不是空的。
      测试：遍历 `allFeeds` 的 `url` 均不为空。
    - 第三个测试 `have name and are not null` - 遍历 `allFeeds` 对象里面的所有的源来保证有名字字段而且不是空的。
      测试：遍历 `allFeeds` 的 `name` 均不为空。

- The menu 测试用例
    - 第一个测试 `item is hidden` - 用来保证保证菜单元素默认是隐藏的。
      测试：分析css文件中存在 `.menu-hidden` 类， `<body>` 标签有了这个类便显示菜单元素，所以只需要测试一开始带有这个类的元素存在。
    - 第二个测试 `can switch` - 用来保证当菜单图标被点击的时候菜单会切换可见状态。
      测试：分析测试先点击一次带有 `.menu-icon-link` 类的“按钮”，`<body>` 标签不带有 `.menu-hidden` 类；再点击一次带有 `.menu-icon-link` 类的“按钮”，`<body>` 标签不、带有 `.menu-hidden` 类。

- Initial Entries 测试用例
    - 第一个测试 `loadFeed works` - 用来保证 `loadFeed` 函数被调用而且工作正常。
      测试：在 `beforeEach` 中结合 `done()` 异步实现 `loadFeed(0)` 事件，测试在 `.feed` 容器元素里面至少有一个 `.entry` 的元素。

- New Feed Selection 测试用例
    - 第一个测试 `loadFeed will change` - 用来保证当用 loadFeed 函数加载一个新源的时候内容会真的改变。
      测试：先用一个变量 `EnIn0` 装载加载新源前的第一个 `.entry` 中的 `innerText` ，在 `beforeEach` 中结合 `done()` 异步实现 `loadFeed(1)` 事件，再用一个变量 `EnIn1` 装载加载新源后的第一个 `.entry` 中的 `innerText` ，最后测试`EnIn1`与`EnIn0`是否不等。
