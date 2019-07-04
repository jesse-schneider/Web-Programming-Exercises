var array = [7, 2, 500, 2, 70];
console.log(array);

array.push(6);
console.log(array);

array.unshift(10);
console.log(array);

array.splice(3, 0, 9);
console.log(array);

array.pop();
console.log(array);

array.splice(1, 1);
console.log(array);

array[4] = 100;
console.log(array);

array.sort(callback); //compares on strings, doesn't work properly without callback function

console.log(array);


function callback(a, b) {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}