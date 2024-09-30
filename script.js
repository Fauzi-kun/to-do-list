const time = new Date()
let date = time.toLocaleString()




const profil = document.getElementById('profil')


document.getElementById('btn-name').addEventListener('click', function(){
    let nama = document.getElementById('name').value.trim()
    let pos = document.getElementById('pos').value.trim()
    if(nama !=='' && pos !== ''){
    profil.innerHTML = `Nama : ${nama} - Possition : ${pos}`
    }
})



document.getElementById('add').addEventListener('click', function(){
    let inputBox = document.getElementById('input-box')
    let priority = document.getElementById('priority')
    let listTask = document.getElementById('list-task')
    if(inputBox.value !== ''){
        let add = document.createElement('li')
        add.classList.add(`priority-${priority.value}`)
        add.innerHTML = `<input type="checkbox" class="checkbox"><span class='taskText'>${inputBox.value.trim()} - ${priority.value} - ${date}</span><button class='removeBtn'>Remove</button>`
        listTask.appendChild(add)
    }
    inputBox.value = ''

    listTask.querySelector('.checkbox').addEventListener('change', function(){  
        if(this.checked){
            toDone(add)
        }
    })

})
function toDone(item){
    const doneTask = document.getElementById('done-task')
    const newItem =item
        newItem.classList.add('complete')
        
        doneTask.appendChild(newItem)
}
