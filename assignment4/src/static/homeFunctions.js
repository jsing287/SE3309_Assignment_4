
function getEmployee()
{
    let xReq = new XMLHttpRequest(); // creating a new XML request.
    xReq.onreadystatechange = display; 

  
    xReq.open('GET', `/employee`, true)  

    xReq.send(); 
}



function display()
{
    if(this.readyState==4 && this.status == 200)
    {
        let display  = document.getElementById("greeting");
        display.innerHTML=this.responseText;
        
        
    }

}


getEmployee();