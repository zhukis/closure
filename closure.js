var calculator = createCalcaulator();

console.log( calculator.showResult() );
calculator.add(15);
console.log( calculator.showResult() );
calculator.substract(4);
console.log( calculator.showResult() );
calculator.reset();
console.log( calculator.showResult() );

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