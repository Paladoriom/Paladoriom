if (window.innerWidth > 600) {
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const input = document.getElementById("searchInput");
    const input2 = document.getElementById("place_search");

    input.addEventListener("focus", function () {
      if (window.innerWidth > 600) {
        container.style.border = "1px solid blue";
      }
    });

    input.addEventListener("blur", function () {
      if (window.innerWidth > 600) {
        container.style.border = "";
      }
    });

    input2.addEventListener("focus", function () {
      if (window.innerWidth > 600) {
        container.style.border = "1px solid blue";
      }
    });

    input2.addEventListener("blur", function () {
      if (window.innerWidth > 600) {
        container.style.border = "";
      }
    });
  });
}
