const filterAllBtn = $("#filter-all");
const filterOnlyPizzaBtn = $("#filter-only-pizzas");
const filterOnlyHamburgersBtn = $("#filter-only-hamburgers");
const filterOnlyHotdogsBtn = $("#filter-only-hotdogs");
const filterOnlyBebidasBtn = $("#filter-only-bebidas");
const filterOnlyAcompanhamentosBtn = $("#filter-only-acompanhamentos");

const listProduct = $("#list-product");

function filterAll() {
    listProduct.empty();
    addPizzaOnListProduct();
    addOnListProduct(hamburgers, "HAMBURGERS");
    addOnListProduct(hotdogs, "HOTDOGS");
    addOnListProduct(bebidas, "BEBIDAS");
    addOnListProduct(acompanhamentos, "ACOMPANHAMENTOS");
}

filterAll();

filterAllBtn.on("click", filterAll);

filterOnlyPizzaBtn.on("click", function () {
    listProduct.empty();
    addPizzaOnListProduct();
});

filterOnlyHamburgersBtn.on("click", function () {
    listProduct.empty();
    addOnListProduct(hamburgers, "HAMBURGERS");
});

filterOnlyHotdogsBtn.on("click", function () {
    listProduct.empty();
    addOnListProduct(hotdogs, "HOTDOGS");
});

filterOnlyBebidasBtn.on("click", function () {
    listProduct.empty();
    addOnListProduct(bebidas, "BEBIDAS");
});

filterOnlyAcompanhamentosBtn.on("click", function () {
    listProduct.empty();
    addOnListProduct(acompanhamentos, "ACOMPANHAMENTOS");
});


function addOnListProduct(product, name) {
    // Criando o elemento div para o texto
    let text_div = $("<div>").addClass("mt-4 mb-4");
    let text = $("<h1>").addClass("text-center").text(name);
    text_div.append(text);

    // Adicionando o texto ao elemento com id "list-product"
    $("#list-product").append(text_div);

    // Criando o elemento div para o container dos produtos
    let productCardapioContainer = $("<div>").addClass("product-cardapio-container");

    // Iterando sobre os hotdogs para criar os elementos
    $.each(product, function (index, obj) {
        // Criando o botão "Adicionar ao carrinho"
        let button = $("<button>").addClass("btn btn-primary btn-addCart");

        // Adicionando o ícone usando a tag <ion-icon>
        let icon = $("<ion-icon>").attr("name", "add-outline");

        // Adicionando o ícone ao texto do botão
        button.append(icon);

        // Adicionando o evento de clique ao botão
        button.on("click", function () {
            let data = {
                id: obj.id,
                item: {
                    name: obj.name,
                    imgURL: obj.imgURL
                },
                value: obj.price
            };
            addToCart(data);
        });

        // Criando o elemento div para o container do botão
        let btnProductContainer = $("<div>").addClass("btn-product-container").append(button);

        // Criando o elemento div para o container do texto
        let textProductContainer = $("<div>").addClass("text-product-container");
        let h2 = $("<h2>").text(obj.name).addClass("text-name");
        let p = $("<p>").text(moeda + obj.price).addClass("text-price");
        textProductContainer.append(h2, p);

        // Criando o elemento div para o container do conteúdo do produto
        let productBoxContent = $("<div>").addClass("product-box-content").append(textProductContainer, btnProductContainer);

        // Criando o elemento div para o container da imagem do produto
        let productBoxImg = $("<div>").addClass("product-box-img");
        let img = $("<img>").attr({
            src: obj.imgURL,
            alt: obj.name
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

