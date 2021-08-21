
window.addEventListener('load', function() {
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       console.log(xhttp.responseText);
    }
};
xhttp.open("GET", "http://localhost:5000/city", true);
xhttp.send();
})
console.log('hello')
var aa = new Date();
console.log(aa)
var pdate = aa.toLocaleDateString();
console.log(pdate)
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 

today = yyyy+'-'+mm+'-'+dd;
console.log("Today in dd/mm/yyyy format is" + today);


                
   function validate()
    {   var selectfrom = document.frm.sf.value;
        var selectto = document.frm.st.value;
        console.log("Selected city is" + selectfrom,selectto)
        var kids = document.frm.kids.value;
        var Departing=document.frm.Departing.value;                        
        console.log("Departing date is " + Departing )        
        var selectfrom = document.frm.sf.value;
        var selectto = document.frm.st.value; 
        console.log("Passengers is" + kids)
                if(airportvalidation(selectto,selectfrom))
                        {
                            if(datevalidation(Departing))
                            {   
                                console.log("Validation Successful")
                                return true;
                            }
                        }
            
            
      return false;
    } 
    
    function airportvalidation(selectto,selectfrom)
    {   var a = selectto;
        var b = selectfrom;
        
        if ( selectto == selectfrom ) 
        {  
            alert('Please check city');
            return false;
        }
        return true;
    }
    
    function datevalidation(Departing)
    {
        var dd = Departing;
       
        console.log("Departing date is"+ dd)
        let [y,m,d] = dd.split("-")
        
        if (dd < today)
        {
            alert("Check Departure date,Present or Future dates only allowed!!");
            return false;
        } 
         return true;
        
    }   
    