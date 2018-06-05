function theBeatlesPlay(musicians, instruments){
  var emptyArray = [];

  emptyArray.push(`${musicians[0]} plays ${instruments[0]}`);
  
  for (int i = 1; i<musicians.length(); i++){
    emptyArray[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  
  return emptyArray;
}

function johnLennonFacts(){
  
}


  // for (int i = 0; i < musicians.length(); i++){
  //   for (int i = 0; i < instruments.length(); i++){
  //   console.log(`${musicians[i]} plays ${instruments[i]}`);
  // }
  // }