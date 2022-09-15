// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

// Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

var card = [
  {
    name: 'China UnionPay',
    prefix: ['6282', '6283', '6284', '6285', '6286', '6287', '6288', '624', '625', '626'],
    lengths: [16, 17, 18, 19]
  },
  {
    name: 'Switch',
    prefix: ['564182', '633110', '6333', '6759', '4903', '4905', '4911', '4936'],
    lengths: [16, 18, 19]
  },
  {
    name: 'Maestro',
    prefix: ['5018', '5020', '5038', '6304'],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19]
  },
  {
    name: 'Discover',
    prefix: ['6011', '644', '645', '646', '647', '648', '649', '65'],
    lengths: [16, 19]
  },
  {
    name: 'Diner\'s Club',
    prefix: ['38', '39'],
    lengths: [14]
  },
  {
    name: 'American Express',
    prefix: ['34', '37'],
    lengths: [15]
  },
  {
    name: 'MasterCard',
    prefix: ['51', '52', '53', '54', '55'],
    lengths: [16]
  },
  {
    name: 'Visa',
    prefix: ['4'],
    lengths: [13, 16, 19]
  }
];

var chinaPrefix = function() {
  for (var j = 622126; j <= 622925; j++) {
    card[0].prefix.push(j.toString());
  }
};
chinaPrefix();

var detectNetwork = function(cardNumber) {

  var sixPrefix = cardNumber.substring(0, 6);
  var fourPrefix = cardNumber.substring(0, 4);
  var threePrefix = cardNumber.substring(0, 3);
  var twoPrefix = cardNumber.substring(0, 2);
  var onePrefix = cardNumber.substring(0, 1);


  for (var i = 0; i < card.length; i++) {
    if (card[i].prefix.indexOf(sixPrefix) > -1 &&
        card[i].lengths.indexOf(cardNumber.length) > -1) {
      return card[i]['name'];
    } else if (card[i].prefix.indexOf(fourPrefix) > -1 &&
        card[i].lengths.indexOf(cardNumber.length) > -1) {
      return card[i]['name'];
    } else if (card[i].prefix.indexOf(threePrefix) > -1 &&
               card[i].lengths.indexOf(cardNumber.length) > -1) {
      return card[i]['name'];
    } else if (card[i].prefix.indexOf(twoPrefix) > -1 &&
               card[i].lengths.indexOf(cardNumber.length) > -1) {
      return card[i]['name'];
    } else if (card[i].prefix.indexOf(onePrefix) > -1 &&
               card[i].lengths.indexOf(cardNumber.length) > -1) {
      return card[i]['name'];
    }
  }
  return undefined;
};