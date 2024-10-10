function musharrafimam(){
    let x = document.getElementById("menus");
    if(x.style.display==="block"){
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myfunction(x){
    x.classlist.toggle("fa-minus-circle");
}