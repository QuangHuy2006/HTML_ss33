const todolist = [
    {id: 1, content: "day som luc 7h"},
    {id: 2, content: "ngu luc 12h"},
    {id: 3, content: "an keo"},
    {id: 4, content: "quet nha"},
];
const ul = document.querySelector("#myUL");
function render(){
    todolist.forEach(value => {
        const li = document.createElement("li");
        li.innerHTML = `
        ${value.content}`;
        ul.appendChild(li);
    })
};
render();
