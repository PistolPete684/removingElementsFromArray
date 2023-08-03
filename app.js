function removeEveryOther(arr){
  //setup a new array to be returned
  const result = [];
  //setup a for loop to run through the original array
  for (let i = 0; i < arr.length; i += 2) {
  //add ever second element to the new array
    result.push(arr[i]);
  }
  //return the new array
  return result;
}