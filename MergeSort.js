function mergeSort(data) {
  if(data.length == 1) {
      return data;
  }
  let center = Math.floor(data.length / 2);
  
  return compare(mergeSort(data.slice(0,center)),mergeSort(data.slice(center, data.length)));
}

function compare (left, right) {
  let newArray = [],
      counterLeft = 0,
      counterRight = 0;


  while(counterLeft < left.length && counterRight < right.length ) {
      if(left[counterLeft] < right[counterRight]) {
          newArray.push(left[counterLeft]);
          counterLeft++;
      }else {
          newArray.push(right[counterRight]);
          counterRight++;
      }
  }
  
  if(counterLeft == left.length) {
      newArray = newArray.concat(right.slice(counterRight, right.length));
  }else if(counterRight == right.length) {
      newArray = newArray.concat(left.slice(counterLeft, left.length));
  }

  return newArray;
}
