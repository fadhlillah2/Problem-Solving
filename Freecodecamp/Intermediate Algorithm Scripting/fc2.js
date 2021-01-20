//!DNA Pair

function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  //split string into array of characters
  var arr = str.split("");
  console.log(str.split("")); //[ 'G', 'C', 'G' ]
  //map character to array of character and matching pair
  return arr.map((x) => [x, pairs[x]]);
}

//test here
console.log(pairElement("GCG")); //[ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]
