


let result = 0;

document.getElementById("telOp").onclick = function(){
    result = result + Number(document.getElementById("getal").value);
    document.getElementById("resultaat").innerHTML = result;
}



