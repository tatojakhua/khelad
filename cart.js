document.querySelector("#img").src = localStorage.getItem("thumbnail");
document.querySelector("#product").textContent = localStorage.getItem("title");
document.querySelector('#price').textContent = `$${localStorage.getItem("price")}`;
document.querySelector("#total").textContent = `$${localStorage.getItem('value')*localStorage.getItem('price')}`;
document.querySelector("#subtotalMin").textContent = `$${localStorage.getItem('value')*localStorage.getItem('price')}`;
document.querySelector("#sum").textContent = `$${localStorage.getItem('value')*localStorage.getItem('price')}`;
document.querySelector("#input").value = localStorage.getItem("value");
//
const target =document.querySelector("#input")
target.addEventListener("change",()=>{
document.querySelector("#total").textContent = `$${target.value*localStorage.getItem('price')}`;
document.querySelector("#subtotalMin").textContent = `$${target.value*localStorage.getItem('price')}`;
document.querySelector("#sum").textContent = `$${target.value*localStorage.getItem('price')}`;
});