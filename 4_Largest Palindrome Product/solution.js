var num = 100001;
var test = 100;
var palindromes = [];
var multiples = [];

function findPalindromes( ){
  while (num <= 998001) {
    num = num.toString();
    // console.log(num);
    if ((num.charAt(0) === num.charAt(5)) && (num.charAt(1) === num.charAt(4)) && (num.charAt(2) === num.charAt(3))) {
      num = parseInt(num);
      palindromes.push(num);
    };
    num = parseInt(num);
    num+= 1;
  };
  // console.log(palindromes);
};

function findMultiples() {
  for (i = 0; i < palindromes.length; i++) {
    while (test < 999) {
      if ((palindromes[i] % test) === 0){
        var test2 = palindromes[i] / test;
        if ((test2 >= 100) && (test2 <= 999)) {
          multiples.push(palindromes[i]);
        };
      };
      test+= 1;
    };
    test = 100;
  };
  console.log(multiples);
  var largestMultiple = Math.max.apply(Math, multiples);
  console.log (largestMultiple);
};

findPalindromes();
findMultiples();
