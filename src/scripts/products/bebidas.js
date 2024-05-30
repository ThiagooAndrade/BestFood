let bebidas = [
    {
        id: 24,
        name: "Coca cola",
        price: "15.90",
        imgURL: "./src/assets/cocacola.jpg" 
    },
    {
        id: 25,
        name: "Água",
        price: "15.90",
        imgURL: "./src/assets/agua.jpg" 
    },
    {
        id: 26,
        name: "Fanta laranja",
        price: "15.90",
        imgURL: "./src/assets/fantalaranja.jpg" 
    },
    {
        id: 27,
        name: "Sprite",
        price: "15.90",
        imgURL: "./src/assets/sprite.jpg" 
    }
]


function addBebidasOnListProduct() {
    let text_div = document.createElement("div");
    text_div.classList.add("mt-4");
    text_div.classList.add("mb-4");
    let text = document.createElement("h1");
    text.classList.add("text-center");
    text.textContent = "BEBIDAS";
    text_div.appendChild(text);


    let listProduct = document.getElementById("list-product");
    listProduct.appendChild(text_div);
    let productCardapioContainer = document.createElement("div");
    productCardapioContainer.classList.add("product-cardapio-container");
    for (let i = 0; i < bebidas.length; i++) {
        //button
        let button = document.createElement("button");
        let btnProductContainer = document.createElement("div");
        button.textContent = "Adicionar ao carrinho";
        button.classList.add("btn")
        button.classList.add("btn-primary")

          // addtocart func
        button.addEventListener("click", () => {
            let data = {
                id: bebidas[i].id,
                item: {
                    name: bebidas[i].name,
                    imgURL: bebidas[i].imgURL
                },
                value: bebidas[i].price
            };
            addToCart(data);
            
        });

        
        btnProductContainer.classList.add("btn-product-container")
        btnProductContainer.appendChild(button)

        //text
        let textProductContainer = document.createElement("div");
        textProductContainer.classList.add("text-product-container")
        let h2 = document.createElement("h2");
        h2.textContent = bebidas[i].name;
        let p = document.createElement("p");
        p.textContent = moeda + bebidas[i].price;
        textProductContainer.append(h2, p);


        //product box content
        let productBoxContent = document.createElement("div");
        productBoxContent.classList.add("product-box-content")
        productBoxContent.append(textProductContainer, btnProductContainer)


        //product box img
        let productBoxImg = document.createElement("div");
        productBoxImg.classList.add("product-box-img")
        let img = document.createElement("img");
        img.src = bebidas[i].imgURL;
        img.alt = bebidas[i].name;
        productBoxImg.appendChild(img);


        //product box
        let productBox = document.createElement("div");
        productBox.classList.add("product-box")
        productBox.append(productBoxImg, productBoxContent);

        productCardapioContainer.append(productBox)
    }
    listProduct.appendChild(productCardapioContainer);
}