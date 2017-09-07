# BOM

标签（空格分隔）： BOM JavaScript

---

## window 对象
###全局作用域

在全局作用域中声明的变量、函数都会成为window的属性和方法

在全局作用域中定义函数和变量与直接在window上定义变量和方法的区别是不能通过delete来删除

在全局作用域下，直接将一个没有定义的变量赋给另一个变量，将会抛出错误；但是通过window.去赋值则不会抛出错误，而是赋值为undefined

###窗口关系及框架

框架指的是frame，每个frame有自己的window

可通过window或者top来访问

top指向最外层框架，parent指向父级，self指向自己的widow

###窗口位置

screenLeft/screenTop,火狐：screenX/screenY

兼容代码
```
var leftPos = (typeof window.screenLeft == "number") ?
        window.screenLeft : window.screenX;
    var topPos = (typeof window.screenTop == "number") ?
        window.screenTop : window.screenY;
```
ie/opera中screenTop/screenY表示的是页面到屏幕边缘的距离，中间可能会有浏览器的工具栏

Firefox,Safari,Chrome中screenTop/screenY表示的是浏览器到屏幕边缘的距离

moveTo/moveBy,移动浏览器位置，一般被禁用了的

###窗口大小

innerHeight/innerWidth浏览器内容区域,outerHeight/outerWidth浏览器自身的宽高,

innerHeight/innerWidth等于DOM的ducument.ducumentElement.clientHeight/...Width

但在火狐55.0.3中测试，非全屏下outerWidth大于了我屏幕的宽度（多16)，全屏状态下等于屏幕的宽度

书中兼容代码
```
var pageWidth = window.innerWidth,
pageHeight = window.innerHeight;
if (typeof pageWidth != "number"){
    if (document.compatMode == "CSS1Compat"){
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
        }
    else {
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
    }
}
```
实际上两个方法获取的不一样，在Chrom、火狐、IE（6-11）中，通过document.documentElement.clientWidth/...Height用来做inner...的替代方案比较好，在有滚动条的情况下，加上16px的滚动条，四舍五入后与inner...的值是相同的

resizeTo()/resizeBy()两个方法用于调整浏览器窗口尺寸，一般被禁用

###导航和打开窗口

window.open()方法打开新窗口，四个参数：URL、目标（某个框架/特殊窗口名称）、特性字符串（新窗口的相关设置）、是否取代当前页面

window.close()关闭窗口（除了通过open打开的窗口外，需要得到用户允许）

window.closed,是否关闭

window.opener,新窗口对原始窗口的指针

###间歇调用和超时调用

setTimeout(),两个参数，第一个是包含js代码的字符串（性能损失）或者函数，第二个是等待多少毫秒将代码添加到执行队列中（此时队列中可能有等待执行的代码）

返回一个id，是执行代码的唯一标识符，通过它来取消执行clearTimeout()

setInterval(),间歇调用，大致同上，最好设置一下峰值

注意：后一个间歇调用可能会在前一个间歇调用执行结束之前启动，避免这种情况，使用setTimeout()来模拟间歇调用时安全的

### 系统对话框

alert()警告（确认）,confirm()确认（取消，确认）,prompt()提示（输入，确认）




