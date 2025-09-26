const shareBtn = document.querySelector(".share-icon-container");
const sharePopup = document.querySelector(".share-popup");

shareBtn.addEventListener("click", () => {
  sharePopup.classList.toggle("active");
});
