// JavaScript Document

function checkPass(){
	var Dpass = document.getElementById('DomPass').value;
	var DpassRR='dominic123';
	var Dimg = document.getElementById('hiddenDom');
	
	if (Dpass===DpassRR){Dimg.style.display='block';}
	else {alert("Error 404. Close this.")}
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('DomPass').addEventListener("keydown", function (event) {
    if (event.key === "Enter") { 
      checkPass(); 
    }
  });
});