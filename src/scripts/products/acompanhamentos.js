let acompanhamentos = [
    {
        id: 28,
        name: "Batata Frita",
        price: "15.90",
        imgURL: "./src/assets/batatafrita.jpg"
    },
    {
        id: 29,
        name: "Nuggets",
        price: "15.90",
        imgURL: "./src/assets/nuggets.jpg"
    }
]

function addAcompanhamentosOnListProduct() {
    let text_div = $("<div></div>").addClass("mt-4 mb-4");
    let text = $("<h1></h1>").addClass("text-center").text("ACOMPANHAMENTOS");
    text_div.append(text);

    let listProduct = $("#list-product");
    listProduct.append(text_div);
    let productCardapioContainer = $("<div></div>").addClass("product-cardapio-container");
    $.each(acompanhamentos, function (i, acompanhamento) {
        //button
        let button = $("<button></button>").text("Adicionar ao carrinho").addClass("btn btn-primary");

        // addtocart func
        button.on("click", function () {
            let data = {
                id: acompanhamento.id,
                item: {
                    name: acompanhamento.name,
                    imgURL: acompanhamento.imgURL
                },
                value: acompanhamento.price
            };
            addToCart(data);
        });

        let btnProductContainer = $("<div></div>").addClass("btn-product-container").append(button);

        //text
        let textProductContainer = $("<div></div>").addClass("text-product-container");
        let h2 = $("<h2></h2>").text(acompanhamento.name);
        let p = $("<p></p>").text(moeda + acompanhamento.price);
        textProductContainer.append(h2, p);

        //product box content
        let productBoxContent = $("<div></div>").addClass("product-box-content").append(textProductContainer, btnProductContainer);

        //product box img
        let productBoxImg = $("<div></div>").addClass("product-box-img");
        let img = $("<img>").attr("src", acompanhamento.imgURL).attr("alt", acompanhamento.name);
        productBoxImg.append(img);

        //product box
        let productBox = $("<div></div>").addClass("product-box").append(productBoxImg, productBoxContent);

        productCardapioContainer.append(productBox);
    });
    listProduct.append(productCardapioContainer);
}
