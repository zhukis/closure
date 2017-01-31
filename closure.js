var calculator = createCalcaulator();

var sumThis = 0;
var func = calculator.add;
func.call(calculator,23);
calculator.showResult();


function createCalcaulator() {
    var sum = 0;

    return {
        sumThis: 0,
        showResult: function () {
            console.log(sum);
            console.log(this.sumThis);
            return sum;
        },

        reset: function () {
            sum = 0;
        },

        add: function (a) {
            if ( isNumeric(a) ) {
                sum += +a;
                this.sumThis+=a;
            }
        },
        doubleAdd: function(a) {
            this.add(a);
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