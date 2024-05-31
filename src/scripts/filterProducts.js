$(document).ready(function () {
    const filterAllBtn = $("#filter-all");
    const filterOnlyPizzaBtn = $("#filter-only-pizzas");
    const filterOnlyHamburgersBtn = $("#filter-only-hamburgers");
    const filterOnlyHotdogsBtn = $("#filter-only-hotdogs");
    const filterOnlyBebidasBtn = $("#filter-only-bebidas");
    const filterOnlyAcompanhamentosBtn = $("#filter-only-acompanhamentos");

    const listProduct = $("#list-product");

    function filterAllInitial() {
        listProduct.empty();
        addPizzaOnListProduct();
        addHamburgerOnListProduct();
        addHotdogOnListProduct();
        addBebidasOnListProduct();
        addAcompanhamentosOnListProduct();
    }

    filterAllInitial();

    filterAllBtn.on("click", filterAllInitial);

    filterOnlyPizzaBtn.on("click", function () {
        listProduct.empty();
        addPizzaOnListProduct();
    });

    filterOnlyHamburgersBtn.on("click", function () {
        listProduct.empty();
        addHamburgerOnListProduct();
    });

    filterOnlyHotdogsBtn.on("click", function () {
        listProduct.empty();
        addHotdogOnListProduct();
    });

    filterOnlyBebidasBtn.on("click", function () {
        listProduct.empty();
        addBebidasOnListProduct();
    });

    filterOnlyAcompanhamentosBtn.on("click", function () {
        listProduct.empty();
        addAcompanhamentosOnListProduct();
    });
});
