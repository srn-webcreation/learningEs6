/**
 * calcFactory - 四則演算を行うメソッドを持ったオブジェクト
 * @param {number} [defaultNumber] 演算の初期値
 * @return {object} 演算結果
 */
function calcFactory(defaultNumber) {
    let result = defaultNumber;
    return {
        plus: (addNumber)=> {
            result += addNumber;
            return result;
        },
        minus: (minusNumber)=> {
            result -= minusNumber;
            return result;
        },
        multiply: (multiplyNumber)=> {
            result *= multiplyNumber;
            return result;
        },
        divide: (divideNumber)=> {
            result /= divideNumber;
            return result;
        }
    }
}

const calc = calcFactory(10);
console.log("10 + 5 = ", calc.plus(5));
console.log("15 - 2 = ", calc.minus(2));
console.log("13 * 10 = ", calc.multiply(10));
console.log("130 / 13 = ", calc.divide(13));