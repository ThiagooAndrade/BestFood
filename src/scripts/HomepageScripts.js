document.addEventListener("DOMContentLoaded", function () {
    const icon = document.querySelector(".icon-search");
    const searchContainer = document.getElementById("header-search-container");
    const searchInput = document.getElementById("search");
    const

        icon.addEventListener("click", function () {
            if (searchContainer.classList.contains("expand")) {
                searchContainer.classList.remove("expand")
                searchContainer.classList.add("despand")
                searchInput.classList.remove("expand")
                searchInput.classList.add("despand")
                searchContainer.style.visibility = "hidden";
                searchInput.style.visibility = "hidden";
                searchInput.value = ""; // Limpar o campo de busca
            } else {
                searchContainer.classList.remove("despand")
                searchContainer.classList.add("expand")
                searchInput.classList.remove("despand")
                searchInput.classList.add("expand")
                searchContainer.focus();
                searchContainer.style.visibility = "visible";
                searchInput.style.visibility = "visible";
            }
        });
});



