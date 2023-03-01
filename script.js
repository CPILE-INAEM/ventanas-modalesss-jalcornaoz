//seleccionamos elemento del DOM con los que vamos a trabajar
const btShowModal = document.querySelectorAll(".show-modal");
const btCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//función que muestra la ventana modal eliminando la clase "hidden" del elemento
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//funcion que oculta la ventana modal añadiendo de nuevo la clase "hidden" al elemento
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//cuando se pusla una tecla lo mira y si es [Esc] oculta la ventana modal
const escKey = function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
  e.stopPropagation;
};

//espera que se pulse un botón
btShowModal.forEach((btn) => btn.addEventListener("click", openModal));

//espera que se pulse [X], o fuera de la ventana modal
btCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//con la tecla [Esc] también se cierra la ventana
document.addEventListener("keydown", escKey);
