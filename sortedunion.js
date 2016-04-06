function unite(arr1, arr2, arr3) {
//convert the arguments into an array
  var args =  Array.prototype.slice.call(arguments);
  var new_array = [];
  for(var i = 0; i < args.length; i++){
    for(var j = 0; j < args[i].length;j++){
      if(new_array.indexOf(args[i][j]) === -1){
        new_array.push(args[i][j]);
        
      }
    }
  }
  return new_array;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
