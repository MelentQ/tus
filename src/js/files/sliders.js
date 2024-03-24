/*
Документация слайдера: https://swiperjs.com/
*/

import Swiper from "swiper";
import {
  Navigation,
  A11y,
  Thumbs,
  EffectFade,
  Autoplay,
  Pagination,
  Mousewheel,
  Controller,
} from "swiper/modules";
/*
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
*/

import "../../scss/base/swiper.scss";
import "../../scss/libs/swiper.scss";
import "swiper/css";

// Инициализация слайдеров
function initSliders() {
  // Список слайдеров
  // Проверяем, есть ли слайдер на странице
  // if (document.querySelector(".swiper")) {
  //   // Указываем класс нужного слайдера
  //   // Создаем слайдер
  //   new Swiper(".swiper", {
  //     // Указываем класс нужного слайдера
  //     // Подключаем модули слайдера
  //     // для конкретного случая
  //     modules: [Navigation, A11y], // A11y - обязательный модуль
  //     observer: true,
  //     observeParents: true,
  //     slidesPerView: 1,
  //     spaceBetween: 0,
  //     //autoHeight: true,
  //     speed: 800,
  //     //touchRatio: 0,
  //     //simulateTouch: false,
  //     //loop: true,
  //     //preloadImages: false,
  //     //lazy: true,

  //     /*
  // 		effect: 'fade',
  // 		autoplay: {
  // 			delay: 3000,
  // 			disableOnInteraction: false,
  // 		},
  // 		*/

  //     /*
  // 		pagination: {
  // 			el: '.swiper-pagination',
  // 			clickable: true,
  // 		},
  // 		*/

  //     /*
  // 		scrollbar: {
  // 			el: '.swiper-scrollbar',
  // 			draggable: true,
  // 		},
  // 		*/

  //     navigation: {
  //       prevEl: ".swiper-button-prev",
  //       nextEl: ".swiper-button-next",
  //     },
  //     /*
  // 		breakpoints: {
  // 			640: {
  // 				slidesPerView: 1,
  // 				spaceBetween: 0,
  // 				autoHeight: true,
  // 			},
  // 			768: {
  // 				slidesPerView: 2,
  // 				spaceBetween: 20,
  // 			},
  // 			992: {
  // 				slidesPerView: 3,
  // 				spaceBetween: 20,
  // 			},
  // 			1268: {
  // 				slidesPerView: 4,
  // 				spaceBetween: 30,
  // 			},
  // 		},
  // 		*/
  //     on: {},
  //   });
  // }

  if (document.querySelector(".js-hero-slider")) {
    // Указываем класс нужного слайдера
    // Создаем слайдер
    let heroSlider = new Swiper(".js-hero-slider", {
      modules: [A11y, EffectFade, Autoplay, Thumbs, Controller], // A11y - обязательный модуль
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      lazy: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      allowTouchMove: false,
      watchSlidesProgress: true,
      speed: 800,
      effect: "fade",
    });

    let heroThumbsProgress = document.querySelector(
      ".hero__thumbs-next-circle"
    );

    let heroThumbs = new Swiper(".js-hero-thumbs", {
      modules: [A11y, Navigation, Autoplay, Thumbs, Controller], // A11y - обязательный модуль
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,

      slidesPerView: 1.4,
      spaceBetween: 16,
      speed: 800,

      navigation: {
        prevEl: ".js-hero-thumbs-prev",
        nextEl: ".js-hero-thumbs-next",
      },

      breakpoints: {
        spaceBetween: 30,
      },

      on: {
        autoplayTimeLeft(s, time, progress) {
          heroThumbsProgress.style.setProperty("--progress", 1 - progress);
        },
      },

      thumbs: {
        swiper: ".js-hero-slider",
      },
    });

    // heroThumbs.controller.control = heroSlider;
    // heroSlider.controller.control = heroThumbs;
  }

  if (document.querySelector(".js-hero-bottom-slider")) {
    // Указываем класс нужного слайдера
    // Создаем слайдер

    new Swiper(".js-hero-bottom-slider", {
      modules: [A11y, Autoplay], // A11y - обязательный модуль
      spaceBetween: 40,
      speed: 4000,
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },

      loop: true,
      slidesPerView: "auto",
      allowTouchMove: false,
      disableOnInteraction: true,
    });
  }

  if (document.querySelector(".js-stocks-slider")) {
    // Указываем класс нужного слайдера
    // Создаем слайдер
    new Swiper(".js-stocks-slider", {
      modules: [A11y, Navigation, Pagination], // A11y - обязательный модуль
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      watchSlidesProgress: true,
      speed: 800,

      navigation: {
        prevEl: ".js-stocks-slider-prev",
        nextEl: ".js-stocks-slider-next",
      },

      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
    });
  }

  let stockSlidersLeft = document.querySelectorAll(".js-stock-slider-left");

  if (stockSlidersLeft.length) {
    stockSlidersLeft.forEach((slider) => {
      new Swiper(slider, {
        modules: [A11y, Autoplay], // A11y - обязательный модуль
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        direction: "horizontal",
        spaceBetween: 8,
        reverseDirection: true,
        slidesPerView: "auto",
        allowTouchMove: false,
        disableOnInteraction: true,

        breakpoints: {
          767: {
            direction: "vertical",
            spaceBetween: 16,
          },
        },
      });
    });
  }

  let stockSlidersRight = document.querySelectorAll(".js-stock-slider-right");

  if (stockSlidersRight.length) {
    stockSlidersRight.forEach((slider) => {
      new Swiper(slider, {
        modules: [A11y, Autoplay], // A11y - обязательный модуль
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        direction: "horizontal",
        spaceBetween: 8,
        inverse: true,
        slidesPerView: "auto",
        allowTouchMove: false,
        disableOnInteraction: true,

        breakpoints: {
          767: {
            direction: "vertical",
            spaceBetween: 16,
          },
        },
      });
    });
  }

  if (document.querySelector(".js-services-slider")) {
    new Swiper(".js-services-slider", {
      modules: [A11y, Navigation, Pagination], // A11y - обязательный модуль
      observer: true,
      observeParents: true,
      speed: 600,
      loop: false,
      slidesPerView: 1.2,
      spaceBetween: 8,
      navigation: {
        prevEl: ".js-services-slider-prev",
        nextEl: ".js-services-slider-next",
      },
      breakpoints: {
        495: {
          slidesPerView: "auto",
          spaceBetween: 16,
          loop: true,
        },
      },
    });
  }

  let flatSliders = document.querySelectorAll(".js-flat-gallery");

  if (flatSliders.length) {
    flatSliders.forEach((item) => {
      let slider = item.querySelector('.js-flat-slider');
      let sliderPrev = item.querySelector('.js-flat-slider-prev');
      let sliderNext = item.querySelector('.js-flat-slider-next');
      let sliderPagination = item.querySelector('.swiper-pagination')
      new Swiper(slider, {
        modules: [A11y, Navigation,Pagination], // A11y - обязательный модуль
        observer: true,
        observeParents: true,
        speed: 600,
        loop: false,
        slidesPerView: 1,
        spaceBetween: 8,
        pagination: {
          el: sliderPagination,
          clickable: true,
        },
        navigation: {
          prevEl: sliderPrev,
          nextEl: sliderNext,
        },
      });
    });
  }

  if (document.querySelector(".js-advantages-gallery")) {
    // Указываем класс нужного слайдера
    // Создаем слайдер
    let advanagesSlider = new Swiper(".js-advantages-gallery", {
      modules: [A11y, Thumbs, Navigation, Pagination, EffectFade], // A11y - обязательный модуль
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      allowTouchMove: true,
      freeMode: true,
      watchSlidesProgress: true,
      speed: 600,
      effect: "fade",

      thumbs: {
        swiper: ".js-advantages-cards",
      },
    });
  }

  if (document.querySelector(".js-advantages-cards")) {
    // Указываем класс нужного слайдера
    // Создаем слайдер
    new Swiper(".js-advantages-cards", {
      modules: [A11y, Navigation, Thumbs], // A11y - обязательный модуль
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 600,

      breakpoints: {
        495: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    });
  }
  if (document.querySelector(".js-gallery-slider")) {
    // Указываем класс нужного слайдера
    // Создаем слайдер
    new Swiper(".js-gallery-slider", {
      modules: [A11y, Navigation, Pagination], // A11y - обязательный модуль
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 16,
      speed: 600,
      navigation: {
        prevEl: ".js-gallery-slider-prev",
        nextEl: ".js-gallery-slider-next",
      },
      pagination: {
        type: 'fraction',
        formatFractionCurrent: (num) => {
          return (num > 9) ? num : '0' + num;
        },
        formatFractionTotal:  (num) => {
          return (num > 9) ? num : '0' + num;
        },
        el: '.swiper-pagination'
      }
    });
  }

  let historySliders = document.querySelectorAll(".js-history-slider");

  if (historySliders.length) {
    historySliders.forEach((slider) => {
      let mql = window.matchMedia("(max-width: 992px)");

      let historySlider;

      if (mql.matches) {
        historySlider = new Swiper(slider, {
          modules: [A11y, Autoplay], // A11y - обязательный модуль
          observer: true,
          observeParents: true,
          freeMode: true,
          spaceBetween: 8,
          slidesPerView: 1,
          allowTouchMove: true,
          disableOnInteraction: true,
          init: true,

          breakpoints: {
            767: {
              slidesPerView: 2,
              spaceBetween: 16,
            },

            992: {
              slidesPerView: "auto",
              allowTouchMove: false,
              spaceBetween: 0,
            },
          },
        });
      } else {
      }
    });
  }

  let notFoundSliders = document.querySelectorAll(".js-not-found-slider");

  if (notFoundSliders.length) {
    notFoundSliders.forEach((slider) => {
      let notFoudSlider = new Swiper(slider, {
        modules: [A11y, Autoplay], // A11y - обязательный модуль
        spaceBetween: 50,
        speed: 4000,
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
        },
        loop: true,
        slidesPerView: "auto",
        allowTouchMove: false,
        disableOnInteraction: true,
        breakpoints: {
          1024: {
            spaceBetween: 100,
          },
        },
      });
    });
  }

  let floorNumsSliders = document.querySelectorAll(".js-floor-nums-slider");

  if (floorNumsSliders.length) {
    floorNumsSliders.forEach((slider) => {
      let floorNumsSlider = new Swiper(slider, {
        modules: [A11y, Navigation], // A11y - обязательный модуль
        spaceBetween: 20,
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        allowTouchMove: true,
        disableOnInteraction: true,
        navigation: {
          prevEl: '.js-floor-nums-prev',
          nextEl: '.js-floor-nums-next',
        },
        breakpoints: {
          1023: {
            spaceBetween: 35,
            direction: "vertical",
          },
        }
      });
    });
  }
}
// Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}



window.addEventListener("load", function (e) {
  initSliders();
  //initSlidersScroll();
});

// Бинд слайдеров на window для беков
window.initSliders = initSliders;
