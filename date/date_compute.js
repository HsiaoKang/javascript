(function () {
    // V1,传入一个 yyyy-mm-dd hh:mm:ss格式的时间，通过计算得到与当前时间的间隔
    // 一个小时内显示多少分钟前，一个小时以上，一天内显示多少小时内，超过一天显示多少天以前，超过一个月显示多少个月前，超过年同理。
    // V2,超过一个月显示x月x号，超过一年显示x年x月x号

    function toSecond(time) {
        try {
            var _time = parseInt(time);
            return (_time / 1000).toFixed(0);
        } catch (err) {
            console.error(err)

        }
    }

    function toMinute(time) {
        try {
            var _time = parseInt(time);
            return (_time / 1000 / 60).toFixed(0)
        } catch (err) {
            console.error(err)

        }
    }

    function toHours(time) {
        try {
            var _time = parseInt(time);
            return (_time / 1000 / 60 / 60).toFixed(0)
        } catch (err) {
            console.error(err)

        }
    }

    function toDay(time) {
        try {
            var _time = parseInt(time);
            return (_time / 1000 / 60 / 60 / 24).toFixed(0)
        } catch (err) {
            console.error(err)

        }
    }

    function computer(date) {
        try {
            var dateObj = new Date(date);
        } catch (err) {
            console.error(err)
            var dateObj = new date();
        }
        var nowDate = new Date();
        var comTime = (nowDate - dateObj).toFixed(0);

        //    计算
        var _s = toSecond(comTime);

        if (_s <= 60) {
            console.log('一分钟内')

            return '一分钟内'
        } else if (_s > 60 && _s < 3600) {
            var _m = toMinute(comTime);
            console.log(_m + '分钟前')
            return _m + '分钟前'
        } else if (_s >= 3600 && _s <= 3600 * 24) {
            var _h = toHours(comTime)
            console.log(_h + '小时前')

            return _h + '小时前'
        } else if (_s > 3600 * 24 && _s <= 3600 * 24 * 30) {
            var _day = toDay(comTime);
            console.log(_day + '天前')
            return _day + '天前'
        } else if (_s > 3600 * 24 * 30 && _s <= 3600 * 24 * 30 * 12) {

            var _m = dateObj.getMonth()
            var _d = dateObj.getData()
            console.log(_m + '月' + _d + '日')
            return _m + '月' + _d + '日'


        } else if (_s > 3600 * 24 * 30 * 12) {
            var _y = dateObj.getFullYear();
            var _m = dateObj.getMonth()
            var _d = dateObj.getDate()
            console.log(_y + '年' + _m + '月' + _d + '日')
            return _y + '年' + _m + '月' + _d + '日'
        }
    }

    computer('2015-06-28 18:02:35.0')
}())