el = "Enable";
si = "Enable";
no = "Disable";
function chose() {
	console.log("chose act i el= " + el)
	if(el == no){disable();}
    else if(el== si){enable();}
}
function disable() {
    console.log("disable act i el= " + el)
	document.getElementById("nave-children").style.display = "none";
    document.getElementById("boto").style.color="black";
    document.getElementById("boto").style.background="white";
    el = si;
}

function enable() {
    console.log("enable act i el= " + el)
    document.getElementById("nave-children").style.display = "block";
    document.getElementById("boto").style.background="blue";
    document.getElementById("boto").style.color="white";
    
    el = no;
}