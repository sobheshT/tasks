const Calc = require('./calc').Calculator;
const obj = new Calc();
let _first = parseInt(process.argv[3] );
let _next = parseInt(process.argv[4] );
let option=process.argv[2]
switch(option){
case('add'):
console.log("Addition is ="+obj._add(_first,_next));
break;
case('subtract'):
console.log("Subtractionn is ="+obj._sub(_first,_next));
break;
case('multiply'):
console.log("Multiplication is ="+obj._mul(_first,_next));
break;
case('divide'):
console.log("Division is ="+obj._divide(_first,_next));
break;
case('modulodiv'):
console.log("Modulodiv is ="+obj._modulodiv(_first,_next));
break;

}
