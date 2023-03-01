const modalButton = document.querySelectorAll(".show-modal");
const modalHidden = document.querySelector(".modal");
const overlayHidden = document.querySelector(".overlay");

modalButton.addEventListener("click", fnMuestraModal);

function fnMuestraModal() {
  console.log("Has pulsado el botón");
  modalHidden.classList.remove("hidden");
  overlayHidden.classList.remove("hidden");
}
