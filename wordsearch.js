// Reusing the transpose function that takes a 2D array
// and transpose rows into columns, and columns into rows.
const transpose = function(letters) {
  let result = [];
 
  for (let row = 0; row < letters[0].length; row++) {
    result.push([]);
  }

  for (let row = 0; row < letters.length; row++) {
    for (let column = 0; column < result.length; column++) {
      result[column].push(letters[row][column]);
    }
  }
  return result;
};

// Searching for the word horizontally
const horizontalSearch = function(letters, word) {
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

// Searching for the word vertically
// (we first use transpose to transpose the columns into rows,
// then we loop through each row to look for the word)
const verticalSearch = function(letters, word) {
  letters = transpose(letters);

  const verticalJoin = letters.map(ls => ls.join(''));

  for (let l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

// ACTUAL FUNCTION WORDSEARCH
const wordSearch = (letters, word) => {
  
  if (!letters.length) {
    return undefined;
  }

  if (horizontalSearch(letters, word) === true) {
    return true;
  }

  if (verticalSearch(letters, word) === true) {
    return true;
  }

  return false;
};


module.exports = wordSearch;