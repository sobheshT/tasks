function store()
{
    var ID =document.getElementById("ID").value;
    var name =document.getElementById("name").value;
    var skill =document.getElementById("skill").value;
    data=`{"ID":"${ID}","name":"${name}","skill":"${skill}"}`;
    localStorage.setItem(`${ID}`,`${data}`);
    console.log("Saved in Local Storage");
}
function assign(){
    var time=document.getElementById("time").value;
    var Subject = document.getElementById("Subject").value;
    data=`{"time":"${time}","Subject":"${Subject}"}`;
    localStorage.setItem(`${time}`,`${data}`);
    var id=document.getElementById("manualID").value;
    Object.keys(localStorage).forEach((e)=>{
        let v=JSON.parse(localStorage.getItem(e))
        if(v.ID=="1"){
            document.getElementById("s1").innerHTML=v.name;
            document.getElementById("math").innerHTML=v.skill;
        }
        if(v.ID=="2"){
            document.getElementById("s2").innerHTML=v.name;
            
        }
        if(v.ID=="3"){
            document.getElementById("s3").innerHTML=v.name;
        }
        if(v.ID=="4"){
            document.getElementById("s4").innerHTML=v.name;
        }
        if(v.ID=="5"){
            document.getElementById("s5").innerHTML=v.name;
        } 
        if(v.ID=="6"){
            document.getElementById("s6").innerHTML=v.name;
        }
    })
}