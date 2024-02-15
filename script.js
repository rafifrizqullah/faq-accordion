const acc = document.getElementsByClassName("accordion-button");
const body = document.getElementsByClassName("accordion-body");

const handleAccordionClick = function () {
  for (let j = 0; j < body.length; j++) {
    acc[j].classList.remove("active");
    body[j].classList.remove("show");
  }
  this.classList.add("active");
  this.nextElementSibling.classList.add("show");
};

for (let i = 0; i < acc.length; i++) {
  acc[0].classList.add("active");
  acc[0].nextElementSibling.classList.add("show");
  acc[i].onclick = handleAccordionClick;
}
