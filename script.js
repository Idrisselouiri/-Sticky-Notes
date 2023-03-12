const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const chekCircle = document.querySelector("#chek-circle");
const closeCircle = document.querySelector("#close-circle");

let index = 0;
chekCircle.addEventListener('click', function(){
    createDivNote()
})

closeCircle.addEventListener("click" , function(){
    createNote()
})

function createNote(){
    if(container3.style.display == "none"){
        container3.style.display = "block";
    }
    else{
        container3.style.display = "none";
    }
}
function createDivNote(){
    var noteValue = document.getElementById('note-value');
    var itemsNote = document.createElement('div');
    var contentNote = document.createElement('h1');

    contentNote.innerHTML = noteValue.value;
    itemsNote.appendChild(contentNote);
    container2.insertAdjacentElement("beforeend", itemsNote);

    contentNote.setAttribute('style' , "font-size:2rem; width:270px;height:270px;padding:25px; margin-top:10px;overflow:hidden; box-shadow:0 10px 24px 0 rbga(0,0,0,.75)" );
    contentNote.style.background = color();
}

function color(){
    var color = ["#faedcd", "#e9edc9" , "#ffc8dd" , "#dad7cd"];
    
    if(index > color.length - 1 ){
        index = 0
    }
    return color[index++]
}