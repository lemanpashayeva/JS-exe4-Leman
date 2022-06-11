function clickBtn() {
    document.getElementById("cliCk").style.color = "blueviolet";
    document.getElementById("cliCk").style.backgroundColor = "lightgreen";
    document.getElementById("cliCk").style.border = "1px solid grey";
}

function dblclickBtn() {
    document.getElementById("dbLcliCk").style.fontSize = "30px";
    document.getElementById("cliCk").style.fontSize = "30px";
}

function select() {
    document.getElementById("demo").style.backgroundColor = "darkgrey";
    document.getElementById("demo").style.color = "white";
    document.getElementById("demo").style.borderRadius = "7px";
    document.getElementById("demo").style.fontSize = "20px";
}

function over() {
    document.getElementById("moUseOver").style.fontSize = "32px";
    document.getElementById("moUseOver").style.color = "red";
}

function leave() {
    //moUseOver
    document.getElementById("moUseOver").style.fontSize = "16px";
    document.getElementById("moUseOver").style.color = "pink";
    document.getElementById("moUseOver").style.border = "2px solid grey";
    document.getElementById("moUseOver").style.width = "30%";
    //moUseLeave
    document.getElementById("moUseLeave").style.fontSize = "25px";
    document.getElementById("moUseLeave").style.color = "lightgreen";
    document.getElementById("moUseLeave").style.backgroundColor = "grey";
    document.getElementById("moUseLeave").style.width = "30%";
}