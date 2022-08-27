const size = document.getElementById("size");
const jumlah = document.getElementById("jumlah");
let counter = 0;
let amount = 0;

function min() {
  if (counter > 0) {
    counter--;
    size.innerHTML = counter;
  }
}

function plus() {
  counter++;
  size.innerHTML = counter;
}

function amountPlus() {
  amount++;
  jumlah.innerHTML = amount;
}

function amountMin() {
  if (amount > 0) {
    amount--;
    jumlah.innerHTML = amount;
  }
}

const thumItem = document.querySelector(".tumb-item");
const jumbo = document.querySelector(".jumbo");
const thumbs = document.querySelectorAll(".thumb");

thumItem.addEventListener("click", (e) => {
  if (e.target.className == "img-fluid thumb") {
    jumbo.src = e.target.src;
    thumbs.forEach((e) => {
      e.className = "img-fluid thumb";
    });
    e.target.classList.add("active-thumb");
  }
});
