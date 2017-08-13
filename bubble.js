function bubbleSort(arr){
	// var a = arr.concat(4);
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1;j++){
			if(arr[j]>arr[j+1]){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
		console.log("排序过程 "+arr);
	}
	
}
var arr = new Array(0,12,28,14,1,3);
bubbleSort(arr);
console.log("最后结果： "+arr);