// 生成一段32字节的连续内存区域,默认每一位都是0
var buf = new ArrayBuffer(32);

// 指定视图才能查看
var dataView = new DataView(buf);

//
console.log(dataView.getUint8(0));
