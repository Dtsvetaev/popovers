import Popover from "../popover";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded"); // Проверяем, загружается ли JS

  const button = document.querySelector(".popover-button");

  if (button) {
    console.log("Button found, initializing Popover"); // Проверка кнопки
    new Popover(button, "Popover title", "And here's some amazing content. It's very engaging. Right?");
  } else {
    console.error("Button not found");
  }
});

