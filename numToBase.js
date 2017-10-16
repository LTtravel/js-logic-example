function mulBase(num,base){//把数字num转成base进制
    var arr=new Array();
    var yushu=0;
    while(parseInt(num/base) != 0){
        yushu=num%base;
        arr.push(yushu);
        num=parseInt(num/base);
    }
    yushu=num%base;
    arr.push(yushu);
    
    console.log(arr.reverse().join(''));
}
mulBase(10,2);
