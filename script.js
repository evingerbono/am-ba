window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem);
}
function $(elem){
    return  document.querySelectorAll(elem)
}

function init(){
    var txt="";
    for (let index = 0; index <9; index++) {
        txt+="<div id='"+index+"'><p>"+"</p></div>";
    }
    ID("tarolo").innerHTML=txt;
    for (let index = 0; index < 9; index++) {
        ID(index).addEventListener("click",kattintas)   
    }
    var kezdo="";
    

}
var lepes=0;
var tomb=["-","-","-","-","-","-","-","-","-"]
function kattintas(){
    var indexakt =(event.target.id);
    ID(indexakt).className="formazas"
    if(lepes%2==0){
        ID(indexakt).innerHTML="X";
        ID(indexakt).style.backgroundColor="red"; 
        tomb[indexakt]="X";
        $("#infop p span")[0].innerHTML= ID("nev1").value
    }else{
        ID(indexakt).innerHTML="O";
        ID(indexakt).style.backgroundColor="lightblue"; 
        tomb[indexakt]="O";
        $("#infop p span")[0].innerHTML= ID("nev2").value
    }lepes++;
    console.log(tomb)
    ID(indexakt).removeEventListener("click",kattintas)
}