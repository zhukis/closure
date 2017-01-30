var calculator = createCalcaulator();

// console.log( calculator.showResult() );
// calculator.add(15);
// console.log( calculator.showResult() );
// calculator.substract(4);
// console.log( calculator.showResult() );
// calculator.reset();
// console.log( calculator.showResult() );

console.log( calculator.showResult() );
hackedCalculator(calculator);
var hacker = calculator.hack();
hacker();
console.log( calculator.showResult() );



function hackedCalculator(obj) {
    obj.hack = function () {
        return function (obj) {
            obj.sum = -1;
        }
    }
}

function createCalcaulator() {
    var sum = 0;

    return {
        showResult: function () {
            return sum;
        },

        reset: function () {
            sum = 0;
        },

        add: function (a) {
            if ( isNumeric(a) ) {
                sum += +a;
            }
        },

        substract: function (a) {
            if ( isNumeric(a) ) {
                sum -= +a;
            }
        }


    }
}

function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}