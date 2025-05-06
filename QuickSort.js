function quickSort(data) {
  if(data.length < 2){
      return data;
  }

  let pivot = data[0],
      left = [],
      right = [];

      for(let i = 1 ; i < data.length; i++) {
          if(data[i] >= pivot){
              right.push(data[i]);     
          }else if (data[i] < pivot) {
              left.push(data[i]); 
          }

      }

     return quickSort(left).concat(pivot,quickSort(right)); 
}
