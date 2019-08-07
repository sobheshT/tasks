 $(document).ready(()=>{
    console.log('jquery onload/ready is called');
    $('#signinpage').hide()
    $('#signuppage').hide()

    $('#signin').click(()=>{
        $('#signinpage').show(),
        $('#signuppage').hide()
     });
     
    $('#login').click(()=>{
    var uname=$("#name").val();
    var pword=$("#password").val();
    console.log('hii');
    if((uname== "sobhesh") && (pword== "sobhesh")){
        
        document.location = "http://www.w3schools.com";
            }
     });
   
    $('#signup').click(()=>{
        $('#signuppage').show(),
        $('#signinpage').hide()
        });
        
    $('#btn-register').click(()=>{
        $('#frm-register').validate({
            rules:{
                name: 'required',
                email: 'required',
                password:'required',
                passwordre:'required'
            }
        });
    });
   

    });
