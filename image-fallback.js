(function () {
  function applyImageFallback(image) {
    image.addEventListener("error", function handleImageError() {
      if (image.dataset.fallbackApplied === "true") {
        return;
      }

      image.dataset.fallbackApplied = "true";
      image.src = "thumb.png";
    });
  }

  function init() {
    document.querySelectorAll("img").forEach(applyImageFallback);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
    return;
  }

  init();
})();
