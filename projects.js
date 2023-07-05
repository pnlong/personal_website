// CODE FOR PROJECTS PAGE

// flips the cards when they are clicked
const cards = document.querySelectorAll(".project-inner");

cards.forEach((card) => {
  card.addEventListener("click", function (e) {
    card.classList.toggle("is-flipped");
  });
});
