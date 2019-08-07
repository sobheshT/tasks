

function clickme(){


    let math=document.getElementById('math');


    let eng=document.getElementById('eng');


    let cse=document.getElementById('cse');

 

    let table =`<br><table>


    <tr>


        <th>subject</th>


        <th>min marks</th>


        <th>max marks</th>


        <th>marks obtained</th>


    </tr>


    <tr>


        <th>eng</th>


        <th>60</th>


        <th>100</th>


        <th>${eng.value}</th>

 

    </tr>


     <tr>


     <th>math</th>


     <th>60</th>


     <th>100</th>


     <th>${math.value}</th>

 

</tr>


  <tr>


  <th>cse</th>


  <th>60</th>


  <th>100</th>


  <th>${cse.value}</th>

 

</tr>


</table>`;


document.getElementById('msgs').innerHTML =table;

 

total=parseInt(cse.value)+parseInt(math.value)+parseInt(eng.value);


percentage=total/3;


if(total<180){


document.getElementById('result').innerHTML=`total marks obtained=${total}<br>fail`;}


else if(total>180 && eng.value>60 && cse.value>60 && math.value>60){


    document.getElementById('result').innerHTML=`total marks obtained=${total}<br>pass`;}


    else{


        document.getElementById('result').innerHTML=`total marks obtained=${total}<br>fail`;


    }

 

}

