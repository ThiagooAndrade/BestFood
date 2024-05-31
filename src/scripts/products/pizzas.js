let pizzasPequena = [
    {
        id: 9,
        name: "Mussarela",
        price: "34.00",
        imgURL: "./src/assets/pizzamussarela.jpg"
    },
    {
        id: 10,
        name: "Calabresa",
        price: "35.00",
        imgURL: "./src/assets/pizzacalabresa.jpg"
    },
    {
        id: 11,
        name: "Frango Catupiry",
        price: "36.90",
        imgURL: "./src/assets/frangocatupiry.jpg"
    },
    {
        id: 12,
        name: "Três queijos",
        price: "38.90",
        imgURL: "./src/assets/pizzatresqueijos.jpg"
    },
    {
        id: 13,
        name: "Portuguesa",
        price: "35.90",
        imgURL: "./src/assets/pizzaportuguesa.png"
    },
]

let pizzasMedia = [
    {
        id: 14,
        name: "Mussarela",
        price: "42.90",
        imgURL: "./src/assets/pizzamussarela.jpg"
    },
    {
        id: 15,
        name: "Calabresa",
        price: "43.90",
        imgURL: "./src/assets/pizzacalabresa.jpg"
    },
    {
        id: 16,
        name: "Frango Catupiry",
        price: "44.90",
        imgURL: "./src/assets/frangocatupiry.jpg"
    },
    {
        id: 17,
        name: "Três queijos",
        price: "45.90",
        imgURL: "./src/assets/pizzatresqueijos.jpg"
    },
    {
        id: 18,
        name: "Portuguesa",
        price: "43.90",
        imgURL: "./src/assets/pizzaportuguesa.png"
    },
]

let pizzasGrande = [
    {
        id: 19,
        name: "Mussarela",
        price: "57.90",
        imgURL: "./src/assets/pizzamussarela.jpg"
    },
    {
        id: 20,
        name: "Calabresa",
        price: "58.90",
        imgURL: "./src/assets/pizzacalabresa.jpg"
    },
    {
        id: 21,
        name: "Frango Catupiry",
        price: "60.90",
        imgURL: "./src/assets/frangocatupiry.jpg"
    },
    {
        id: 22,
        name: "Três queijos",
        price: "62.90",
        imgURL: "./src/assets/pizzatresqueijos.jpg"
    },
    {
        id: 23,
        name: "Portuguesa",
        price: "59.90",
        imgURL: "./src/assets/pizzaportuguesa.png"
    },
]
function addPizzaOnListProduct() {
    const listProduct = $("#list-product");
    const pizzaContainer = $("<div>");

    pizzaContainer.html(`
        <div class="mt-4 mb-4">
            <h1 class="text-center">PIZZAS</h1>
        </div>
        <div class="product-cardapio-container">
            <div class="product-box">
                <div class="product-box-content w-100">
                    <div class="text-product-container">
                        <h2>Pequena</h2>
                        <p>A partir de <span>R$ 34,00</span></p>
                    </div>
                    <div class="btn-product-container">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pizzasPequenaModal">
                            Veja mais
                        </button>
                    </div>
                </div>
            </div>
            <div class="product-box">
                <div class="product-box-content w-100">
                    <div class="text-product-container">
                        <h2>Média</h2>
                        <p>A partir de <span>R$ 42,00</span></p>
                    </div>
                    <div class="btn-product-container">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pizzasMediaModal">
                            Veja mais
                        </button>
                    </div>
                </div>
            </div>
            <div class="product-box">
                <div class="product-box-content w-100">
                    <div class="text-product-container">
                        <h2>Grande</h2>
                        <p>A partir de <span>R$ 57,90</span></p>
                    </div>
                    <div class="btn-product-container">
                        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#pizzasGrandeModal">
                            Veja mais
                        </button>
                    </div>
                </div>
            </div>
        </div>`);

    listProduct.append(pizzaContainer);

    criarPizzaPequenaModal();
    criarPizzaMediaModal();
    criarPizzaGrandeModal();
}


function criarPizzaPequenaModal() {
    // Criando o elemento div para o modal
    const modalDiv = $("<div>").addClass("modal fade").attr({
        id: "pizzasPequenaModal",
        tabindex: "-1",
        "aria-labelledby": "pizzaModalLabel",
        "aria-hidden": "true"
    });

    // Criando o elemento div para o dialog
    const dialogDiv = $("<div>").addClass("modal-dialog");

    // Criando o elemento div para o conteúdo do modal
    const contentDiv = $("<div>").addClass("modal-content");

    // Criando o elemento div para o cabeçalho do modal
    const headerDiv = $("<div>").addClass("modal-header");

    // Criando o título do modal
    const titleH1 = $("<h1>").addClass("modal-title fs-5").attr("id", "pizzaModalLabel").text("Pizzas de tamanho pequeno");

    // Criando o botão para fechar o modal
    const closeButton = $("<button>").addClass("btn-close").attr({
        type: "button",
        "data-bs-dismiss": "modal",
        "aria-label": "Close"
    });

    // Adicionando o título e o botão de fechar ao cabeçalho
    headerDiv.append(titleH1, closeButton);

    // Criando o corpo do modal
    const bodyDiv = $("<div>").addClass("modal-body bg-info-subtle");

    // Criando a linha para os produtos
    const rowDiv = $("<div>").addClass("row g-2 d-flex");

    // Iterando sobre os produtos para criar os elementos
    $.each(pizzasPequena, function (index, pizza) {
        // Criando a coluna para cada produto
        const productBox = $("<div>").addClass("product-box");

        const productBoxImg = $("<div>").addClass("product-box-img");
        const img = $("<img>").attr({
            src: pizza.imgURL,
            alt: pizza.name
        });
        productBoxImg.append(img);

        const productBoxContent = $("<div>").addClass("product-box-content");

        // Criando o container para o texto do produto
        const textContainerDiv = $("<div>").addClass("text-product-container");

        // Criando o título do produto
        const tituloH2 = $("<h2>").text(pizza.name);

        // Criando o preço do produto
        const precoP = $("<p>").text(moeda + pizza.price);

        // Adicionando o título e o preço ao container de texto do produto
        textContainerDiv.append(tituloH2, precoP);

        // Criando o container para o botão do produto
        const btnContainerDiv = $("<div>").addClass("btn-product-container");

        // Criando o botão "Adicionar ao carrinho" para o produto
        const btnAdicionar = $("<button>").addClass("btn btn-primary btn-pizza").text("Adicionar ao carrinho");

        // Adicionando o evento de clique ao botão
        btnAdicionar.on("click", function () {
            let data = {
                id: pizza.id,
                item: {
                    name: pizza.name + " pequena",
                    imgURL: pizza.imgURL
                },
                value: pizza.price
            };
            addToCart(data);
        });

        // Adicionando o botão ao container do botão do produto
        btnContainerDiv.append(btnAdicionar);

        // Adicionando o container de texto e o container de botão à coluna do produto
        productBoxContent.append(textContainerDiv, btnContainerDiv);

        productBox.append(productBoxImg, productBoxContent);

        // Adicionando a coluna à linha de produtos
        rowDiv.append(productBox);
    });

    // Adicionando o container à linha de produtos
    bodyDiv.append(rowDiv);

    // Criando o rodapé do modal
    const footerDiv = $("<div>").addClass("modal-footer");

    // Criando o botão para fechar o modal
    const closeButtonFooter = $("<button>").addClass("btn btn-primary").attr({
        type: "button",
        "data-bs-dismiss": "modal"
    }).text("Close");

    // Adicionando a label e o botão ao rodapé do modal
    footerDiv.append(closeButtonFooter);

    // Adicionando o cabeçalho, corpo e rodapé ao conteúdo do modal
    contentDiv.append(headerDiv, bodyDiv, footerDiv);

    // Adicionando o conteúdo ao dialog
    dialogDiv.append(contentDiv);

    // Adicionando o dialog ao modal
    modalDiv.append(dialogDiv);

    // Adicionando o modal ao body
    $("body").append(modalDiv);
}

function criarPizzaMediaModal() {
    // Criando o elemento div para o modal
    const modalDiv = $("<div>").addClass("modal fade").attr({
        id: "pizzasMediaModal",
        tabindex: "-1",
        "aria-labelledby": "pizzaModalLabel",
        "aria-hidden": "true"
    });

    // Criando o elemento div para o dialog
    const dialogDiv = $("<div>").addClass("modal-dialog");

    // Criando o elemento div para o conteúdo do modal
    const contentDiv = $("<div>").addClass("modal-content");

    // Criando o elemento div para o cabeçalho do modal
    const headerDiv = $("<div>").addClass("modal-header");

    // Criando o título do modal
    const titleH1 = $("<h1>").addClass("modal-title fs-5").attr("id", "pizzaModalLabel").text("Pizzas de tamanho médio");

    // Criando o botão para fechar o modal
    const closeButton = $("<button>").addClass("btn-close").attr({
        type: "button",
        "data-bs-dismiss": "modal",
        "aria-label": "Close"
    });

    // Adicionando o título e o botão de fechar ao cabeçalho
    headerDiv.append(titleH1, closeButton);

    // Criando o corpo do modal
    const bodyDiv = $("<div>").addClass("modal-body bg-info-subtle");

    // Criando a linha para os produtos
    const rowDiv = $("<div>").addClass("row g-2 d-flex");

    // Iterando sobre os produtos para criar os elementos
    $.each(pizzasMedia, function (index, pizza) {
        // Criando a coluna para cada produto
        const productBox = $("<div>").addClass("product-box");

        const productBoxImg = $("<div>").addClass("product-box-img");
        const img = $("<img>").attr({
            src: pizza.imgURL,
            alt: pizza.name
        });
        productBoxImg.append(img);

        const productBoxContent = $("<div>").addClass("product-box-content");

        // Criando o container para o texto do produto
        const textContainerDiv = $("<div>").addClass("text-product-container");

        // Criando o título do produto
        const tituloH2 = $("<h2>").text(pizza.name);

        // Criando o preço do produto
        const precoP = $("<p>").text(moeda + pizza.price);

        // Adicionando o título e o preço ao container de texto do produto
        textContainerDiv.append(tituloH2, precoP);

        // Criando o container para o botão do produto
        const btnContainerDiv = $("<div>").addClass("btn-product-container");

        // Criando o botão "Adicionar ao carrinho" para o produto
        const btnAdicionar = $("<button>").addClass("btn btn-primary btn-pizza").text("Adicionar ao carrinho");

        // Adicionando o evento de clique ao botão
        btnAdicionar.on("click", function () {
            let data = {
                id: pizza.id,
                item: {
                    name: pizza.name + " media",
                    imgURL: pizza.imgURL
                },
                value: pizza.price
            };
            addToCart(data);
        });

        // Adicionando o botão ao container do botão do produto
        btnContainerDiv.append(btnAdicionar);

        // Adicionando o container de texto e o container de botão à coluna do produto
        productBoxContent.append(textContainerDiv, btnContainerDiv);

        productBox.append(productBoxImg, productBoxContent);

        // Adicionando a coluna à linha de produtos
        rowDiv.append(productBox);
    });

    // Adicionando o container à linha de produtos
    bodyDiv.append(rowDiv);

    // Criando o rodapé do modal
    const footerDiv = $("<div>").addClass("modal-footer");

    // Criando o botão para fechar o modal
    const closeButtonFooter = $("<button>").addClass("btn btn-primary").attr({
        type: "button",
        "data-bs-dismiss": "modal"
    }).text("Close");

    // Adicionando a label e o botão ao rodapé do modal
    footerDiv.append(closeButtonFooter);

    // Adicionando o cabeçalho, corpo e rodapé ao conteúdo do modal
    contentDiv.append(headerDiv, bodyDiv, footerDiv);

    // Adicionando o conteúdo ao dialog
    dialogDiv.append(contentDiv);

    // Adicionando o dialog ao modal
    modalDiv.append(dialogDiv);

    // Adicionando o modal ao body
    $("body").append(modalDiv);
}

function criarPizzaMediaModal() {
    // Criando o elemento div para o modal
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal', 'fade');
    modalDiv.id = 'pizzasMediaModal';
    modalDiv.setAttribute('tabindex', '-1');
    modalDiv.setAttribute('aria-labelledby', 'pizzaModalLabel');
    modalDiv.setAttribute('aria-hidden', 'true');

    // Criando o elemento div para o dialog
    const dialogDiv = document.createElement('div');
    dialogDiv.classList.add('modal-dialog');

    // Criando o elemento div para o conteúdo do modal
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('modal-content');

    // Criando o elemento div para o cabeçalho do modal
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('modal-header');

    // Criando o título do modal
    const titleH1 = document.createElement('h1');
    titleH1.classList.add('modal-title', 'fs-5');
    titleH1.id = 'pizzaModalLabel';
    titleH1.textContent = 'Pizzas de tamanho médio';

    // Criando o botão para fechar o modal
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.classList.add('btn-close');
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');

    // Adicionando o título e o botão de fechar ao cabeçalho
    headerDiv.appendChild(titleH1);
    headerDiv.appendChild(closeButton);

    // Criando o corpo do modal
    const bodyDiv = document.createElement('div');
    bodyDiv.classList.add('modal-body', 'bg-info-subtle');



    // Criando a linha para os produtos
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row', 'g-2', "d-flex");


    // Iterando sobre os produtos para criar os elementos
    for (let i = 0; i < pizzasMedia.length; i++) {
        // Criando a coluna para cada produto
        const productBox = document.createElement('div');
        productBox.classList.add('product-box');

        const productBoxImg = document.createElement("div");
        productBox.classList.add("product-box-img");

        const img = document.createElement("img");
        img.src = pizzasMedia[i].imgURL;
        img.alt = pizzasMedia[i].name;


        productBoxImg.appendChild(img);

        const productBoxContent = document.createElement("div");
        productBoxContent.classList.add("product-box-content");

        // Criando o container para o texto do produto
        const textContainerDiv = document.createElement('div');
        textContainerDiv.classList.add('text-product-container');

        // Criando o título do produto
        const tituloH2 = document.createElement('h2');
        tituloH2.textContent = pizzasMedia[i].name;

        // Criando o preço do produto
        const precoP = document.createElement('p');
        precoP.textContent = moeda + pizzasMedia[i].price;

        // Adicionando o título e o preço ao container de texto do produto
        textContainerDiv.appendChild(tituloH2);
        textContainerDiv.appendChild(precoP);

        // Criando o container para o botão do produto
        const btnContainerDiv = document.createElement('div');
        btnContainerDiv.classList.add('btn-product-container');

        // Criando o botão "Adicionar ao carrinho" para o produto
        const btnAdicionar = document.createElement('button');
        btnAdicionar.classList.add('btn', 'btn-primary', 'btn-pizza');
        btnAdicionar.textContent = 'Adicionar ao carrinho';

        // Adicionando o evento de clique ao botão
        btnAdicionar.addEventListener('click', () => {
            // Aqui você pode adicionar a lógica para adicionar o produto ao carrinho
            // Aqui você pode adicionar a lógica para adicionar o produto ao carrinho
            let data = {
                id: pizzasMedia[i].id,
                item: {
                    name: pizzasMedia[i].name + " media",
                    imgURL: pizzasMedia[i].imgURL
                },
                value: pizzasMedia[i].price
            };
            addToCart(data);
        });

        // Adicionando o botão ao container do botão do produto
        btnContainerDiv.appendChild(btnAdicionar);

        // Adicionando o container de texto e o container de botão à coluna do produto
        productBoxContent.appendChild(textContainerDiv);
        productBoxContent.appendChild(btnContainerDiv);

        productBox.appendChild(productBoxImg)
        productBox.appendChild(productBoxContent)

        // Adicionando a coluna à linha de produtos
        rowDiv.appendChild(productBox);
    }


    // Adicionando o container ao corpo do modal
    bodyDiv.appendChild(rowDiv);

    // Criando o rodapé do modal
    const footerDiv = document.createElement('div');
    footerDiv.classList.add('modal-footer');


    // Criando o botão para fechar o modal
    const closeButtonFooter = document.createElement('button');
    closeButtonFooter.type = 'button';
    closeButtonFooter.classList.add('btn', 'btn-primary');
    closeButtonFooter.setAttribute('data-bs-dismiss', 'modal');
    closeButtonFooter.textContent = 'Close';

    // Adicionando a label e o botão ao rodapé do modal
    footerDiv.appendChild(closeButtonFooter);

    // Adicionando o cabeçalho, corpo e rodapé ao conteúdo do modal
    contentDiv.appendChild(headerDiv);
    contentDiv.appendChild(bodyDiv);
    contentDiv.appendChild(footerDiv);

    // Adicionando o conteúdo ao dialog
    dialogDiv.appendChild(contentDiv);

    // Adicionando o dialog ao modal
    modalDiv.appendChild(dialogDiv);

    // Adicionando o modal ao body
    document.body.appendChild(modalDiv);
}

function criarPizzaGrandeModal() {
    // Criando o elemento div para o modal
    const modalDiv = $("<div>").addClass("modal fade").attr({
        id: "pizzasGrandeModal",
        tabindex: "-1",
        "aria-labelledby": "pizzaModalLabel",
        "aria-hidden": "true"
    });

    // Criando o elemento div para o dialog
    const dialogDiv = $("<div>").addClass("modal-dialog");

    // Criando o elemento div para o conteúdo do modal
    const contentDiv = $("<div>").addClass("modal-content");

    // Criando o elemento div para o cabeçalho do modal
    const headerDiv = $("<div>").addClass("modal-header");

    // Criando o título do modal
    const titleH1 = $("<h1>").addClass("modal-title fs-5").attr("id", "pizzaModalLabel").text("Pizzas de tamanho grande");

    // Criando o botão para fechar o modal
    const closeButton = $("<button>").addClass("btn-close").attr({
        type: "button",
        "data-bs-dismiss": "modal",
        "aria-label": "Close"
    });

    // Adicionando o título e o botão de fechar ao cabeçalho
    headerDiv.append(titleH1, closeButton);

    // Criando o corpo do modal
    const bodyDiv = $("<div>").addClass("modal-body bg-info-subtle");

    // Criando a linha para os produtos
    const rowDiv = $("<div>").addClass("row g-2 d-flex");

    // Iterando sobre os produtos para criar os elementos
    $.each(pizzasGrande, function (index, pizza) {
        // Criando a coluna para cada produto
        const productBox = $("<div>").addClass("product-box");

        const productBoxImg = $("<div>").addClass("product-box-img");
        const img = $("<img>").attr({
            src: pizza.imgURL,
            alt: pizza.name
        });
        productBoxImg.append(img);

        const productBoxContent = $("<div>").addClass("product-box-content");

        // Criando o container para o texto do produto
        const textContainerDiv = $("<div>").addClass("text-product-container");

        // Criando o título do produto
        const tituloH2 = $("<h2>").text(pizza.name);

        // Criando o preço do produto
        const precoP = $("<p>").text(moeda + pizza.price);

        // Adicionando o título e o preço ao container de texto do produto
        textContainerDiv.append(tituloH2, precoP);

        // Criando o container para o botão do produto
        const btnContainerDiv = $("<div>").addClass("btn-product-container");

        // Criando o botão "Adicionar ao carrinho" para o produto
        const btnAdicionar = $("<button>").addClass("btn btn-primary btn-pizza").text("Adicionar ao carrinho");

        // Adicionando o evento de clique ao botão
        btnAdicionar.on("click", function () {
            let data = {
                id: pizza.id,
                item: {
                    name: pizza.name + " grande",
                    imgURL: pizza.imgURL
                },
                value: pizza.price
            };
            addToCart(data);
        });

        // Adicionando o botão ao container do botão do produto
        btnContainerDiv.append(btnAdicionar);

        // Adicionando o container de texto e o container de botão à coluna do produto
        productBoxContent.append(textContainerDiv, btnContainerDiv);

        productBox.append(productBoxImg, productBoxContent);

        // Adicionando a coluna à linha de produtos
        rowDiv.append(productBox);
    });

    // Adicionando o container à linha de produtos
    bodyDiv.append(rowDiv);

    // Criando o rodapé do modal
    const footerDiv = $("<div>").addClass("modal-footer");

    // Criando o botão para fechar o modal
    const closeButtonFooter = $("<button>").addClass("btn btn-primary").attr({
        type: "button",
        "data-bs-dismiss": "modal"
    }).text("Close");

    // Adicionando a label e o botão ao rodapé do modal
    footerDiv.append(closeButtonFooter);

    // Adicionando o cabeçalho, corpo e rodapé ao conteúdo do modal
    contentDiv.append(headerDiv, bodyDiv, footerDiv);

    // Adicionando o conteúdo ao dialog
    dialogDiv.append(contentDiv);

    // Adicionando o dialog ao modal
    modalDiv.append(dialogDiv);

    // Adicionando o modal ao body
    $("body").append(modalDiv);
}
