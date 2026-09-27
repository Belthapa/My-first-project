const cartButtons = document.querySelectorAll(".cart-btn");
const toast = document.getElementById("toast");
let cartCount = 0;

cartButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    document.querySelectorAll(".badge i")[1].textContent = cartCount;
    toast.textContent = "Added to cart ✓";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1600);
  });
});

document.querySelectorAll(".sizes button").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.querySelectorAll("button").forEach(x => x.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

document.querySelectorAll(".heart").forEach(h => {
  h.addEventListener("click", () => {
    h.textContent = h.textContent === "♡" ? "♥" : "♡";
  });
});

document.getElementById("searchInput").addEventListener("input", e => {
  const term = e.target.value.toLowerCase().trim();
  document.querySelectorAll(".product").forEach(product => {
    product.style.display = product.dataset.name.toLowerCase().includes(term) ? "" : "none";
  });
});

document.getElementById("subscribeForm").addEventListener("submit", e => {
  e.preventDefault();
  toast.textContent = "Thanks! 10% offer unlocked ✓";
  toast.classList.add("show");
  e.target.reset();
  setTimeout(() => toast.classList.remove("show"), 1800);
});
