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

    sum();
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

    sum();
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

  if (Items.childElementCount < 1) {
    msgEmptyCart();
    removeFooter();
  }
}

function countItems() {
  let element = document.querySelector(".counter");
  let qtdItems = document.querySelector(".items");
  let total = 0;

  qtdItems.childNodes.forEach((el) => {
    if (el.className == "item") {
      total++;
      sum();
    }
  });

  if (total < 1) {
    msgEmptyCart();
    removeFooter();
  }

  element.textContent = total;
}

function msgEmptyCart() {
  emptyCartElement.appendChild(textEmptyCart);
  emptyCartElement.classList.add("emptyCart");

  Items.appendChild(emptyCartElement);
}

function removeFooter() {
  let footer = document.querySelector("footer");
  if (footer != null) {
    footer.remove();
  }
}

function sum() {
  let articles = document.querySelectorAll(".item");
  let sum = 0;

  articles.forEach((el) => {
    let price = el
      .getElementsByClassName("price-item")[0]
      .textContent.trim()
      .split("R$")[1];
    let qtd = parseInt(
      el.getElementsByClassName("counter-item")[0].textContent.trim()
    );

    sum += price * qtd;
  });

  let stringMoney = sum.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  document.querySelector(".total-container .text-total").textContent =
    stringMoney;
}
