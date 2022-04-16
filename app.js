const inputElm  =   document.querySelector("input");
const ulElm     =   document.querySelector("ul");

function newElement(){
    if(inputElm.value === " " || inputElm.value.trim()==null || inputElm.value.trim()==""){
        $('.error').toast('show')
       
    }else{
        $('.success').toast('show')
        let createLi   =   document.createElement("li");
        let createBtn   =   document.createElement("button");
        createLi.addEventListener("click", strokeOver)
        createBtn.addEventListener("click", deleteMission)
        createBtn.style.float   =   "right";
        createBtn.style.border  =   "none";
        createBtn.style.backgroundColor  =   "red";
        createBtn.style.color  =   "white";
        createBtn.style.fontWeight  =   "bold";
        createBtn.style.borderRadius    =   "5px";
        createBtn.innerHTML     =   "Sil";
        createLi.innerHTML      =   inputElm.value;
        createLi.appendChild(createBtn)
        ulElm.appendChild(createLi)
    }
}

function deleteMission(){
    this.parentElement.remove();
}

function strokeOver(){
    this.classList.toggle("checked")
}