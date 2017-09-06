// 解构赋值,需要数据解构具有Iterator 接口，es6版本中有四种：Array,Object，Map,Set。通过Gennerator函数可以返回一个有Iteraator接口的对象(遍历器对象）

// 模式匹配，等号两边的模式相同便可以将右边的值依次赋给左边
let [a,b,c] = [1,2,3];
// console.log(a,b,c);

// 嵌套
let [foo, [[bar], baz]] = [1, [[2], 3]];
// 1,[[2],3]]
// console.log(foo,bar,baz)

// 多余的
let [,,d] = [1,1,2]
// console.log(d)
// 不够的
let [e,f,g] = [1,1,]
// console.log(e,f,g) //g,undefined

// ...,将剩余项全部放入tail这个数组
let [head, ...tail] = [1, 2, 3, 4];

// console.log(head,tail)
let [x, y, ...z] = ['a'];

// console.log(x,y,z)

//
//
// function* fibs() {
//     let a = 0; //0,1,1,2,3,5
//     let b = 1; //1,1,2,3,5
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b];
//
//     }
// }
//
// let [first, second, third, fourth, fifth, sixth,and] = fibs();
// // console.log(first,second,third,fourth,fifth,sixth,and)
//
// // 解构时使用默认值;
// // 只有当要赋给变量的值严格’===‘等于undefined时，默认值才会生效。
// // 数组
// (function () {
//     // 1.常量
//     let [a,b=3]=[1,null];
//     console.log(a,b)
//
//
//     // 2.默认值为一个表达式时，只有当需要时才会求值，即赋的值严格等于undefined时(惰性求值)
//     function f() {
//         console.log('aaa');
//     }
//
//     let [x = f()] = [undefined];
//
//     // 3.默认值为一个变量时，变量必须为已经声明的
//     let [x = 1, y = x] = [1, 2]; // x=1; y=2
//     let [x = y, y = 1] = [];     // ReferenceError
// }())
// // 对象
//     // 对象的解构赋值与数组的解构赋值最大的区别是无序和有序，
//     // 对象的解构赋值是找到等号两边相同的
// (function () {
//     // 区分模式(key)和变量(value)
//     let { bar, foo } = { foo: "aaa", bar: "bbb" };
//     foo // "aaa"
//     bar // "bbb"
//     // 实际就是这个的简写
//     let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
//
//
//     //嵌套
//     let obj = {
//         p: [
//             'Hello',
//             { y: 'World' }
//         ]
//     };
//
//     let { p: [x, { y }] } = obj;
//     x // "Hello"
//     y // "World"
//
//     // 嵌套对比
//     let obj = {
//         p: [
//             'Hello',
//             { y: 'World' }
//         ]
//     };
//
//     let { p, p: [x, { y }] } = obj;
//     x // "Hello"
//     y // "World"
//     p // ["Hello", {y: "World"}]
//
//
//     // 默认值
//     var {x: y = 3} = {};
//     y // 3
//
//
//     // 、、对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
//     let { log, sin, cos } = Math;
//     // 上面代码将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多。
//
//     // 组合
//     let arr = [1, 2, 3];
//     let {0 : first, [arr.length - 1] : last} = arr;
//     first // 1
//     last // 3
//
// }())

    // 数值和布尔值解构赋值
(function () {
    let {toString: s} = 123;
    console.log('ss',s)
    // s等于数值下的tiString方法
    // s === Number.prototype.toString // true

}());

(function () {
   // 函数也能用
    // 在解构赋值中，圆括号能不用就不用
    //可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。

}());

// 用途
// 1.交换变量的值
// 2.从函数返回多个值
// 3.函数参数的定义
// 4.提取JSON数据
// 5.函数参数的默认值

// 7.输入模块的指定方法
// 6.遍历Map结构


var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(key + " is " + value);
}
// 获取键名
for (let [key] of map) {
    // ...
}

// 获取键值
for (let [,value] of map) {
    // ...
}

let obj1 = {
    a:1
}
let {a:a}=obj1
console.log(a)
