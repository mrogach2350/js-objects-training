/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/
function letterCount(str){
  var obj = {};
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q',
  'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var letters = str.split('');
  for (var i = 0; i < letters.length; i ++){
    if (obj[letters[i].toLowerCase()] === undefined && alphabet.indexOf(letters[i].toLowerCase()) !== -1){
      obj[letters[i].toLowerCase()] = 1;
    } else if (obj[letters[i].toLowerCase()] !== undefined && alphabet.indexOf(letters[i].toLowerCase()) !== -1){
      obj[letters[i].toLowerCase()] ++;
    }
  }
  return obj;
}

console.log(letterCount('apple jack cerEal Is Super gOod!'));

// YOUR CODE HERE
