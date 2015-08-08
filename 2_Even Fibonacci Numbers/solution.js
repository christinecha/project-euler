var prevNum = 0;
var fibnum = 1;
var newFibnum;
var sum = 0;

function addFibonacci(){
    while (fibnum <= 4000000) {
        var test = fibnum % 2;
        if ( test === 0) {
            sum+= fibnum;
        } else {
        };
        newFibnum = fibnum + prevNum;
        prevNum = fibnum;
        fibnum = newFibnum;
    };
    $('#answer').append("<p>The sum is " + sum + ".</p>");
};

addFibonacci();
