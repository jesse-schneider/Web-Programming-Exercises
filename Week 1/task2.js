var obj = {
        people: ["Samuel Jackson", "Daniel Cooke", "Kristian Grimley"]
};

console.log(obj);

var objStr = JSON.stringify(obj);

console.log(objStr);
console.log(typeof objStr);

var strObj = JSON.parse(objStr);

console.log(strObj);
console.log(typeof strObj);