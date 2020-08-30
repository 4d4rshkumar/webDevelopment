var d=false;
function click(){
    if(d==false){
        document.querySelector(".moon").classList.remove("disabled")
        document.querySelector(".sun").classList.add("disabled")
        document.querySelector(".modes").style.color = "white";
        document.querySelector(".modes").style.background = "black";
        document.querySelector("h1").innerText = "Dark Mode"
        d=true;
    }
    else{
        document.querySelector(".sun").classList.remove("disabled")
        document.querySelector(".moon").classList.add("disabled")
        document.querySelector(".modes").style.color = "black";
        document.querySelector(".modes").style.background = "rgb(240, 240, 240)";
        document.querySelector("h1").innerText = "Light Mode"
        
        d=false;
        

    }
}