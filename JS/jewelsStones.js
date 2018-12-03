/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, 
so "a" is considered a different type of stone from "A".
*/

var numJewelsInStones = function(J, S) {
  // split string arguments into arrays
  jArray = J.split('');
  sArray = S.split('');
  // counter
  jewels = 0;
  // loop through second argument's array
  for (var i = 0; i < sArray.length; i++) {
    // checks to see if the item in the sArray has an index in the jArray
    // if it does, the counter variable is increased by one
    if (jArray.indexOf(sArray[i]) > -1) {
      jewels += 1;
    }
  }
  // console.log(jewels);
  return jewels;
}

console.log(numJewelsInStones("aA", "aAAbbbb")); // should equal 3