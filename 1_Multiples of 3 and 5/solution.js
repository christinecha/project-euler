var number = 1;
var sum = 0;

function addMultiples(){
    for (i=998; i>=0; i--){
       var test1 = number % 3;
       var test2 = number % 5;
       if ((test1 === 0) || (test2 === 0)){
           sum+= number;
       } else {
       };
       number+= 1;
    };
    $('#sum').append("<p>Total sum is " + sum + ".</p>");
};

addMultiples();
