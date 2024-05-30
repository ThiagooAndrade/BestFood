const carrinhoBodyDesktop = document.querySelector(".carrinho-body-desktop");
const valueTotalDesktop = document.querySelector(".carrinho-valor-total-desktop");
const moeda = "R$";


let cartState = []

const finalizarPedidoDesktop = document.querySelector(".carrinho-finalizar-pedido-button-desktop");
finalizarPedidoDesktop.addEventListener("click", () => {
    // carrinhoBody.outerHTML = "<tbody id='carrinho-body'></tbody>";
    carrinhoBodyDesktop.innerHTML = "";
    valueTotalDesktop.textContent = "0.00";
    // console.log(carrinhoBody.outerHTML);
    cartState = [];
})


function addToCart(obj) {
    if (verificaSeEstaNoCarrinho(obj)) {
        let quantityText = document.querySelector(`.quantityText${obj.id}`)
        console.log(obj.id)
        console.log(quantityText)
        quantityText.textContent = Number(quantityText.textContent) + 1;
        valueTotalDesktop.textContent = (parseFloat(valueTotalDesktop.textContent) + parseFloat(obj.value)).toFixed(2);
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

    
        if (valueTotalDesktop.textContent == "0.00") {
            valueTotalDesktop.textContent = parseFloat(obj.value).toFixed(2);
        } else {
            valueTotalDesktop.textContent = (parseFloat(valueTotalDesktop.textContent) + parseFloat(obj.value)).toFixed(2);
        }
    
        tr.id = obj.id + "tr";
    
        textQuantity.classList.add(`quantityText${obj.id}`);
    
        console.log(textQuantity)

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
            valueTotalDesktop.textContent = (parseFloat(valueTotalDesktop.textContent) - parseFloat(obj.value)).toFixed(2);
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
        carrinhoBodyDesktop.appendChild(tr);
        cartState.push(obj);

    }

}

// Chamando a função para criar o modal de pizza
criarPizzaPequenaModal();
criarPizzaMediaModal();
criarPizzaGrandeModal();
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