function play(num,ticket,arr){
	//游乐场时长为ticket的票，可以玩多少个项目（按顺序项目的时长为arr）
	var time=0;
	for(var i=0;i<num;i++){
		if(ticket>time){
			time+=arr[i];
		}else{
			break;
		}
	}
	console.log(time);
}
play(4,20,[10,1,10,10]);
