// 除了ECMAScript 6 中提供的let 之外，一般我们通过函数来创建作用域：

var myObject = (function(){
    var __name = 'sven'; // 私有（private）变量
    return {
        getName: function(){ // 公开（public）方法
            return __name;
        }
    }
})();
console.log( myObject.getName() ); // 输出：sven
console.log( myObject.__name ) // 输出：undefined