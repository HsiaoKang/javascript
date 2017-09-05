// Gennerator  生成器，异步编程解决方案，执行这个函数后会生成一个可遍历的对象；
// yield  产出，定义不同的Gennerator的状态

// 特征：1.function 和函数名之间有个 * 号；2.函数内部使用yield表达式

// 函数调用后并不会返回执行结果，而是yield定义的状态,存在于Iterator对象中
// yield会使函数分段执行，

// 这里有个“惰性求值”（Lazy Evaluation）的概念

function* helloWorldGenerator() {
    console.log('begin')
    yield 'hello';
    console.log('emmm1')
    yield 'world';
    console.log('emmm2')
    return 'ending';
    console.log('emmm3')
}

var hw = helloWorldGenerator();

hw.next()
hw.next()
hw.next()
hw.next()
hw.next()
hw.next()
hw.next()



//  不适用yield函数的话会使 Gennerator函数成为一个暂缓执行函数,待到调用.next()方法才会执行

function* xixi() {
    console.log('start')
}

var xx= xixi()

setTimeout(function () {
    xx.next()
},2000)


// yield是一个表达式，如果用在其他表达式内，需要加上括号;用于赋值或者传参则不需要加括号
function* demo() {
    // console.log('Hello' + yield); // SyntaxError
    // console.log('Hello' + yield 123); // SyntaxError

    // console.log('Hello' + (yield)); // OK
    console.log('Hello' + (yield 123)); // OK
}

var demof = demo()

demof.next()
demof.next()