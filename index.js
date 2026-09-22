let toggleOpen=document.getElementById("menu-toggle");
let menu=document.getElementById("menu");


let transform="transformY(-100px)";
let isOpen=false;
function showMenu(){
    console.log("function called")
    menu.classList.add("show");
    isOpen=true;
}

function hideMenu(){
    console.log("function called")
    menu.classList.remove("show");
    isOpen=false;
}
toggleOpen.addEventListener('click',()=>{
    console.log("button clicked")
    if(isOpen){
        hideMenu();
    }
    else{
        showMenu();
    }
})