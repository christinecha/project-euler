var num = 600851475143;
var x = 2;
var factors = [];

function findFactors(){
  while (x < num){
    if ((num % x) === 0){
      //x is a factor.
      factors.push(x);
      num = num / x;
    } else {
      x+=1;
    };
  };
  factors.push(num);
  console.log(factors);
  var largestFactor = Math.max.apply(Math, factors);
  console.log(largestFactor);
};

findFactors();
