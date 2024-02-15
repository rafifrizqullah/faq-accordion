const acc = document.getElementsByClassName("accordion-button");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.parentElement.nextElementSibling;
    panel.style.display === "block"
      ? (panel.style.display = "none")
      : (panel.style.display = "block");
  });
}
