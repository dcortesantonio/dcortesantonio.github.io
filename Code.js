


function getDate() {
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date+' '+time;
return dateTime;
}

function sendMessage(){
   
    let mensaje = new Object();
    mensaje.nombre = document.getElementById("user_name").value;
    mensaje.msj = document.getElementById("msj").value;
    document.getElementById('user_name').value = '';
    document.getElementById('msj').value = '';
    mensaje.dateSend = getDate();
     if (mensaje.msj != "" && mensaje.nombre != "") {
        if (  mensaje.msj.length <= 300)
        {
            var newDiv = document.createElement("div"); 
            var br = document.createElement("br");
            var br2  = document.createElement("br");
            var newContentName = document.createTextNode("(" + mensaje.dateSend +") "+mensaje.nombre +": " ); 
            newDiv.appendChild(newContentName);
            var newContentMsj = document.createTextNode( mensaje.msj ); 
            newDiv.appendChild(br);
             newDiv.appendChild(newContentMsj); 
             newDiv.appendChild(br2);
             newDiv.appendChild(br);
            newDiv.style.textAlign = "center";
            var currentDiv = document.getElementById("msjs");
            document.body.insertBefore(newDiv, currentDiv);     
        }
        else{
            alert("El mensaje no debe tener más de 300 caracteres :(")
        }
    }
    else{
        //Error: alguna o ambas campos están vacíos.
        alert("Ningún campo debe estar vacío :(")
    }
}
