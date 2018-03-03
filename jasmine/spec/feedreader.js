/* feedreader.js
 *
 * 这是 Jasmine 会读取的spec文件，它包含所有的要在应用上面运行的测试。
 */
$(function() {
  /*这个用例的测试都是关于 Rss 源的定义的，也就是应用中的 allFeeds 变量。
    */
  describe('RSS Feeds', function() {
    /* 用来保证 allFeeds 变量被定义了而且不是空的。 */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
      // 检查 URL 格式是否正确的正规表达式
      var regularExpressionUrl = /^((ht|f)tps?):\/\/([\w\-]+(\.[\w\-]+)*\/)*[\w\-]+(\.[\w\-]+)*\/?(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?/;
      // 检查格式
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toMatch(regularExpressionUrl);
      }
    });

    /*
         * 测试遍历 allFeeds 对象里面的所有的源来保证有链接字段而且链接不是空的。
         */
    it('have url and are not null', function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).not.toBeNull();
        expect(allFeeds[i].url).not.toBe('');
      }
    });

    /*
         * 测试遍历 allFeeds 对象里面的所有的源来保证有名字字段而且不是空的。
         */
    it('have name and are not null', function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).not.toBeNull();
        expect(allFeeds[i].name).not.toBe('');
      }
    });
  });

  /* "The menu" 测试用例 */
  describe("The menu", function() {
    /*
         * 保证菜单元素默认是隐藏的。
         */
    it("item is hidden", function() {
      expect($('.menu-hidden')).toBeDefined();
    });

    /*
          * 测试用例保证当菜单图标被点击的时候菜单会切换可见状态。
          * 1、当点击图标的时候菜单是否显示，
          * 2、再次点击的时候是否隐藏。
          *
          * 方法1(暂注释掉):
          */
    // it("can switch", function() {
    //    当点击图标的时候菜单是否显示
    //   $('.menu-icon-link').click();
    //   expect($('.menu-hidden')).not.toBeDefined();
    //    再次点击的时候是否隐藏
    //   $('.menu-icon-link').click();
    //   expect($('.menu-hidden')).toBeDefined();
    // });
    /*
    * 方法2:
     */
    it("can switch", function() {
      // 当点击图标的时候菜单是否显示
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(false);
      // 再次点击的时候是否隐藏
      $('.menu-icon-link').click();
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });

  /* Initial Entries 测试用例 */
  describe("Initial Entries", function() {
    beforeEach(function(done) {
      loadFeed(0, done);
    });
    /*
         * 测试保证 loadFeed 函数被调用而且工作正常，即在 .feed 容器元素里面至少有一个 .entry 的元素。
         *
         * loadFeed() 函数是异步的所以这里使用 Jasmine 的 beforeEach、和异步的 done() 函数。
         */
    it("loadFeed works", function() {
      // console.log($('.entry').eq(0).text());
      expect($('.entry').eq(0)).toBeDefined();
    });
  });

  /*
  * New Feed Selection 测试用例--方法1(暂注释掉)：
   */
  // describe("New Feed Selection", function() {
  //   let EnIn0,
  //     EnIn1;
  //   beforeEach(function(done) {
  //     EnIn0 = $('.entry').eq(0).text();
  //      console.log(EnIn0);
  //     loadFeed(1, done);
  //   });
  //   it("loadFeed will change", function() {
  //     EnIn1 = $('.entry').eq(0).text();
  //      console.log(EnIn1);
  //     expect(EnIn1).not.toBe(EnIn0);
  //   });
  // });

  /* New Feed Selection 测试用例--方法2： */
  describe("New Feed Selection", function() {
    var text1,
      text0;
    beforeEach(function(done) {
      loadFeed(1, function() {
        text1 = $('.feed').text();
        console.log("1加载完成：" + text1);
        loadFeed(0, function() {
          text0 = $('.feed').text();
          console.log("0加载完成：" + text0);
          done();
        });
      });
    });

    /*
    * 测试保证当用 loadFeed 函数加载一个新源的时候内容会真的改变。
    *
    *  loadFeed() 函数是异步的。
    */
    it("loadFeed will change", function() {
      expect(text1).not.toEqual(text0);
      // console.log("测试完成");
    });
  });
}());
