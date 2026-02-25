var a=[2,3,4,5,6,7,8,9,10];
var total=0;
for(var i=0;i<a.length;i++){
    total=total+a[i];
}
console.log(total);



//repeated number
var a=[1,2,3,4,5,6,7,8,9,10,1];
var repeated;       
for(var i=0;i<a.length;i++){
    for(var j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            repeated=a[i];
        }
    }   
}
console.log(repeated);
