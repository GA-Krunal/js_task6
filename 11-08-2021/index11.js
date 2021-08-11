function numberOfPairs(arr) {
  let count = 0;
  let arrayPair = new Array();

  for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

      if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0) {
        let pair = "(" + arr[i] + "," + arr[j] + ")" ;
        arrayPair.push(pair);
        count++;
      }
    }
  }
  return count + "-->" + arrayPair;
}

document.getElementById('kb').innerHTML =
  'The output of first array ' +
  numberOfPairs([1,2,3]) +
  '<br> The output of second array is ' +
  numberOfPairs([1,2,4]) +
  '<br> The output of third array is ' +
  numberOfPairs([1,4,16]);
  