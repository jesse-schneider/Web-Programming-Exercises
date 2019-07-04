var array = [7, 2, 500, 2, 70];
console.log(array);

array.push(6);
console.log(array);

array.unshift(0);
console.log(array);

array.splice(3, 0, 9);
console.log(array);

array.pop();
console.log(array);

array.splice(1, 1);
console.log(array);

array[4] = 100;
console.log(array);

console.log(array.sort());