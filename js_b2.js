const input = document.querySelector("#input");
const check = document.querySelector("#check");
const amount = document.querySelector("#amount");
check.addEventListener("click", function(event){
    event.preventDefault();
    amount.textContent = `so luong ky tu: ${input.value.length}`;
})