// Digits count
  let arry=[547,1208,39,55,13921];
  function digitsCount(arry){
	 let count=0;
	  for ( i = 0; i < arry.length; i++) {
		  let numofdigits=arry[i].toString().length;
		  count=count+numofdigits
	  }
	  return count;
  }
  document.write("Digit count of the given element: "+digitsCount(arry));
  
  // let arry=[547,1208,39,55,13921];
  // function digitsCount(arry){
	  // let result=[];
	  // for ( i = 0; i < arry.length; i++) {
		  // let numofdigits=arry[i].toString().length;
		  // result.push(numofdigits); //digits count of single element displayed
	  // }
	  // return result;
  // }
  // document.write(digitsCount(arry));
  