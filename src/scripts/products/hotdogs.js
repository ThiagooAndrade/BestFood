let hotdogs = [
    {
        id: 6,
        name: "Tradicional",
        price: "15.90",
        imgURL: "./src/assets/hotdogtradicional.jpg"
    },
    {
        id: 7,
        name: "Em espeto",
        price: "15.90",
        imgURL: "./src/assets/hotdogespeto.jpg"
    },
    {
        id: 8,
        name: "Crepe",
        price: "15.90",
        imgURL: "./src/assets/hotdogcrepe.jpg"
    }
]


function addHotdogOnListProduct() {
    // Criando o elemento div para o texto
    let text_div = $("<div>").addClass("mt-4 mb-4");
    let text = $("<h1>").addClass("text-center").text("HOTDOGS");
    text_div.append(text);

    // Adicionando o texto ao elemento com id "list-product"
    $("#list-product").append(text_div);

    // Criando o elemento div para o container dos produtos
    let productCardapioContainer = $("<div>").addClass("product-cardapio-container");

    // Iterando sobre os hotdogs para criar os elementos
    $.each(hotdogs, function (index, hotdog) {
        // Criando o botão "Adicionar ao carrinho"
        let button = $("<button>").addClass("btn btn-primary").text("Adicionar ao carrinho");

        // Adicionando o evento de clique ao botão
        button.on("click", function () {
            let data = {
                id: hotdog.id,
                item: {
                    name: hotdog.name,
                    imgURL: hotdog.imgURL
                },
                value: hotdog.price
            };
            addToCart(data);
        });

        // Criando o elemento div para o container do botão
        let btnProductContainer = $("<div>").addClass("btn-product-container").append(button);

        // Criando o elemento div para o container do texto
        let textProductContainer = $("<div>").addClass("text-product-container");
        let h2 = $("<h2>").text(hotdog.name);
        let p = $("<p>").text(moeda + hotdog.price);
        textProductContainer.append(h2, p);

        // Criando o elemento div para o container do conteúdo do produto
        let productBoxContent = $("<div>").addClass("product-box-content").append(textProductContainer, btnProductContainer);

        // Criando o elemento div para o container da imagem do produto
        let productBoxImg = $("<div>").addClass("product-box-img");
        let img = $("<img>").attr({
            src: hotdog.imgURL,
            alt: hotdog.name
        });
        productBoxImg.append(img);

        // Criando o elemento div para o container do produto
        let productBox = $("<div>").addClass("product-box").append(productBoxImg, productBoxContent);

        // Adicionando o produto ao container de produtos
        productCardapioContainer.append(productBox);
    });

    // Adicionando o container de produtos ao elemento com id "list-product"
    $("#list-product").append(productCardapioContainer);
}
