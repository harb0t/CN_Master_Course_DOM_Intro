const button = document.getElementById('submit')
const input = document.getElementById('input')
let list = document.getElementsByTagName('ul')[0]
const showHideButton=document.getElementById("showhide-btn");

button.addEventListener('click', ()=>{
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    console.log(listItem);
    list.appendChild(listItem);
    input.value='';
});

showHideButton.addEventListener('click', () => {
    let list = document.getElementsByTagName('ul')[0];
    if(list.style.display == "none") {
        list.style.display = "block";
        showHideButton.textContent = "hide";
    } else {
        list.style.display = "none";
        showHideButton.textContent = "show";
    }
    }
)