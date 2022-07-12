function firstFunc(firstNum) {
    function secondFunc(secondNum) {
        return firstNum + secondNum;
    }
    return secondFunc(5);
}
let result = firstFunc(6);
console.log(result);