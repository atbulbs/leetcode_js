var reverse = function(x) {
  let y = x > 0 ? x : 0 - x
let num = 0;
while (y !== 0) {
  num = y % 10 + num * 10;
  y = Math.floor(y / 10)
}
if(num>=0x80000000-1|| num<=0-0x80000000){
  return 0
}
if(x<0){
  return num*(-1);
}
return num;
};