// Iterator 遍历器，是一种接口，为不同的数据提供统一的访问机制，比如：Array,Object,Map,Set
// 作用有三：1.提供统一的访问机制；2.是的数据结构的成员按某种顺序排列；3.为for of 提供服务。

// 过程：
// （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

// （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

// （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

// （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

// next方法返回一个对象

// 模拟
var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {value: undefined, done: true};
        }
    };
}


// Iterator 实际是给数据加上一个访问的接口

// 一个数据解构只要有Symbol.iterator属性，那么就是可遍历的(iterable)

// 原生具有iterator接口的有
/*
Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象
 */

let arr = ['q','a','b','c'];

let iter = arr[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// 场合
// 1.解构赋值
// 2.扩展运算符 ...
// 3.yield*
// 其他
// for...of
// Array.from()
// Map(), Set(), WeakMap(), WeakSet()（比如new Map([['a',1],['b',2]])）
// Promise.all()
// Promise.race()

// 遍历器对象的return、throw

// for...of循环内部调用的是数据结构的Symbol.iterator方法。

// for...of循环可以使用的范围包括数组、Set 和 Map 结构、某些类似数组的对象
// （比如arguments对象、DOM NodeList 对象）、后文的 Generator 对象，以及字符串

// for...of循环调用遍历器接口，数组的遍历器接口只返回具有数字索引的属性。

//for...of循环不会返回数组arr的foo属性。
let arr1 = [3, 5, 7];
arr1.foo = 'hello';

for (let i in arr1) {
    console.log(i); // "0", "1", "2", "foo"
}

for (let i of arr1) {
    console.log(i); //  "3", "5", "7"
}

