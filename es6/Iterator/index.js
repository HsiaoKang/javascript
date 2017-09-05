// Iterator 遍历器，是一种接口，为不同的数据提供统一的访问机制，比如：Array,Object,Map,Set
// 作用有三：1.提供统一的访问机制；2.是的数据结构的成员按某种顺序排列；3.为for of 提供服务。

// 过程：
// （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

// （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

// （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

// （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

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