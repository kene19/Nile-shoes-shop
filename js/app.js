let gon = document.querySelector(".gon");

fetch("products.json")
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {

      let card = document.createElement("div");
      card.classList.add("card", element.category);

      let card_img = document.createElement("div");
      card_img.classList.add("card-img");

      let imgs = document.createElement("img");
      imgs.classList.add("imgs");
      imgs.src = element.imageURL;
      imgs.loading = "lazy"

      let card_ditt = document.createElement("div");
      card_ditt.classList.add("card-ditt");
      card_ditt.innerHTML = `<p class="p">${element.name}</p>
                             <p class="p">$${element.price}</p>`;

      let card_inc = document.createElement("div");
      card_inc.classList.add("card-inc");

      let decrementBtn = document.createElement("button");
      decrementBtn.classList.add("dic", "count-btn");
      decrementBtn.textContent = "-";

      let countValue = document.createElement("span");
      countValue.classList.add("count-valu");
      countValue.textContent = "1"; 

      let incrementBtn = document.createElement("button");
      incrementBtn.classList.add("inc", "count-btn");
      incrementBtn.textContent = "+";

      
      decrementBtn.addEventListener("click", () => {
        let currentValue = parseInt(countValue.textContent);
        if (currentValue > 1) {
          countValue.textContent = currentValue - 1;
        }
      });

      incrementBtn.addEventListener("click", () => {
        let currentValue = parseInt(countValue.textContent);
        countValue.textContent = currentValue + 1;
      });

      card_inc.appendChild(decrementBtn);
      card_inc.appendChild(countValue);
      card_inc.appendChild(incrementBtn);

      let btn = document.createElement("button");
      btn.classList.add("key_button");
      btn.innerHTML = `<svg viewBox="0 0 16 16" class="bi bi-cart-check" height="20" width="20" xmlns="http://www.w3.org/2000/svg" fill="#fff">
        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path>
        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
      </svg>
      <p class="text">Buy Now</p>`;

      card.appendChild(card_img);
      card_img.appendChild(imgs);
      card.appendChild(card_ditt);
      card_ditt.appendChild(card_inc);
      card_ditt.appendChild(btn);

      gon.appendChild(card);
    });
  })
  .catch(error => console.error("error fetching data", error));

function filterprod(value) {
  let btns = document.querySelectorAll(".btnkanu");
  let items = document.querySelectorAll(".card");

  btns.forEach(btn => {
    if (value.toUpperCase() === btn.innerText.toUpperCase()) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  items.forEach(item => {
    if (value === "all") {
      item.classList.remove("hide");
    } else {
      if (item.classList.contains(value)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    }
  });
}

window.onload = () => {
  filterprod("all");
};
