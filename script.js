const btShowModal = document.querySelectorAll(".show-modal");
const btCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btShowModal.forEach((btn) => btn.addEventListener("click", openModal));
btCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
