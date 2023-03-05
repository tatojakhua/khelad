const URL = 'https://dummyjson.com/products/category/womens-dresses';
async function fetchURL(api) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (ERROR) {

    }
}
fetchURL(URL)
.then((data)=>{
data.products.forEach(element=>{
    let divElem = document.createElement("div");
    divElem.classList.add("pro");
    divElem.onclick=function(){
        window.location.href = 'sproduct.html';
        let id = localStorage.setItem('id', element.id)
      }
    document.querySelector(".pro-container").append(divElem);
    let imgElem = document.createElement("img");
    imgElem.src = element.thumbnail;
    divElem.append(imgElem);
    let divElem2 = document.createElement("div");
    divElem2.classList.add("des");
    divElem.append(divElem2);
    let spanElem = document.createElement("span");
    spanElem.textContent = element.brand;
    divElem2.append(spanElem);
    let h5Elem = document.createElement("h5");
    h5Elem.textContent = element.title;
    divElem2.append(h5Elem);
    let divElem3 = document.createElement("div");
    divElem3.classList.add("star");
    divElem2.append(divElem3);
    let iElem = document.createElement("i");
    iElem.textContent = "⭐⭐⭐⭐⭐";
    divElem3.append(iElem);
    let h4Elem = document.createElement("h4");
    h4Elem.textContent = `$ ${element.price}`;
    divElem2.append(h4Elem);
    let aElem = document.createElement("a");
    aElem.style.textDecoration = "none"
    aElem.href = "#";
    let trollIcon = document.createElement("i");
    trollIcon.classList.add("cart");
    trollIcon.innerHTML = "&#xf07a;";
    trollIcon.classList.add("trollIcon");
    aElem.append(trollIcon);
    divElem.append(aElem);
    document.querySelector(".loader").classList.add("loader--hidden");
    // document.body.removeChild(document.querySelector(".loader"));
});
})
.catch((err)=>{
    document.querySelector(".text").textContent = "HTTP Status Code 400"
    document.querySelector(".loader").classList.add("loader--hidden");
    document.querySelector("#womens").textContent = "Sorry, an error has been reported";

})
//-------------------------
const URL1 = 'https://dummyjson.com/products/category/mens-shirts';
async function fetchURL(api) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (ERROR) {

    }
}
fetchURL(URL1)
.then((data)=>{
data.products.forEach(element=>{
    let divElem = document.createElement("div");
    divElem.classList.add("pro");
    divElem.onclick=function(){
        window.location.href = 'sproduct.html';
        let id = localStorage.setItem('id', element.id)
      }
    document.querySelector("#Mens-section").append(divElem);
    let imgElem = document.createElement("img");
    imgElem.src = element.thumbnail;
    divElem.append(imgElem);
    let divElem2 = document.createElement("div");
    divElem2.classList.add("des");
    divElem.append(divElem2);
    let spanElem = document.createElement("span");
    spanElem.textContent = element.brand;
    divElem2.append(spanElem);
    let h5Elem = document.createElement("h5");
    h5Elem.textContent = element.title;
    divElem2.append(h5Elem);
    let divElem3 = document.createElement("div");
    divElem3.classList.add("star");
    divElem2.append(divElem3);
    let iElem = document.createElement("i");
    iElem.textContent = "⭐⭐⭐⭐⭐";
    divElem3.append(iElem);
    let h4Elem = document.createElement("h4");
    h4Elem.textContent = `$ ${element.price}`;
    divElem2.append(h4Elem);
    let aElem = document.createElement("a");
    aElem.style.textDecoration = "none"
    aElem.href = "#";
    let trollIcon = document.createElement("i");
    trollIcon.classList.add("cart");
    trollIcon.innerHTML = "&#xf07a;";
    trollIcon.classList.add("trollIcon");
    aElem.append(trollIcon);
    divElem.append(aElem);
    document.querySelector(".loader").classList.add("loader--hidden");
    // document.body.removeChild(document.querySelector(".loader"))
});
})
.catch((err)=>{
    document.querySelector("#men").textContent = "HTTP Status Code 400"
    document.querySelector(".loader").classList.add("loader--hidden");
    document.querySelector("#mens").textContent = "Sorry, an error has been reported";
})

document.querySelector(".one").onclick = function(){
    localStorage.setItem('skip', '0')
    }

    document.querySelector("#button").onclick=function(){
        window.location.href = 'shop.html';
        localStorage.setItem('skip', '0')
      }