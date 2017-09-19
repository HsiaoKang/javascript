

// SyntaxError
// function foo2() {
//     console.log('run2')
// }()

// ok
var foo = function () {
    console.log('run')
}()

true && function () {
   console.log('run3')
}()

0,function () {
    console.log('run4')

}()

// 如果你不在意返回值，或者不怕难以阅读
// 你甚至可以在function前面加一元操作符号

!function () { /* code */ } ();
~function () { /* code */ } ();
-function () { /* code */ } ();
+function () { /* code */ } ();