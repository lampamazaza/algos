function dumbSort(data) {
  for(let i = 0; i < data.length; i++) {
    let smallIndex = i
    for(let y = i + 1; y < data.length ; y++) {
      if(data[y] < data[smallIndex]) {
        smallIndex = y
      }
    }
    let buffer = data[i]
    data[i] = data[smallIndex]
    data[smallIndex] = buffer
  }
}

dumbSort(data)
console.log(data)
