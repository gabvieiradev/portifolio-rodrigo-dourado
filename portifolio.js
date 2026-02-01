const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (pageYOffset >= sectionTop - 80) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".open-modal").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    modalContent.innerHTML = "";

    const images = link
      .getAttribute("data-images")
      .split(",");

    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src.trim();
      modalContent.appendChild(img);
    });

    modal.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});


