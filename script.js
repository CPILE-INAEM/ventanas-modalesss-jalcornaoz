const btShowModal = document.querySelectorAll(".show-modal");
const btCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

btShowModal.forEach((btn) => btn.addEventListener("click", openModal));
