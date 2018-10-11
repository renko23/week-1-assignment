function maxnatural(){
	var a = [];
	for(var i=0; i<1000; i++){
		a[i] = i+1;
	}
	maxnatural = a[0];
	for(i=0; i<=2000; i++)
	{
		if(a[i] > maxnatural)
			maxnatural = a[i];
	}
	console.log(maxnatural);
}


maxnatural();