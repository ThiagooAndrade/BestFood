const carrinhoBody = document.querySelector(".carrinho-body");
const valueTotal = document.querySelector(".carrinho-valor-total");
const moeda = "R$";

let cartState = [];

const finalizarPedido = document.querySelector(
    ".carrinho-finalizar-pedido-button"
);

finalizarPedido.addEventListener("click", () => {
    carrinhoBody.innerHTML = "";
    valueTotal.textContent = "0.00";
    cartState = [];
});

function addToCart(obj) {
    if (verificaSeEstaNoCarrinho(obj)) {
        let quantityText = document.querySelector(`.quantityText${obj.id}`);

        quantityText.textContent = Number(quantityText.textContent) + 1;

        valueTotal.textContent = (
            parseFloat(valueTotal.textContent) + parseFloat(obj.value)
        ).toFixed(2);
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

        if (valueTotal.textContent == "0.00") {
            valueTotal.textContent = parseFloat(obj.value).toFixed(2);
        } else {
            valueTotal.textContent = (
                parseFloat(valueTotal.textContent) + parseFloat(obj.value)
            ).toFixed(2);
        }

        tr.id = obj.id + "tr";

        textQuantity.classList.add(`quantityText${obj.id}`);

        nameItem.textContent = obj.item.name;
        nameItem.style.fontWeight = "bold";
        textQuantityContainer.style.marginLEft = "auto";
        img.src = obj.item.imgURL;
        img.alt = obj.item.name;
        img.width = 75;
        img.height = 50;
        img.style.borderRadius = "0.25rem";

        buttonRemoveOne.classList.add("btn", "btn-primary");

        buttonRemoveOne.textContent = "Remover um";

        textQuantityContainer.appendChild(textQuantity);

        aboutItem.appendChild(nameItem);
        aboutItem.appendChild(img);

        textQuantity.textContent = 1;

        quantity.appendChild(textQuantity);
        quantity.appendChild(buttonRemoveOne);

        value.textContent = obj.value;

        buttonRemoveOne.addEventListener("click", () => {
            valueTotal.textContent = (
                parseFloat(valueTotal.textContent) - parseFloat(obj.value)
            ).toFixed(2);

            if (Number(textQuantity.textContent) > 1) {
                textQuantity.textContent = Number(textQuantity.textContent) - 1;
            } else {
                tr.outerHTML = "";
                cartState.forEach((item) => {
                    if ((item.id = obj.id)) {
                        cartState.pop(item);
                    }
                });
            }
        });

        tr.appendChild(aboutItem);
        tr.appendChild(value);
        tr.appendChild(quantity);

        carrinhoBody.appendChild(tr);

        cartState.push(obj);
    }
}





function verificaSeEstaNoCarrinho(obj) {
    for (let i = 0; i < cartState.length; i++) {
        if (cartState[i].id === obj.id) {
            return true;
        }
    }
    return false;
}
