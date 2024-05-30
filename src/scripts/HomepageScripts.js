const carrinhoBody = document.getElementById("carrinho-body");
const valueTotal = document.getElementById("carrinho-valor-total");
const moeda = "R$";


let cartState = []

const finalizarPedido = document.getElementById("carrinho-finalizar-pedido-button");
finalizarPedido.addEventListener("click", () => {
    // carrinhoBody.outerHTML = "<tbody id='carrinho-body'></tbody>";
    carrinhoBody.innerHTML = "";
    valueTotal.textContent = "0.0";
    // console.log(carrinhoBody.outerHTML);
    cartState = [];
})


function addToCart(obj) {
    
    if (verificaSeEstaNoCarrinho(obj)) {
        let quantityText = document.getElementById(obj.id+"quantityText")
        console.log(obj.id)
        console.log(quantityText)
        quantityText.textContent = Number(quantityText.textContent) + 1;
        valueTotal.textContent = (parseFloat(valueTotal.textContent) + parseFloat(obj.value)).toFixed(2);
    } else {
        const tr = document.createElement("tr");
        const aboutItem = document.createElement("td");
        const img = document.createElement("img");
        const nameItem = document.createElement("p");
        const value = document.createElement("td");
        const quantity = document.createElement("td");
        const buttonRemoveOne = document.createElement("button");
        const textQuantityContainer = document.createElement("div");
        const textQuantity = document.createElement("p");

    
        if (valueTotal.textContent == "0.0") {
            valueTotal.textContent = parseFloat(obj.value).toFixed(2);
        } else {
            valueTotal.textContent = (parseFloat(valueTotal.textContent) + parseFloat(obj.value)).toFixed(2);
        }
    
        tr.id = obj.id + "tr";
    
        textQuantity.id = obj.id + "quantityText";
    
        nameItem.textContent = obj.item.name;
        nameItem.style.fontWeight = "bold";
        textQuantityContainer.style.marginLEft = "auto";
        img.src = obj.item.imgURL;
        img.alt = obj.item.name;
        img.width = 75;
        img.height = 50;
        img.style.borderRadius = "0.25rem";
    
        buttonRemoveOne.classList.add("btn", "btn-primary")
    
        buttonRemoveOne.textContent = "Remover um" 
        
        textQuantityContainer.appendChild(textQuantity)

        aboutItem.appendChild(nameItem);
        aboutItem.appendChild(img);
    
        textQuantity.textContent = 1;
    
        quantity.appendChild(textQuantity)
        quantity.appendChild(buttonRemoveOne)
    
        buttonRemoveOne.addEventListener("click", () => {
            valueTotal.textContent = (parseFloat(valueTotal.textContent) - parseFloat(obj.value)).toFixed(2);
            if (Number(textQuantity.textContent) > 1) {
                textQuantity.textContent = Number(textQuantity.textContent) -1;
               
            } else {
                tr.outerHTML = "";
                cartState.forEach(item => {
                    if (item.id = obj.id) {
                        cartState.pop(item);
                    }
                })
            }
        })
        value.textContent = obj.value;
        tr.appendChild(aboutItem);
        tr.appendChild(value);
        tr.appendChild(quantity);
        carrinhoBody.appendChild(tr);
        cartState.push(obj);

    }

}





function criarPizzaPequenaModal() {
    // Criando o elemento div para o modal
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal', 'fade');
    modalDiv.id = 'pizzasPequenaModal';
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
    titleH1.textContent = 'Pizzas de tamanho pequeno';

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
    for (let i = 0; i < pizzasPequena.length; i++) {
          // Criando a coluna para cada produto
          const productBox = document.createElement('div');
          productBox.classList.add('product-box');

          const productBoxImg = document.createElement("div");
          productBox.classList.add("product-box-img");

          const img = document.createElement("img");
          img.src = pizzasPequena[i].imgURL;
          img.alt = pizzasPequena[i].name;


          productBoxImg.appendChild(img);

          const productBoxContent = document.createElement("div");
          productBoxContent.classList.add("product-box-content");
  
          // Criando o container para o texto do produto
          const textContainerDiv = document.createElement('div');
          textContainerDiv.classList.add('text-product-container');
  
          // Criando o título do produto
          const tituloH2 = document.createElement('h2');
          tituloH2.textContent = pizzasPequena[i].name;
  
          // Criando o preço do produto
          const precoP = document.createElement('p');
          precoP.textContent = moeda + pizzasPequena[i].price;
  
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
                id: pizzasPequena[i].id,
                item: {
                    name: pizzasPequena[i].name + " pequena",
                    imgURL: pizzasPequena[i].imgURL
                },
                value: pizzasPequena[i].price
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
   const modalDiv = document.createElement('div');
   modalDiv.classList.add('modal', 'fade');
   modalDiv.id = 'pizzasGrandeModal';
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
   titleH1.textContent = 'Pizzas de tamanho grande';

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
   for (let i = 0; i < pizzasGrande.length; i++) {
         // Criando a coluna para cada produto
         const productBox = document.createElement('div');
         productBox.classList.add('product-box');

         const productBoxImg = document.createElement("div");
         productBox.classList.add("product-box-img");

         const img = document.createElement("img");
         img.src = pizzasGrande[i].imgURL;
         img.alt = pizzasGrande[i].name;


         productBoxImg.appendChild(img);

         const productBoxContent = document.createElement("div");
         productBoxContent.classList.add("product-box-content");
 
         // Criando o container para o texto do produto
         const textContainerDiv = document.createElement('div');
         textContainerDiv.classList.add('text-product-container');
 
         // Criando o título do produto
         const tituloH2 = document.createElement('h2');
         tituloH2.textContent = pizzasGrande[i].name;
 
         // Criando o preço do produto
         const precoP = document.createElement('p');
         precoP.textContent = moeda + pizzasGrande[i].price;
 
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
            let data = {
                id: pizzasGrande[i].id,
                item: {
                    name: pizzasGrande[i].name + " grande",
                    imgURL: pizzasGrande[i].imgURL
                },
                value: pizzasGrande[i].price
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

   // Criando a label para o valor total

   // Criando o botão para fechar o modal
   const closeButtonFooter = document.createElement('button');
   closeButtonFooter.type = 'button';
   closeButtonFooter.classList.add('btn', 'btn-primary');
   closeButtonFooter.setAttribute('data-bs-dismiss', 'modal');
   closeButtonFooter.textContent = 'Close';

   // Adicionando a label e o botão
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

// Chamando a função para criar o modal de pizza
criarPizzaPequenaModal();
criarPizzaMediaModal();
criarPizzaGrandeModal();

function addAcompanhamentosOnListProduct() {
    let text_div = document.createElement("div");
    text_div.classList.add("mt-4");
    text_div.classList.add("mb-4");
    let text = document.createElement("h1");
    text.classList.add("text-center");
    text.textContent = "ACOMPANHAMENTOS";
    text_div.appendChild(text);


    let listProduct = document.getElementById("list-product");
    listProduct.appendChild(text_div);
    let productCardapioContainer = document.createElement("div");
    productCardapioContainer.classList.add("product-cardapio-container");
    for (let i = 0; i < acompanhamentos.length; i++) {
        //button
        let button = document.createElement("button");
        let btnProductContainer = document.createElement("div");
        button.textContent = "Adicionar ao carrinho";
        button.classList.add("btn");
        button.classList.add("btn-primary");

        // addtocart func
        button.addEventListener("click", () => {
            let data = {
                id: acompanhamentos[i].id,
                item: {
                    name: acompanhamentos[i].name,
                    imgURL: acompanhamentos[i].imgURL
                },
                value: acompanhamentos[i].price
            };
            addToCart(data);
            
        });
    
        btnProductContainer.classList.add("btn-product-container");
        btnProductContainer.appendChild(button);

        //text
        let textProductContainer = document.createElement("div");
        textProductContainer.classList.add("text-product-container");
        let h2 = document.createElement("h2");
        h2.textContent = acompanhamentos[i].name;
        let p = document.createElement("p");
        p.textContent = moeda + acompanhamentos[i].price;
        textProductContainer.append(h2, p);


        //product box content
        let productBoxContent = document.createElement("div");
        productBoxContent.classList.add("product-box-content");
        productBoxContent.append(textProductContainer, btnProductContainer);


        //product box img
        let productBoxImg = document.createElement("div");
        productBoxImg.classList.add("product-box-img");
        let img = document.createElement("img");
        img.src = acompanhamentos[i].imgURL;
        img.alt = acompanhamentos[i].name;
        productBoxImg.appendChild(img);


        //product box
        let productBox = document.createElement("div");
        productBox.classList.add("product-box");
        productBox.append(productBoxImg, productBoxContent);

        productCardapioContainer.append(productBox);
    }
    listProduct.appendChild(productCardapioContainer);
}


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


function addHotdogOnListProduct() {
    let text_div = document.createElement("div")
    text_div.classList.add("mt-4");
    text_div.classList.add("mb-4");
    let text = document.createElement("h1");
    text.classList.add("text-center");
    text.textContent = "HOTDOGS";
    text_div.appendChild(text);


    let listProduct = document.getElementById("list-product");
    listProduct.appendChild(text_div);
    let productCardapioContainer = document.createElement("div");
    productCardapioContainer.classList.add("product-cardapio-container")
    for (let i = 0; i < hotdogs.length; i++) {
        //button
        let button = document.createElement("button");
        let btnProductContainer = document.createElement("div");
        button.textContent = "Adicionar ao carrinho";
        button.classList.add("btn")
        button.classList.add("btn-primary")

        // addtocart func
        button.addEventListener("click", () => {
            let data = {
                id: hotdogs[i].id,
                item: {
                    name: hotdogs[i].name,
                    imgURL: hotdogs[i].imgURL
                },
                value: hotdogs[i].price
            };
            addToCart(data);
            
        });

        btnProductContainer.classList.add("btn-product-container")
        btnProductContainer.appendChild(button)

        //text
        let textProductContainer = document.createElement("div");
        textProductContainer.classList.add("text-product-container")
        let h2 = document.createElement("h2");
        h2.textContent = hotdogs[i].name;
        let p = document.createElement("p");
        p.textContent = moeda + hotdogs[i].price;
        textProductContainer.append(h2, p);


        //product box content
        let productBoxContent = document.createElement("div");
        productBoxContent.classList.add("product-box-content")
        productBoxContent.append(textProductContainer, btnProductContainer)


        //product box img
        let productBoxImg = document.createElement("div");
        productBoxImg.classList.add("product-box-img")
        let img = document.createElement("img");
        img.src = hotdogs[i].imgURL;
        img.alt = hotdogs[i].name;
        productBoxImg.appendChild(img);


        //product box
        let productBox = document.createElement("div");
        productBox.classList.add("product-box")
        productBox.append(productBoxImg, productBoxContent);

        productCardapioContainer.append(productBox)
    }
    listProduct.appendChild(productCardapioContainer);
}


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


addHamburgerOnListProduct();
addHotdogOnListProduct();
addBebidasOnListProduct();
addAcompanhamentosOnListProduct();



function verificaSeEstaNoCarrinho(obj) {
    for (let i = 0; i < cartState.length; i++) {
        if (cartState[i].id === obj.id) {
            return true;   
        }                
    }
    return false;
}