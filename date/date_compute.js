(function () {
    var date = new Date('2017-08-28 18:02:35.0')
    var nowDate = new Date()
    var computeDate = nowDate  -date;


    console.log('date',date)
    console.log('nowData',nowDate)
    console.log('beforeDate',nowDate - date)
    console.log('computeDate',computeDate)

    console.log('时差',nowDate.getTimezoneOffset() / 60)
}())