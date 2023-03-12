var sum=0,random;
for(var i=0;i<5;i++){
    random = Math.floor(Math.random()*90)+10;
    console.log(random);
    sum=sum+random;
}
console.log("Sum : "+sum);
console.log("Average : "+(sum/5));