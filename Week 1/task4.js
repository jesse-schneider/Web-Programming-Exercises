function multiplyNums(x, y, z) {
    return "new number is " + x * y * z;
}

var multiplyNumsArrow = (x, y, z) => {
    return "new number is " + x * y * z;
}

console.log(multiplyNums(1, 2, 3));
console.log(multiplyNumsArrow(1, 2, 3));