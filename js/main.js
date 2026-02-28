document.addEventListener("DOMContentLoaded", function () {

  // AUTO GALLERY
  const inaugurationGrid = document.getElementById("inaugurationGrid");
  const eventsGrid = document.getElementById("eventsGrid");

  if (inaugurationGrid) {
    for (let i = 1; i <= 25; i++) {
      inaugurationGrid.innerHTML +=
        `<img src="images/Inaguration/pic (${i}).JPG" loading="lazy">`;
    }
  }

  if (eventsGrid) {
    for (let i = 1; i <= 12; i++) {
      eventsGrid.innerHTML +=
        `<img src="images/Events/pic (${i}).jpeg" loading="lazy">`;
    }
  }

});