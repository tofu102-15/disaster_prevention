const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-checklist] input[type='checkbox']").forEach((input) => {
  const key = `september-food-check:${input.id}`;
  input.checked = localStorage.getItem(key) === "true";
  input.addEventListener("change", () => {
    localStorage.setItem(key, String(input.checked));
  });
});
