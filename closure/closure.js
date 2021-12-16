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
const defaultNumber  = 100
const plusNumber     = 5;
const minusNumber    = 2;
const multiplyNumber = 10;
const divideNumber   = 13;

const calc = calcFactory(defaultNumber);

const plusResult     = calc.plus(plusNumber);
const minusResult    = calc.minus(minusNumber);
const multiplyResult = calc.multiply(multiplyNumber);
const divideResult   = calc.divide(divideNumber);

console.log(`${defaultNumber} + ${plusNumber} = ${plusResult}`);
console.log(`${defaultNumber} + ${minusNumber} = ${minusResult}`);
console.log(`${defaultNumber} + ${multiplyNumber} = ${multiplyResult}`);
console.log(`${defaultNumber} + ${divideNumber} = ${divideResult}`);