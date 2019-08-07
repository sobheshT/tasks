/*class Calculate{
    constructor(number){
        this.number=number;
    }
store(){
var number = document.getElementById('inputNumber').value;
var number1 = this.number;
console.log(number);
}
}
class childCalc extends Calculate{

}

const sampleCalculate= new Calculate;
sampleCalculate.store();
sampleCalculate.add();*/
var number1;
var number2;
var number;
operator="";
function store(val){
    if(val>=0&&val<=9){
    var number=document.getElementById('inputNumber').value;
    }
    else if(val=='+'){
        operator='+';
        number1=document.getElementById('inputNumber').value;
        document.getElementById('inputNumber').value="";
    }
    else if(val == '='){
        number2=document.getElementById("inoutNUmber").value
        sum=parseInt(number1)+parseInt(number2);
        document.getElementById("inputNUmber").value=sum;
    }
}
