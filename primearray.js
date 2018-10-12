var prime = [2,7,8,13,11,17,29,23,1,10];

for(i=0;i<prime.length;i++){
	var count = 0;
	for(j=2; j<=prime[i]; j++)
	{
		if(prime[i]%j == 0)
			count ++;

	}if(count == 1)
	{
		console.log(prime[i] + "is a prime number");
	}
	else
	{
		console.log(prime[i] + "is not a prime number");
	}
}
