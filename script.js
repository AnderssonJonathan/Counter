function calc(){
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let op = document.getElementById("operator").value;
    //let op = document.querySelector("#operator").value;
    //let opr = document.getElementById("opr").value;
    switch(op){
        case "add": document.getElementById("inputResult").value = n1+n2;
        break;
        case "min": document.getElementById("inputResult").value = n1-n2;
        break;
        case "mul": document.getElementById("inputResult").value = n1*n2;
        break;
        case "div": document.getElementById("inputResult").value = n1/n2;
        break;
        case "per": document.getElementById("inputResult").value = n1%n2;
        break;
        default: alert("Entered operator is not valid!");
        break;
    }
}