let hamburgers = [
    {
        id: 1,
        name: "Cheeseburger",
        price: "15.90",
        imgURL: "./src/assets/cheeseburger.jpg"
    },
    {
        id: 2,
        name: "Vegano",
        price: "15.90",
        imgURL: "./src/assets/hamburgervegano.jpg"
    },
    {
        id: 3,
        name: "Frango grelhado",
        price: "15.90",
        imgURL: "./src/assets/hamburgerfrangogrelhado.jpg"
    },
    {
        id: 4,
        name: "Recheado",
        price: "15.90",
        imgURL: "./src/assets/hamburgerrecheado.jpg"
    },
    {
        id: 5,
        name: "Picanha",
        price: "15.90",
        imgURL: "./src/assets/burguer-de-picanha.jpg"
    }
]



function addHamburgerOnListProduct() {
    let text_div = document.createElement("div")
    text_div.classList.add("mt-4");
    text_div.classList.add("mb-4");
    let text = document.createElement("h1");
    text.classList.add("text-center");
    text.textContent = "HAMBURGERS";
    text_div.appendChild(text);

    let listProduct = document.getElementById("list-product");
    listProduct.appendChild(text_div);
    let productCardapioContainer = document.createElement("div");
    productCardapioContainer.classList.add("product-cardapio-container")
    for (let i = 0; i < hamburgers.length; i++) {
        //button
        let button = document.createElement("button");
        let btnProductContainer = document.createElement("div");
        button.textContent = "Adicionar ao carrinho";
        button.classList.add("btn")
        button.classList.add("btn-primary")
        button.id = hamburgers[i].id + "button";

        // addtocart func
        button.addEventListener("click", () => {
            let data = {
                id: hamburgers[i].id,
                item: {
                    name: hamburgers[i].name,
                    imgURL: hamburgers[i].imgURL
                },
                value: hamburgers[i].price
            };
            
            addToCart(data);
          
        });

        btnProductContainer.classList.add("btn-product-container")
        btnProductContainer.appendChild(button)


        //text
        let textProductContainer = document.createElement("div");
        textProductContainer.classList.add("text-product-container")
        let h2 = document.createElement("h2");
        h2.textContent = hamburgers[i].name;
        let p = document.createElement("p");
        p.textContent = moeda + hamburgers[i].price;
        textProductContainer.append(h2, p);


        //product box content
        let productBoxContent = document.createElement("div");
        productBoxContent.classList.add("product-box-content")
        productBoxContent.append(textProductContainer, btnProductContainer)


        //product box img
        let productBoxImg = document.createElement("div");
        productBoxImg.classList.add("product-box-img")
        let img = document.createElement("img");
        img.src = hamburgers[i].imgURL;
        img.alt = hamburgers[i].name;
        productBoxImg.appendChild(img);


        //product box
        let productBox = document.createElement("div");
        productBox.classList.add("product-box")
        productBox.append(productBoxImg, productBoxContent);

        productCardapioContainer.append(productBox)
    }
    listProduct.appendChild(productCardapioContainer);
}