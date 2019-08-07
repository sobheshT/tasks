class Fetch{
    saveemp(name,email,organization){
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let organization = document.getElementById('organization').value;
        let emps = [];
        let emp = {
            name : this.name,
            email: this.email,
            organization: this.organization
        };
        if(localStorage.getItem("emps") !=null){
            emps = JSON.parse(localStorage.getItem("emps"));
           let empfound =  emps.find((e)=>{
               return e.email == email;
    
            }); 
            if(empfound != undefined){
                alert('email exists try different');
            }   
            else{
                emps.push(emp);
            }
        }
        else{
    
            emps.push(emp);
        }
        
    
        
        localStorage.setItem("emps",JSON.stringify(emps));
    }
    loadEmployees();
}
     loadEmployees(){
        let rows='';
        emps = JSON.parse(localStorage.getItem("emps"));
        emps.forEach((employee)=>{
            rows += `<tr>
                        <td>${employee.name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.organization}</td>
                    </tr>`
        });
    
        let table = `<table>
        <tr>
            <th>name</th>
            <th>email</th>
            <th>organization</th>
            </tr>
                ${rows}
            </table>`;
        document.getElementById('table').innerHTML = table;
    
    
}
}