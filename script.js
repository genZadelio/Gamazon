const searchInput = document.querySelector("#searchInput");
const categorySelect = document.querySelector(".search-select");
const cards = [...document.querySelectorAll(".box")];
const resultCount = document.querySelector("#resultCount");
const resetSearch = document.querySelector("#resetSearch");

function filterSamples() {
    const query = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value.toLowerCase();
    let visible = 0;

    cards.forEach((card) => {
        const title = card.querySelector("h2").textContent.trim().toLowerCase();
        const cardCategory = card.dataset.category.toLowerCase();
        const matchesText = !query || title.includes(query);
        const matchesCategory = category === "all" || cardCategory === category;
        card.hidden = !(matchesText && matchesCategory);

        if (!card.hidden) visible += 1;
    });

    resultCount.textContent = `${visible} sample ${visible === 1 ? "card" : "cards"} shown`;
}

searchInput.addEventListener("input", filterSamples);
categorySelect.addEventListener("change", filterSamples);
resetSearch.addEventListener("click", () => {
    searchInput.value = "";
    categorySelect.value = "All";
    filterSamples();
    searchInput.focus();
});
