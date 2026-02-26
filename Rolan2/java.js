const productCards = document.querySelectorAll(".product-card");
const selectionnes = document.querySelectorAll(".selectionné");
console.log(selectionnes);

productCards.forEach((card, index) => {
  const ajouterBtn = card.querySelector(".add-to-cart");

  ajouterBtn.addEventListener("click", () => {
    if (selectionnes[index]) {
      selectionnes[index].classList.toggle("active");
    }
  });
});

selectionnes.forEach((selectionne) => {
  const plus = selectionne.querySelector(".plus");
  const moins = selectionne.querySelector(".moins");
  const quantite = selectionne.querySelector(".nombre");
  const priceEl = selectionne.querySelector(".new");
  const totalEl = selectionne.querySelector(".totalEl");

  function calculer(quantite, prix) {
    return quantite * prix;
  }

  function afficherTotal() {
    const price = parseFloat(priceEl.textContent);
    const qtite = Number(quantite.textContent);

    totalEl.textContent = calculer(price, qtite) + "$";
  }

  plus.addEventListener("click", () => {
    quantite.textContent = Number(quantite.textContent) + 1;
    afficherTotal();
  });

  moins.addEventListener("click", () => {
    const value = Number(quantite.textContent);
    if (value > 0) {
      quantite.textContent = value - 1;
      afficherTotal();
    }
  });
  afficherTotal();
});
