//1d matrix

// var arr1 = [1,2,3,4];
// var arr2 = [5,6,7,8];
// var arr3 = [];
    
//     for(var i=0; i<arr1.length; i++)
//     {
//       arr3[i] = arr1[i] + arr2[i];
//       console.log(arr3[i]);
//   }



  //2d matrix
  // var arr1 = [[1,2],[3,4]];
  // var arr2 = [[5,6],[7,8]];
  // var arr3 = [[],[]];
    
  //   for(var i=0; i<arr1.length; i++)
  //   {
  //   	for(var j=0;j<arr1[i].length;j++){
  //   		arr3[i][j] = arr1[i][j]+arr2[i][j];
  //   	}
  //   }
  //   console.log(arr3);



   //3d matrix

   var arr1 = [[[1,20,3],[45,4,79],[5,23,37]]];
  var arr2 = [[[5,5,123],[9,8,70],[10,18,56]]];
  var arr3 = [[[345,56,48],[67,90,21],[68,100,30]]];
    var arr4 =[[[],[],[]]];
    for(var i=0; i<arr1.length; i++)
    {
    	for(var j=0;j<arr1[i].length;j++)
    	{

        for(var k=0; k<arr2[i][j].length; k++)
    		{
    		arr4[i][j][k] = arr1[i][j][k]+arr2[i][j][k]+arr3[i][j][k];
    		}
    	}
    }
    console.log(arr4);
