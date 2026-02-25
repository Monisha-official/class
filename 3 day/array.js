let arr=[1,2,3,4,5,6,7];
let key=2;
let result=[];
for(let i=key;i<arr.length;i++){
    result.push(arr[i]);
}
for(let i=0;i<key;i++){
    result.push(arr[i]);
}
console.log(result);