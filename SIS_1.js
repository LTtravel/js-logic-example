function insertSort(arr){
<<<<<<< HEAD
	for (var i = 1; i <= arr.length; i++) {
=======
	//直接插入排序，arr[0]作为监视哨
	for ( i = 2; i <= arr.length; i++) {
>>>>>>> origin/master
		if(arr[i] < arr[i-1]){
			var sign;  //定义一个监视哨sign
			sign = arr[i];  //将待插入的值arr[i]暂存到监视哨
			arr[i] = arr[i-1];  //arr[i-1]向后移
			for(var j = i-1; sign < arr[j]; --j){
				//向后移动直到找到插入位置
				arr[j+1] = arr[j];
			}
			arr[j+1] = sign;  // 找到插入位置后插入
		}
	}
}



var arr = new Array;
arr[1] = 2;
arr[3] = 4;
arr[2] = 8;
arr[4] = 1;
arr[5] = 3;
arr[0] = 0;
insertSort(arr);
console.log(arr);

<<<<<<< HEAD
var arr2 = [23,45,33,11,36,19];
insertSort(arr2);
console.log(arr2);
=======
// var ele = [1,3,5,9,7];
// console.log(ele);
// console.log(typeof ele);
>>>>>>> origin/master
