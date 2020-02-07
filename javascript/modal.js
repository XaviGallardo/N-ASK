const modal = document.getElementById("answerModal");
const closeModal = document.getElementById("closeModal");
const addAnswer = document.getElementById("addAnswer");

addAnswer.onclick = function () {
  modal.style.display = "block";
}

closeModal.onclick = function () {
  modal.style.display = "none";
}

// Hay mejores maneras de hacerlo 
