function insertSort(arr){
	//直接插入排序，arr[0]作为监视哨
	for ( i = 2; i <= arr.length; i++) {
		if(arr[i] < arr[i-1]){
			arr[0] = arr[i];
			arr[i] = arr[i-1];
			for(j = i-2; arr[0] < arr[j]; --j){
				arr[j+1] = arr[j];
			}
			arr[j+1] = arr[0];
		}
	}
}



var arr = new Array;
arr[1] = 2;
arr[3] = 4;
arr[2] = 8;
arr[4] = 1;
arr[5] = 3;
arr[0] = null;
insertSort(arr);
console.log(arr);
// for(var i=0;i<arr.length;i++){
// 	console.log(arr[i]);
// }
// console.log(arr.length);

// var ele = [1,3,5,9,7];
// console.log(ele);
// console.log(typeof ele);
