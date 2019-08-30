function unique(arr) {
    var obj = {};
    return arr.filter(function(item, index, arr) {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
    })
}

//ES5 实现去重
var array = [0,1,1,'1','2',null,null,undefined,undefined,NaN,NaN];
var tmpObj = {};
var result = [];
array.forEach(function(a) {
  var key = (typeof a) + a;
  if (!tmpObj[key]) {
    tmpObj[key] = true;
    result.push(a);
  }
});
console.log(result);


//indexOf
var arr = [1,1,2,3,4,2,6,4,5,7];
var nArr = [];
function removeItem(arr){
    for(var i=0;i<arr.length;i++){
        if(nArr.indexOf(arr[i])==-1){
            nArr.push(arr[i]);
        }
    }
    return nArr;
}
console.log(removeItem(arr));

//使用Set方法，返回的是一个对象
var arr = [1,1,'1','2',null,null,undefined,undefined,NaN,NaN];
console.log(new Set(arr));

//[...new Set(arr)]方法
// var arr = [1,1,'1','2',null,null,undefined,undefined,NaN,NaN];
// var newArr = [...new Set(arr)];
// console.log(newArr);


//Array.from 把类数组对象、可迭代对象转化为数组
var arr = [1,1,'1','2',null,null,undefined,undefined,NaN,NaN];
var newArr = Array.from(new Set(arr));
console.log(newArr);

//filter方法
// var arr = [1,1,'1','2',null,null,undefined,undefined,NaN,NaN];
// var res = new Map();
 // console.log(newArr);


//利用reduce对数组中的对象进行去重
var arr = [{
    "name": "Angus",
    "age": "16"
}, {
    "name": "Angus",
    "age": "16"
}, {
    "name": "Jay",
    "age": "26"
}, {
    "name": "Jay",
    "age": "26"
}];
var hash = {};
arr = arr.reduce(function(item, next) {
    hash[next.name] ? '' : hash[next.name] = true && item.push(next);
    return item
}, [])
console.log(arr);
