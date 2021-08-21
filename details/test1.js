console.log("hello how are  you")
function validate()
{

    var a = document.frm.name.value;
    if(a=="")
    {
        alert("Please enter name");
        return false;
    }
    var b= document.frm.email.value;
    if(b=="")
    {
        alert("Please enter email");
        return false;
    }

    var c= document.frm.gender.value;
    if(c=="--gender--")
    {
        alert("Please enter gender");
        return false;
    }

    var d=document.frm.number.value;
    if(d==" ")
    {
        alert("Please enter number");
        return false;
    }

    var e=document.frm.address.value;
    if(e==" ")
    {
        alert("Please enter address");
        return false;
    }
    var f=document.frm.city.value;
    if(f=="---Select city---")
    {
        alert("Please enter city");
        return false;
    }

}    
