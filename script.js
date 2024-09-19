const inputBox = document.getElementById("input-box");
const listBody = document.getElementById("list-body");
const priority = document.getElementById("priority");
const addList = document.getElementById("add");

addList.addEventListener('click', function(){
    if(inputBox.value === ''){
        alert("mohon tulis list");
    }
    else{
        let list = document.createElement("li");
        list.innerHTML = inputBox.value + "-" + priority.value;
        listBody.appendChild(list);
        inputBox.value = '';
        saveData();
    }
})
function saveData(){
    localStorage.setItem("data", listBody.innerHTML);
}
function showTask(){
    listBody.innerHTML = localStorage.getItem("data");
}