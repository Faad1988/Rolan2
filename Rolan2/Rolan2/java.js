const productCards = document.querySelectorAll(".product-card");
const selectionnes = document.querySelectorAll(".selectionné");
const inscription = document.querySelector(".signup-btn");
const formInscription = document.querySelector(".form-inscription");
const closeForm = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-list");
let timeoutId;

hamburger.addEventListener("click", () => {
  nav.classList.add("active");
});

nav.addEventListener("mouseleave", () => {
  timeoutId = setTimeout(() => {
    nav.classList.remove("active");
  }, 900);
});
nav.addEventListener("mouseenter", () => {
  clearTimeout(timeoutId);
});

inscription.addEventListener("click", () => {
  formInscription.classList.add("active");
});

closeForm.addEventListener("click", () => {
  formInscription.classList.remove("active");
});

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

    totalEl.textContent = calculer(price, qtite).toFixed(2) + "$";
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

function getPanier() {
  const panierTexte = localStorage.getItem("rolandoPanier");

  if (panierTexte === null) {
    return [];
  } else {
    return JSON.parse(panierTexte);
  }
}

function sauvegarderPanier(panier) {
  const panierTexte = JSON.stringify(panier);
  localStorage.setItem("rolandoPanier", panierTexte);
}

function updateCompteur() {
  const panier = getPanier();
  const compteur = document.querySelector(".cart-count");

  let total = 0;
  for (let i = 0; i < panier.length; i++) {
    total = total + panier[i].quantite;
  }

  compteur.textContent = total;
  console.log(" Panier actuel :", panier);
  console.log(" Total articles :", total);
}

updateCompteur();

getPanier();

const slidesContainer = document.querySelector(".slides");
if (slidesContainer) {
  // Récupère tous les slides actuels
  const slides = Array.from(slidesContainer.children);
  // Clone chaque slide et ajoute le clone à la fin du conteneur
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true); // true = clone profond (avec tout son contenu)
    clone.querySelectorAll("[id]").forEach((el) => el.removeAttribute("id"));
    slidesContainer.appendChild(clone);
  });
}
