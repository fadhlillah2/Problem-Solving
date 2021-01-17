//!Reverese function
// function reverse(str) {
//   let reversed = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reverse([1, 2, 3, 4, 5]));

// s=[a,b,c,d,e] 	// s[0]=a; s[1]=b; s[2]=c; s[3]=d; s[4]=e
//s.length= 5
// (i < j) : 	i=0,j=4
// i=1,j=3
// (i=2,j=2) =>so while loop is stopped
// 		=>
// s[4] = s[0]

var reverseFunction = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    const temp = s[j];
    s[j] = s[i]; // assignment
    s[i] = temp;
    i++;
    j--;
  }
  return s;
};

console.log(reverseFunction(["a", "b", "c", "d"]));
