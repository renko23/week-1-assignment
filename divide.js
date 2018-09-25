function divide(num1,num2){
	var quotient =0;
	while(num1>=num2)
	{
		num1=num1-num2;
		quotient++;
	}
	return quotient;
}

console.log(divide(9,5));