function forLoop(array){
  for (let i = 0; i < 25; i++){
  //   if (i = 0){'I am 1 strange loop.';
  // } else {
  //   `I am ${i} strange loops.`;}
    (`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
  };
  return array
}

function whileLoop(n){
  while (n > 0)
  console.log(--n)
  return 'done'
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5;
  }
  do {
    array.shift()
  } while (array.length > 0 && maybeTrue());
  return array
}
