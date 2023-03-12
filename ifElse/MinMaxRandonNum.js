// Write a program that reads 5 Random 3 Digit values and then outputs the minimum
// and the maximum value
const r1 = Math.floor(Math.random()*900)+100;
const r2 = Math.floor(Math.random()*900)+100;
const r3 = Math.floor(Math.random()*900)+100;
// const r4 = Math.floor(Math.random()*900)+100;
// const r5 = Math.floor(Math.random()*900)+100;

console.log(r1);
console.log(r2);
console.log(r3);
// console.log(r4);
// console.log(r5);

if(r1>r2 && r1>r3){
    console.log(r1+" is larger");
}else if(r2>r1 && r3>r2){
    console.log(r2+"is larger");
}else if(r3>r1 && r3>r2){
    console.log(r3+"is larger");
}