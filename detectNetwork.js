// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var fourPrefix = cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3];
  var threePrefix = cardNumber[0] + cardNumber[1] + cardNumber[2];
  var twoPrefix = cardNumber[0] + cardNumber[1];
  var onePrefix = cardNumber[0];
  var cardLength = cardNumber.length;
  var cardPrefixValid = false;
  var cardLengthValid = false;

  for (var i = 644; i <= 649; i++) {
    if (threePrefix === i.toString()) {
      cardPrefixValid = true;
    }
  }

  for (var j = 12; j <= 19; j++) {
    if (cardLength === j) {
      cardLengthValid = true;
    }
  }

  if (fourPrefix === '6011' && (cardLength === 16 || cardLength === 19)) {
    return 'Discover';
  } else if (cardLengthValid && (fourPrefix === '5018' || fourPrefix === '5020' ||
    fourPrefix === '5038' || fourPrefix === '6304')) {
    return 'Maestro';
  } else if (cardPrefixValid && (cardLength === 16 || cardLength === 19)) {
    return 'Discover';
  } else if ((twoPrefix === '38' || twoPrefix === '39') && cardLength === 14) {
    return 'Diner\'s Club';
  } else if ((twoPrefix === '34' || twoPrefix === '37') && cardLength === 15) {
    return 'American Express';
  } else if ((twoPrefix === '51' || twoPrefix === '52' || twoPrefix === '53' ||
    twoPrefix === '54' || twoPrefix === '55') && cardLength === 16) {
    return 'MasterCard';
  } else if (twoPrefix === '65' && (cardLength === 16 || cardLength === 19)) {
    return 'Discover';
  } else if (onePrefix === '4' && (cardLength === 13 || cardLength === 16 || cardLength === 19)) {
    return 'Visa';
  } else {
    return undefined;
  }
};


