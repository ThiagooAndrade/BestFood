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
    let text_div = $("<div>").addClass("mt-4 mb-4");
    let text = $("<h1>").addClass("text-center").text("HAMBURGERS");
    text_div.append(text);

    let listProduct = $("#list-product");
    listProduct.append(text_div);

    let productCardapioContainer = $("<div>").addClass("product-cardapio-container");
    for (let i = 0; i < hamburgers.length; i++) {
        let button = $("<button>").text("Adicionar ao carrinho").addClass("btn btn-primary").attr("id", hamburgers[i].id + "button");

        button.on("click", () => {
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

        let btnProductContainer = $("<div>").addClass("btn-product-container").append(button);

        let textProductContainer = $("<div>").addClass("text-product-container");
        let h2 = $("<h2>").text(hamburgers[i].name);
        let p = $("<p>").text(moeda + hamburgers[i].price);
        textProductContainer.append(h2, p);

        let productBoxContent = $("<div>").addClass("product-box-content").append(textProductContainer, btnProductContainer);

        let productBoxImg = $("<div>").addClass("product-box-img");
        let img = $("<img>").attr("src", hamburgers[i].imgURL).attr("alt", hamburgers[i].name);
        productBoxImg.append(img);

        let productBox = $("<div>").addClass("product-box").append(productBoxImg, productBoxContent);

        productCardapioContainer.append(productBox);
    }
    listProduct.append(productCardapioContainer);
}
