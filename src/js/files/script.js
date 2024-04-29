import { flsModules } from "./modules.js";

export const fslightbox = async () => {
  const el = document.querySelector("[data-fslightbox]");
  if (!el) return;
  await import(/* webpackChunkName: "fslightbox" */ "fslightbox");
  window.FsLightbox();
};

fslightbox();

import {
  isMobile,
  _slideUp,
  _slideDown,
  _slideToggle,
  FLS,
  addClasses,
  removeClasses,
} from "./functions.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import { throttle } from "./functions.js";

window.gsap = gsap;
window.ScrollTrigger = ScrollTrigger;

if (document.querySelector('[data-role*="tabs"]')) {
  let tabsContainers = document.querySelectorAll('[data-role*="tabs"]');
  tabsContainers.forEach((wrapper) => {
    let controls = wrapper.querySelectorAll("[data-tabs-control]"),
      panels = wrapper.querySelectorAll("[data-tabs-panel]");
    controls.forEach((control) => {
      control.addEventListener("click", (e) => {
        if (e.target.closest("[data-tabs-control]")) {
          e.preventDefault();
          let activeControl = e.target.closest("[data-tabs-control]"),
            activeId = activeControl.dataset.tabsControl;
          if (!activeControl.classList.contains("is-active")) {
            controls.forEach((oneMoreControl) => {
              oneMoreControl.classList.remove("is-active");
            });
            activeControl.classList.add("is-active");
            panels.forEach((panel) => {
              panel.classList.remove("is-open");
            });
            panels.forEach((panel) => {
              if (panel.dataset.tabsPanel == activeId) {
                panel.classList.add("is-open");
              }
            });
          }
        }
      });
    });
  });
}

gsap.registerPlugin(ScrollTrigger);

const setMinHeight = (el) => {
  const height = el.getBoundingClientRect().height;
  console.log(el);
  document.body.setAttribute("style", `--height:${height}px`);
};

const hero = document.querySelector(".hero");

if (hero) {
  setMinHeight(hero);
  gsap.to(hero, {
    y: -200,
    scrollTrigger: {
      scrub: 0.2,
      trigger: hero,
      pin: true,
      start: "top top",
      end: "top -100%",
      invalidateOnRefresh: false,
    },
    ease: "none",
  });
  gsap.fromTo(
    ".hero-item__title-text",
    {
      opacity: 0,
      autoAlpha: 0,
      y: 200,
    },
    {
      duration: 1,
      opacity: 1,
      autoAlpha: 1,
      y: 0,
    }
  );
  gsap.fromTo(
    ".hero-item__btn",
    {
      opacity: 0,
      autoAlpha: 0,
    },
    {
      opacity: 1,
      autoAlpha: 1,
    }
  );
  gsap.fromTo(
    ".hero-item__more",
    {
      opacity: 0,
      autoAlpha: 0,
    },
    {
      opacity: 1,
      autoAlpha: 1,
    }
  );

  gsap.fromTo(
    ".hero-item__adress",
    {
      opacity: 0,
      autoAlpha: 0,
    },
    {
      opacity: 1,
      autoAlpha: 1,
    }
  );

  gsap.fromTo(
    ".hero-item__details-list",
    {
      opacity: 0,
      y: 100,
    },
    {
      duration: 1.5,
      opacity: 1,
      y: 0,
    }
  );

  gsap.fromTo(
    ".hero-item__details-point-round",
    {
      scale: 0,
    },
    {
      duration: 1,
      scale: 1,
    }
  );

  window.addEventListener("resize", () => {
    throttle(200, setMinHeight(hero));
  });
}

const imgGallery = document.querySelector(".s-about__gallery") || false;

if (imgGallery) {
  const pinWrap = imgGallery.querySelector(".s-about__gallery-slider");

  let pinWrapWidth;
  let horizontalScrollLength;

  let spacer;

  if (window.matchMedia("(min-width: 768px)").matches) {
    spacer = 300;
  } else {
    spacer = 50;
  }

  function refresh() {
    pinWrapWidth = pinWrap.scrollWidth;
    horizontalScrollLength = pinWrapWidth - window.innerWidth + spacer;
  }

  refresh();
  gsap.to(pinWrap, {
    scrollTrigger: {
      scrub: 0.2,
      trigger: imgGallery,
      pin: false,
      start: "top bottom",
      end: "top -100%",
      invalidateOnRefresh: true,
    },
    x: () => -horizontalScrollLength,
    ease: "none",
  });

  ScrollTrigger.addEventListener("refreshInit", refresh);
}

let containerGallery = document.querySelectorAll(".js-marque");

if (containerGallery) {
  containerGallery.forEach((item) => {
    const upGallery = item.querySelector(".js-up-gallery");
    const downGallery = item.querySelector(".js-down-gallery");

    let direction;

    if (window.matchMedia("(max-width: 767px)").matches) {
      gsap.to(downGallery, {
        scrollTrigger: {
          scrub: 0.2,
          trigger: item,
          pin: false,
          start: "top center",
          end: "top -500%",
          invalidateOnRefresh: true,
        },
        x: () => -downGallery.scrollWidth,
        ease: "none",
      });

      gsap.to(upGallery, {
        scrollTrigger: {
          scrub: 0.2,
          trigger: item,
          pin: false,
          start: "top center",
          end: "top -500%",
          invalidateOnRefresh: true,
        },
        x: () => upGallery.scrollWidth,
        ease: "none",
      });
    } else {
      gsap.to(downGallery, {
        scrollTrigger: {
          scrub: 0.2,
          trigger: item,
          pin: false,
          start: "top bottom",
          end: "top -200%",
          invalidateOnRefresh: true,
        },
        y: () => downGallery.scrollHeight,
        ease: "none",
      });

      gsap.to(upGallery, {
        scrollTrigger: {
          scrub: 0.2,
          trigger: item,
          pin: false,
          start: "top bottom",
          end: "top -500%",
          invalidateOnRefresh: true,
        },
        y: () => -upGallery.scrollHeight,
        ease: "none",
      });
    }
  });
}

let cardsWrapper = document.querySelectorAll(".cards");

if (cardsWrapper) {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    cardsWrapper.forEach((item) => {
      let cards = item.querySelectorAll(".card");

      let stickDistance = 20;

      let firstCardST = ScrollTrigger.create({
        trigger: cards[0],
        start: "center center",
      });

      let lastCardST = ScrollTrigger.create({
        trigger: cards[cards.length - 1],
        start: "bottom 760",
        opacity: 1,
      });

      cards.forEach((card, index) => {
        let opacityState;
        var scale = 1 - (cards.length - index) * 0.025;
        if (index === cards.length - 1) {
          opacityState = 1;
        } else {
          opacityState = 0;
        }
        let scaleDown = gsap.to(card, {
          scale: scale,
          "transform-origin":
            '"50% ' + (lastCardST.start + stickDistance) + '"',
          opacity: opacityState,
        });

        ScrollTrigger.create({
          trigger: card,
          start: "top 100px",
          end: () => lastCardST.start + stickDistance,
          pin: true,
          pinSpacing: false,
          ease: "none",
          animation: scaleDown,
          toggleActions: "restart none none reverse",
        });
      });
    });
  } else {
    /* the viewport is less than 400 pixels wide */
  }
}

let aboutSection = document.querySelector(".s-about");
if (aboutSection) {
  let aboutImg = aboutSection.querySelector(".s-about__img img");
  let aboutSize = aboutSection.querySelector(".s-about__size");

  gsap.fromTo(
    aboutImg,
    { scale: 0.8 },
    {
      duration: 1,
      scale: 1,
      scrollTrigger: {
        trigger: aboutSection,
        scrub: 1.5,
        start: "top center",
        end: "+=400",
        ease: "power1.out",
      },
    }
  );

  gsap.fromTo(
    aboutSize,
    { y: 50, opacity: 0 },
    {
      duration: 1.5,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: aboutSection,
        scrub: 0.5,
        scrub: 1.5,
        start: "-50px center",
        end: "+=400",
        ease: "power1.out",
      },
    }
  );
}

let historySection = document.querySelector(".history");
if (historySection) {
  let historyImg = historySection.querySelector(".history__main-img img");

  gsap.fromTo(
    historyImg,
    { scale: 1.2, duration: 2.5 },
    {
      duration: 4,
      scale: 1,
      scrollTrigger: {
        trigger: historySection,
        scrub: 1.5,
        start: "top center",
        end: "+=500 center",
        ease: "power1.out",
      },
    }
  );
}

let bureauSection = document.querySelector(".bureau");
if (bureauSection) {
  let bureauImgMain = bureauSection.querySelector(".bureau__img-main");
  let bureauImgSmall = bureauSection.querySelector(".bureau__img-small");
  let bureauText = bureauSection.querySelector(".bureau__desc");

  gsap.from(bureauImgSmall, {
    scrollTrigger: {
      scrub: 0.2,
      trigger: bureauSection,
      pin: false,
      start: "top center",
      end: "bottom bottom",
      invalidateOnRefresh: true,
    },
    opacity: 0,
    ease: "none",
  });
  gsap.to(bureauText, {
    scrollTrigger: {
      scrub: 0.2,
      trigger: bureauSection,
      pin: false,
      start: "top 100vh",
      end: "bottom bottom",
      invalidateOnRefresh: true,
    },
    y: 0,
    ease: "none",
  });
}

gsap.to('.team__list-title', {

  y: () => document.querySelector('.team__list').offsetHeight / 1.7,
  ease: 'none',
  scrollTrigger: {
      trigger: '.team__list',
      start: 'top top', 
      end: 'bottom center',
      scrub: true, 
  },
});

const revealLinesTitle = gsap.utils.toArray(".about__title");

if(revealLinesTitle) {
  revealLinesTitle.forEach((line, i) => {
    // gsap.to(line, {}, {
    //   x: () => document.querySelector('.about__wrapper').offsetWidth,
    // }, {
    //   ease: 'none',
    //   scrollTrigger: {
    //       trigger: '.about__wrapper',
    //       start: 'top top', 
    //       end: 'bottom center',
    //       scrub: true, 
    //   },
    // })
    
    const anim = gsap.to(
      line,
      {
        x: () => -document.querySelector('.about__wrapper').offsetWidth,
      }
    );
    ScrollTrigger.create({
        trigger: '.about__wrapper',
        animation: anim,
        start: 'top bottom', 
        end: 'bottom center',
        scrub: true, 
    });
  })
}



const revealBoxes = gsap.utils.toArray("[data-reveal-box]");

if(revealBoxes) {
  revealBoxes.forEach((box, i) => {
    const anim = gsap.fromTo(
      box,
      {
        autoAlpha: 0,
        y: 50,
      },
      {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        delay: 0.2 * i,
      }
    );
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: "play none none none",
      once: true,
    });
  });
}

gsap.utils.toArray("[data-image-parallax]").forEach(function (container) {
  let image = container.querySelector("img");

  gsap.to(image, {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      scrub: true,
      start: 'top center',
      pin: false,
      invalidateOnRefresh: true,
    },
  });
});

// Get the header
const header = document.querySelector(".header");

const sticky = header.offsetTop;

function initStickyHeader() {
  if (window.pageYOffset > sticky) {
    addClasses([header], "sticky");
  } else {
    removeClasses([header], "sticky");
  }
}

window.onscroll = function () {
  initStickyHeader();
};

//Фолбэк для vh на мобильных устройствах на случай перекрытия панелью инструментов.
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

let complexesDropdown = document.querySelector(".js-dropdown");

if (complexesDropdown) {
  let complexesDropdownHead = document.querySelector(".js-dropdown-toggle");
  let complexesDropdownList = document.querySelector(".js-dropdown-content");

  _slideUp(complexesDropdownList);

  complexesDropdownHead.addEventListener("click", function () {

    complexesDropdownHead.classList.toggle("is-active");
    _slideToggle(complexesDropdownList, 200);

  });
}

let houseFloors = document.querySelectorAll(".js-house-floor");
let mediaEvent;

if (window.matchMedia) {
  mediaEvent = 'click';
}

if (houseFloors) {
  const houseInfo = document.querySelectorAll(".js-house-info");
  const hosePanels = document.querySelectorAll(".js-house-info");
  hosePanels.forEach((element) => {
    const openHandler = function () {
      addClasses([this], "is-open");
    };

    const closeHandler = function () {
      removeClasses([this], "is-open");
    };

    element.addEventListener(mediaEvent, openHandler);
    // element.addEventListener("mouseleave", closeHandler);
  });

  houseFloors.forEach((item) => {
    const dataFloor = item.dataset.floor;
    const dataType = item.dataset.floorType;
    const dataPosition = item.dataset.position;
    const svgElement = item.ownerSVGElement || pathElement; // родительский SVG элемент
    const svgBox = svgElement.getBoundingClientRect();
    const boundingBox = item.getBoundingClientRect();

    // координаты элемента path относительно родительского SVG
    const topPositionWithinSVG = boundingBox.top - svgBox.top;
    const leftPositionWithinSVG = boundingBox.left - svgBox.left;

    item.addEventListener(mediaEvent, function () {
      item.classList.add("is-active");
      item.getBoundingClientRect();
      let houseFloorInfo = document.querySelector(
        `.js-house-info[data-floor-info="${dataFloor}"]`
      );
      addClasses([houseFloorInfo], "is-open");
    });

    document.addEventListener('click', function (event) {
      if (!item.contains(event.target)) {
        item.classList.remove("is-active");
        let houseFloorInfo = document.querySelector(
          `.js-house-info[data-floor-info="${dataFloor}"]`
        );
        removeClasses([houseFloorInfo], "is-open");
      }
    })
    // item.addEventListener("mouseleave", function () {
    //   let houseFloorInfo = document.querySelector(
    //     `.js-house-info[data-floor-info="${dataFloor}"]`
    //   );

    //   removeClasses([houseFloorInfo], "is-open");
    //   removeClasses([houseFloorInfo], "is-active");
    // });
  });

  if (houseInfo) {
    houseInfo.forEach((item) => {
      // let closeBtn = item.querySelector('.js-house-info-close');
      let overlay = item.querySelector(".js-house-info-overlay");

      overlay.addEventListener("click", function () {
        item.classList.remove("is-open");
      });
    });
  }
}

let dragHint = document.querySelectorAll(".js-drag-hint");

if (dragHint) {
  dragHint.forEach((item) => {
    item.addEventListener("touchstart", () => {
      item.classList.add("is-hidden");
    });
  });
}



const videoSection = document.querySelector('.js-video');


if(videoSection) {
  const videoPlayCoursor = document.querySelector('.js-videoplay-mouse');
  const videoPlayer = videoSection.querySelector('video');

  videoSection.addEventListener('mousemove', (e) => {
    const gap = 70
    videoPlayCoursor.style.display = 'flex';
    videoPlayCoursor.style.left = (e.clientX -gap ) + 'px';
    videoPlayCoursor.style.top = (e.clientY - gap) + 'px';
  });

  videoSection.addEventListener('mouseleave', () => {
      videoPlayCoursor.style.display = 'none';
  });

  videoSection.addEventListener('click', function() {
    if(videoPlayCoursor.classList.contains('is-active')) {
      videoPlayCoursor.classList.remove('is-active');
      videoPlayer.pause();
      this.classList.remove('is-playing')
      this.classList.add('is-paused');
    } else {
      videoPlayCoursor.classList.add('is-active');
      videoPlayer.play();
      this.classList.add('is-playing');
      this.classList.remove('is-paused');
    }  
  })
}
