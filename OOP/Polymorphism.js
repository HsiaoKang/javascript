// 多态
//  思想：将“谁去做、怎么做”和“做什么”区分开
(function () {
    var makeSound = function (animal) {
        if (animal instanceof Duck) {
            console.log('嘎嘎嘎');
        } else if (animal instanceof Chicken) {
            console.log('咯咯咯');
        }
    };
    var Duck = function () {
    };
    var Chicken = function () {
    };
    makeSound(new Duck()); // 嘎嘎嘎
    makeSound(new Chicken()); //咯咯咯
})();



// 改善
// 把不变的部分隔离起来，可变的部分封装起来
(function () {
    // 不变的是"做什么"，即“叫”
    var makeSound = function (animal) {
        animal.sound()
    }
    // 可变的是对象
    var Duck = function () {
    }
    Duck.prototype.sound = function () {
        console.log('嘎嘎嘎')
    }
    // 对象二
    var Chicken = function () {
    }
    Chicken.prototype.sound = function () {
        console.log('咯咯咯');
    };
    // 如果要增加一只狗
    var Dog = function () {

    }
    Dog.prototype.sound = function () {
        console.log('汪汪汪')
    }

    makeSound(new Duck()); // 嘎嘎嘎
    makeSound(new Chicken()); // 咯咯咯
    makeSound(new Dog())
})()
