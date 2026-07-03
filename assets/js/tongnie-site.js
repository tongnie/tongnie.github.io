document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = new Date().getFullYear();

  const filters = document.querySelectorAll("[data-filter]");
  const papers = document.querySelectorAll("[data-paper-category]");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.filter;
      filters.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      papers.forEach((paper) => {
        const categories = paper.dataset.paperCategory.split(" ");
        paper.hidden = value !== "all" && !categories.includes(value);
      });
    });
  });
});
