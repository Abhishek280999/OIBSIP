let taskName = document.querySelector('.taskName')

let detail = document.querySelector('.detail')

var arr = [];


// let saveTodo = JSON.parse(localStorage.getItem('todo')) || [];
// showTodo(saveTodo)
//this function will create todo and store it in localstorage;

function addTodo(){
    

    let todoObj = {
        task : taskName.value,
        detail : detail.value   
    }
    let x = []
    x = JSON.parse(localStorage.getItem('todo')) || [];
    x.push(todoObj);


    localStorage.setItem("todo", JSON.stringify(x))

}



//this function will append the array in div;

// function showTodo(data){

//     data.forEach(element => {
        
//         let div = document.createElement('div')

//         let heading = document.createElement('h2')
//         heading.innerText = element.task

//         let detail = document.createElement('p')
//         detail.innerText = element.detail

//         div.append(heading, detail)

//         document.getElementById('result').append(div)
//     });
// }