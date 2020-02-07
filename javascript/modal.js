const modal = document.getElementById("answerModal");
const closeModal = document.getElementById("closeModal");
const addAnswer = document.getElementById("addAnswer");

addAnswer.onclick = function () {
  modal.style.display = "block";
}

closeModal.onclick = function () {
  modal.style.display = "none";
}

// window.onclick = function (event) {
//   console.log('Event', event.target);

// }
