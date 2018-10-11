// //1D Array

// var arr1 = [12,434,3434,43,43,2,4,5,6,72,4,6,7];

// for(var i=0; i<arr1.length; i++){
// 	//console.log(arr1[i]);
// }

// //Algorithms of 1D Array


// //Even numbers from arr1


// for(var i=0; i<arr1.length; i++){
// 	if(arr1[i]%2 == 0){
// 		//console.log(arr1[i]);
// 	}
// }

// //Iterate Even Indexes in Arr1

// for(var i=0; i<arr1.length; i++){
// 	if(i%2 == 0){
// 		//console.log(arr1[i]);
// 	}
// }
// //Sum of array2 elements

// var arr2 = [3,5,6,7,9,0,1,2];
// var sum = 0;
// for(var i=0; i<arr2.length; i++){

// 	sum = arr2[i]+sum;

// }

// console.log(sum);


// max number of array

// var a = [4,9,34,78,45];
// var max = a[0];
//    for(var i=1; i<a.length; i++)
//    {
//    	if(a[i] > max)

//    		max = a[i];
   

// }console.log(max);



//min number of an array

// var a1 = [1,5,9,34,67,12,0];
// var min= a1[0];
//    for(var i=0; i<a1.length;i++)
//    {
//    	if(a1[i] < min)
//    		min = a1[i]
//    }
//    console.log(min);



   // swapping of variables

// function swap(a,b){
// 	var temp = a;
// 	a = b;
// 	b = temp;
// 	console.log(a,b);
// }

// swap(2,3);



//printing before and after swapping
function swap(a,b){
	console.log(`values of (a,b) before swapping ${a},${b}`);

	
	var temp = a;
	a = b;
	b = temp;
	console.log("values of (a,b) ater swapping " + a + "," + b);
}
swap(8,9);