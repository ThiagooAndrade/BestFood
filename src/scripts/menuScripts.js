const carrinhoBody = $(".carrinho-body");
const valueTotal = $(".carrinho-valor-total");
const moeda = "R$";
let cartState = [];
const cartLengthText = $("#carrinho-quantity-text");

const finalizarPedido = $(".carrinho-finalizar-pedido-button");

finalizarPedido.on("click", function () {
    carrinhoBody.empty();
    valueTotal.text("0.00");
    cartState = [];
    cartLengthText.text(" ")
    cartLengthText.css("visibility", "hidden")
});


function addToCart(obj) {
    if (verificaSeEstaNoCarrinho(obj)) {
        let quantityText = $(`.quantityText${obj.id}`);
        quantityText.text(parseInt(quantityText.text()) + 1);
        cartLengthText.text(parseInt(cartLengthText.text()) + 1)
        valueTotal.text(
            (parseFloat(valueTotal.text()) + parseFloat(obj.value)).toFixed(2)
        );

    } else {
        cartLengthText.css("visibility", "visible")
        if (cartLengthText.text() == " ") {
            cartLengthText.text(1)
        } else {
            cartLengthText.text(Number(cartLengthText.text()) + 1)
        }
        console.log("inicial" + cartLengthText.text())

        const tr = $("<tr>");
        const aboutItem = $("<td>");
        const img = $("<img>");
        const nameItem = $("<p>");
        const value = $("<td>");
        const quantity = $("<td>");
        const buttonRemoveOne = $("<button>");
        const textQuantityContainer = $("<div>");
        const textQuantity = $("<p>");

        if (valueTotal.text() == "0.00") {
            valueTotal.text(parseFloat(obj.value).toFixed(2));
        } else {
            valueTotal.text(
                (parseFloat(valueTotal.text()) + parseFloat(obj.value)).toFixed(2)
            );
        }

        tr.attr("id", obj.id + "tr");

        textQuantity.addClass(`quantityText${obj.id}`);

        nameItem.text(obj.item.name);
        nameItem.css("font-weight", "bold");
        // textQuantityContainer.css("margin-left", "auto");
        img.attr("src", obj.item.imgURL)
            .attr("alt", obj.item.name)
            .attr("width", 75)
            .attr("height", 50)
            .css("border-radius", "0.25rem");

        buttonRemoveOne.addClass("btn btn-primary")
            .text("Remover um")
            .on("click", () => {
                valueTotal.text(
                    (parseFloat(valueTotal.text()) - parseFloat(obj.value)).toFixed(2)
                );
                let currentQuantity = parseInt(textQuantity.text());
                if (currentQuantity > 1) {
                    textQuantity.text(currentQuantity - 1);
                    cartLengthText.text(Number(cartLengthText.text()) - 1)
                } else {
                    tr.remove();
                    cartState = cartState.filter(item => item.id !== obj.id);
                    if (cartLengthText.text() == "1") {
                        cartLengthText.text(" ");
                        cartLengthText.css("visibility", "hidden")
                    } else {
                        cartLengthText.text(Number(cartLengthText.text()) - 1)
                    }

                }
            });

        textQuantity.text(1);

        quantity.append(textQuantity).append(buttonRemoveOne);

        value.text("R$ " + obj.value);

        aboutItem.append(nameItem).append(img)

        tr.append(aboutItem)
            .append(value)
            .append(quantity);

        carrinhoBody.append(tr);

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
