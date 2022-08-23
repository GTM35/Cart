let controlUp = document.querySelectorAll(".btn-qtd-up");
let controlDown = document.querySelectorAll(".btn-qtd-down");

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
      qtdItem = 35;
    }

    el.previousElementSibling.children[0].textContent = qtdItem;
  });
});

document.querySelector(".btn-clear").addEventListener("click", () => {
  removeAll();
  countItems();
});

window.onload = countItems();

function removeAll() {
  let elementRemove = document.querySelectorAll(".item");

  let newElement = document.createElement("h4");
  let textNewElement = document.createTextNode("Carrinho vazio");
  newElement.appendChild(textNewElement);
  newElement.classList.add("emptyCart");

  elementRemove.forEach((el) => {
    el.parentNode.removeChild(el);
  });

  let Items = document.querySelector(".items");

  if (Items.childElementCount == 0) {
    Items.appendChild(newElement);
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

  console.log("carregou");

  element.textContent = total;
}
