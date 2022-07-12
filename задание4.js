const Numbers = function (a, b) {
    timer = setInterval(function () {
        if (a <= b) {
            console.log(a)
            a++;
        } else {
            clearInterval(timer)
        }
    }, 1000);
}
Numbers(5, 15);