import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function MySwiper() {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    direction: "horizontal",
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
      },
      // when window width is >= 480px
      410: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      // when window width is >= 640px
      750: {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: false,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 21,
        centeredSlides: false,
      },
    },
  });

  // Обработчик клика на слайдер
  document.querySelectorAll(".swiper-slide").forEach((slide) => {
    slide.addEventListener("click", () => {
      const modalId = slide.getAttribute("data-modal");
      openModal(modalId);
    });
  });

  // Функция для открытия модального окна и отображения текущего слайда
  const openModal = (modalId) => {
    const modal = document.getElementById("modal");
    const modalImg = modal.querySelector("img");
    const slideImg = document.querySelector(`[data-modal="${modalId}"] img`);

    modalImg.src = slideImg.src;
    modal.classList.add("openModal");

    // Добавляем обработчик клика на кнопку закрытия
    const closeBtn = modal.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("openModal");
      modalImg.src = "";
    });

    // Добавляем обработчик клика на модальное окно для закрытия
    modal.addEventListener("click", (event) => {
      if (!event.target.closest(".modal-content")) {
        modal.classList.remove("openModal");
        modalImg.src = "";
      }
    });
  };

  function handleResize() {
    // Если ширина экрана меньше или равна 360px, то показываем только пагинацию
    if (window.innerWidth <= 650) {
      swiper.pagination.init();
      swiper.pagination.update();
    }
    else {
      swiper.pagination.destroy();
      swiper.pagination.update();
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();
}
