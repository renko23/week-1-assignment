   swapping of variables

function swap(a,b){
	var temp = a;
	a = b;
	b = temp;
	console.log(a,b);
}

swap(2,3);



printing before and after swapping
function swap(a,b){
	console.log(`values of (a,b) before swapping ${a},${b}`);

	
	var temp = a;
	a = b;
	b = temp;
	console.log("values of (a,b) ater swapping " + a + "," + b);
}
swap(8,9);