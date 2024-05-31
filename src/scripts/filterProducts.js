const filterAllBtn = document.getElementById("filter-all")
const filterOnlyPizzaBtn = document.getElementById("filter-only-pizzas")
const filterOnlyHamburgersBtn = document.getElementById("filter-only-hamburgers")
const filterOnlyHotdogsBtn = document.getElementById("filter-only-hotdogs")
const filterOnlyBebidasBtn = document.getElementById("filter-only-bebidas")
const filterOnlyAcompanhamentosBtn = document.getElementById("filter-only-acompanhamentos")

var listProduct = document.getElementById("list-product")

function filterAllInitial() {
    listProduct.innerText = "";
    addPizzaOnListProduct();
    addHamburgerOnListProduct();
    addHotdogOnListProduct();
    addBebidasOnListProduct();
    addAcompanhamentosOnListProduct();
}

filterAllInitial();

filterAllBtn.addEventListener("click", filterAllInitial);

filterOnlyPizzaBtn.addEventListener("click", () => {
    listProduct.innerText = "";
    addPizzaOnListProduct();
})
filterOnlyHamburgersBtn.addEventListener("click", () => {
    listProduct.innerText = "";
    addHamburgerOnListProduct();
})
filterOnlyHotdogsBtn.addEventListener("click", () => {
    listProduct.innerText = "";
    addHotdogOnListProduct();
})
filterOnlyBebidasBtn.addEventListener("click", () => {
    listProduct.innerText = "";
    addBebidasOnListProduct();
})
filterOnlyAcompanhamentosBtn.addEventListener("click", () => {
    listProduct.innerText = "";
    addAcompanhamentosOnListProduct();
})



