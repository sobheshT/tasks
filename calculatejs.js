let z=0;
op="";
data1
data2
c=1;
function eval(g){
    if(g>=0 && g<=9){
    z=(z*10)+g;
    document.getElementById("disp").value=z
    }
    else if(g=='+'){
    z=0;
    op="+";
    data1=document.getElementById("disp").value
    document.getElementById("disp").value=""
    }
    else if(g== '=')
    {
        data2=document.getElementById("disp").value
        sum=parseInt(data1)+parseInt(data2);
        document.getElementById("disp").value=sum;
        if(c==1){
            data2=data1;
            c++;
        }
    }

}