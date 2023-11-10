var element;
document.getElementById("div2").addEventListener("click",hi);
document.getElementById("div2").addEventListener("mouseover",function(){
    document.getElementById("div2").style.border="5px dotted black"
});
function hi(){
    document.getElementById("div2").style.backgroundColor="green";
}