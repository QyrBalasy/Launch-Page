import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperOptions = {
  modules: [Navigation, Pagination],
  direction: "horizontal",
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
    },
    750: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    751: {
      slidesPerView: 2,
      spaceBetween: 40,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: false,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 21,
      centeredSlides: false,
    },
  },
};

export function MySwiper() {
  const swiper = new Swiper(".swiper", swiperOptions);

  function handleResize() {
    const isMobile = window.innerWidth <= 750;
    swiper.pagination[isMobile ? "init" : "destroy"]();
    swiper.pagination.update();
  }

  window.addEventListener("resize", handleResize);
  handleResize();
}
