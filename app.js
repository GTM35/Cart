let controlUp = document.querySelectorAll(".btn-qtd-up");
let controlDown = document.querySelectorAll(".btn-qtd-down");
let Items = document.querySelector(".items");

let emptyCartElement = document.createElement("h4");
let textEmptyCart = document.createTextNode("Carrinho vazio");

controlUp.forEach((el) => {
  el.addEventListener("click", () => {
    let qtdItem = parseInt(el.nextElementSibling.textContent.trim());
    qtdItem++;
    el.nextElementSibling.children[0].textContent = qtdItem;
  });
});

controlDown.forEach((el) => {
  el.addEventListener("click", () => {
    let qtdItem = parseInt(el.previousElementSibling.textContent.trim());
    qtdItem--;

    if (qtdItem < 1) {
      let articleRemove = el.parentElement.parentElement;
      articleRemove.remove();
      countItems();
    }

    el.previousElementSibling.children[0].textContent = qtdItem;
  });
});

document.querySelector(".btn-clear").addEventListener("click", () => {
  removeAll();
  countItems();
});

window.onload = countItems();

document.querySelectorAll(".btn-remove").forEach((el) => {
  el.addEventListener("click", () => {
    let articleRemove = el.parentElement.parentElement;
    articleRemove.remove();
    countItems();
  });
});

function removeAll() {
  let elementRemove = document.querySelectorAll(".item");

  elementRemove.forEach((el) => {
    el.parentNode.removeChild(el);
  });

  if (Items.childElementCount == 0) {
    msgEmptyCart();
  }
}

function countItems() {
  let element = document.querySelector(".counter");
  let qtdItems = document.querySelector(".items");
  let total = 0;

  qtdItems.childNodes.forEach((el) => {
    if (el.className == "item") {
      total++;
    }
  });

  if (total < 1) {
    msgEmptyCart();
  }

  element.textContent = total;
}

function msgEmptyCart() {
  let footer = document.querySelector("footer");

  emptyCartElement.appendChild(textEmptyCart);
  emptyCartElement.classList.add("emptyCart");

  Items.appendChild(emptyCartElement);
  footer.remove();
}
