function factorial(number){
	var fact = 1;
	for(var i=1;i<=number;i++){
		fact=fact * i;

	}
	console.log(fact);
}

factorial(6);