function play(num,ticket,arr){
	//游乐场时长为ticket的票，按顺序可以玩多少个项目,玩多长时间
	//（按顺序项目的时长为arr,总项目数为num）
	var time=0;
	for(var i=0;i<num;i++){
		if(ticket>time){
			time+=arr[i];
		}else{
			break;
		}
	}
	document.write('<br/>'+"按顺序可以玩"+i+"个项目玩的时间是"+time);
	console.log(time);
}
play(4,20,[10,1,3,6,10,10]);
