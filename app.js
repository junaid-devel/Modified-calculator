function buttnClick(a){
    var getInp = document.getElementById("inp");
    getInp.value += a;


}

function cls(){
    var getInp = document.getElementById("inp");
    getInp.value = "";
}

function equals(){
    var getInp = document.getElementById("inp");
    try {
        getInp.value = eval(getInp.value);
    } catch (error) {
        getInp.value = "Error"
    }
}

function erase(){
    var getinp = document.getElementById("inp");
    getinp.value = getinp.value.slice(0,-1)
}