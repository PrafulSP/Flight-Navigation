window.addEventListener('load', function() {
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       populate(JSON.parse(xhttp.responseText))
        //JSON.parse(xhttp.responseText);
    }
};
xhttp.open("GET", "http://localhost:5000/available", true);
xhttp.send();
})

function populate(data)
{
    const table = document.querySelector(".member")
    data.map((flight)=>{
        let row = document.createElement("tr")

        let fnum = document.createElement("td") 
        let textNode = document.createTextNode(flight.fnum);
        fnum.appendChild(textNode);
    
        let ftime = document.createElement("td")
        textNode = document.createTextNode(flight.ftime);
        ftime.appendChild(textNode); 
    
        let dtime = document.createElement("td")
        textNode = document.createTextNode(flight.dtime);
        dtime.appendChild(textNode);
    
        let cost = document.createElement("td")
        textNode = document.createTextNode("₹" + flight.cost);
        cost.appendChild(textNode);
    
        row.appendChild(fnum)
    
        row.appendChild(ftime)
    
        row.appendChild(dtime)
    
        row.appendChild(cost)
        
        table.appendChild(row)
    })


    

    
}