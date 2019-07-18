var obj = {
        "people": [
            {"firstname": "Samuel", "lastname": "Cooke"},
            {"firstname": "Daniel", "lastname": "Grimley"},
            {"firstname": "Kristian", "lastname": "Thistle"}
        ]
};

console.log(obj);

var objStr = JSON.stringify(obj);

console.log(objStr);
console.log(typeof objStr);

var strObj = JSON.parse(objStr);

console.log(strObj);
console.log(typeof strObj);