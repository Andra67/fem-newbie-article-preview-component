shareButton = document.querySelector(".share-icon");

shareContainer = document.querySelector(".share-container");
profile = document.querySelector(".profile");

shareButton.addEventListener("click", () => {
  document.querySelector(".social-media").classList.toggle("visible");
});
