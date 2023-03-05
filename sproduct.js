const url = `https://dummyjson.com/products/${localStorage.getItem('id')}`;
async function sproduct(api) {
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (error) {
       //------// 
    }
}
sproduct(url)
.then((data)=>{
    let thumbnail = document.createElement("img");
    thumbnail.src = data.thumbnail;
    thumbnail.style.width = "100%";
    thumbnail.setAttribute("id", "MainImg")
    document.querySelector("#single").append(thumbnail);
    let div = document.createElement("div");
    div.classList.add("SmalImgGroup");
    document.querySelector("#single").append(div);
    data.images.forEach(img => {
    let divel = document.createElement("div");
    divel.classList.add("smallImgCol");
    div.append(divel);
    let smallImg = document.createElement("img");
    smallImg.src = img;
    smallImg.style.width ="100%";
    smallImg.classList.add("smallImg");
    divel.append(smallImg);
    smallImg.onclick = function(){
       thumbnail.src = img;
    }
    });
    let h6 = document.createElement("h6");
    h6.textContent = data.description;
    document.querySelector("#details").append(h6);
    let h4 = document.createElement("h4");
    h4.textContent = data.title;
    document.querySelector("#details").append(h4);
    let price = document.createElement("h2");
    price.textContent = `$${data.price}`;
    document.querySelector("#details").append(price);
    let input = document.createElement("input");
    input.type = "number";
    input.value = "1";
    input.min = '1';
    document.querySelector("#details").append(input);
    let button = document.createElement("button");
    button.classList.add("normal")
    button.textContent = "Add To Cart";
    document.querySelector("#details").append(button);
    document.querySelector(".loader").classList.add("loader--hidden");
    //----------
    button.onclick = function(){
        localStorage.setItem("thumbnail", data.thumbnail);
        localStorage.setItem("title", data.title);
        localStorage.setItem("price", data.price);
        localStorage.setItem("value", input.value);

    }
})
.catch((err)=>{
    document.querySelector(".loader").classList.add("loader--hidden");
})
