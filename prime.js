function prime(n)
{
  var counter = 0;
  
  	for(var i=2; i<=n; i++)
  	{
  		if(n%i == 0)
  	{
  		counter ++;
  	}
  	}
  	if(counter == 1)
  	{
  		console.log(n + "is a prime number");
  	}
  else{
  	console.log(n + "is not a prime number");
  }
}
prime(64)
