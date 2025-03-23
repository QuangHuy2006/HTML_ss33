const btn=document.querySelector("#show");
const hiddenBtn = document.querySelector("#hidden");
const input = document.querySelector("#myInput");
btn.addEventListener("click", function(event) {
    event.preventDefault();
    input.setAttribute("type", "text");
    btn.style.display = "none";
    hiddenBtn.style.display = "block";
});
hiddenBtn.addEventListener("click", function(event){
    event.preventDefault();
    input.setAttribute("type", "password");
    btn.style.display = "block";
    hiddenBtn.style.display = "none";
})