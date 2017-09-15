(function () {
    var obj = {
        a: 1,
        b: function () {
            console.log(this === obj) //ture
            console.log(this.a) //1
        }
    }

    // obj.b()
    function test() {
        var id = 'test'
        console.log(this) //window
        var testFn = function () {
            "use strict"
            console.log(this) //window
        }
        testFn()
    }
    test()
}())
