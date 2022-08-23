let controlUp = document.querySelectorAll(".btn-qtd-up");
let controlDown = document.querySelectorAll(".btn-qtd-down");
let teste = document.querySelectorAll("article");

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

document.querySelector(".btn-clear").addEventListener("click", removeAll);

function removeAll() {
  let itemsRemove = document.querySelectorAll(".item");

  let newElement = document.createElement("h4");
  let textElement = document.createTextNode("Carrinho vazio");
  newElement.appendChild(textElement);
  newElement.classList.add("emptyCart");

  itemsRemove.forEach((el) => {
    el.parentNode.removeChild(el);
  });

  document.querySelector(".items").appendChild(newElement);
}
