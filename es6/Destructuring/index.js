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

function* fibs() {
    let a = 0; //0,1,1,2,3,5
    let b = 1; //1,1,2,3,5
    while (true) {
        yield a;
        [a, b] = [b, a + b];

    }
}

let [first, second, third, fourth, fifth, sixth,and] = fibs();
console.log(first,second,third,fourth,fifth,sixth,and)
