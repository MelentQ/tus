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

let state = true;
let startAnim = "top top";
let scaleSize = 4;

if (window.matchMedia("(max-width: 992px)").matches) {
  state = false;
  startAnim = "center center";
  scaleSize = 6;
}

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".js-window",
    scrub: true,
    start: startAnim,
    pin: state,
  },
});

tl.fromTo(
  ".window__gallery",
  {
    yPercent: 100,
    opacity: 0,
  },
  {
    yPercent: 0,
    opacity: 1,
  }
);

tl.fromTo(
  ".js-window-img",
  {
    yPercent: 0,
  },
  {
    yPercent: -50,
  }
);

tl.to(".js-window-img", {
  scale: scaleSize,
});

tl.fromTo(
  ".js-window-btn",
  {
    opacity: 0,
  },
  {
    opacity: 1,
  }
);

if (window.matchMedia("(min-width: 992px)").matches) {
  const windowImgBtn = document.querySelector(".js-window-btn");
  const windowImgSection = document.querySelector(".js-window-img");

  if (windowImgBtn) {
    windowImgSection.addEventListener("click", () => {});
    windowImgSection.addEventListener("mousemove", (e) => {
      const gap = 40;
      // windowImgBtn.style.opacity = "1";
      windowImgBtn.style.left = e.clientX - gap + "px";
      windowImgBtn.style.top = e.clientY - gap + "px";
    });

    windowImgSection.addEventListener("mouseleave", () => {
      // windowImgBtn.style.opacity = "0";
    });
  }
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

if (window.matchMedia("(min-width: 1023px)").matches) {
  let estateSection = document.querySelector(".hero-estate");
  if (estateSection) {
    let estateImgSmall = estateSection.querySelector(
      ".hero-estate__img--small"
    );

    gsap.from(estateImgSmall, {
      scrollTrigger: {
        scrub: 0.2,
        trigger: estateSection,
        pin: false,
        start: "center center",
        end: "bottom bottom",
        invalidateOnRefresh: true,
      },
      opacity: 0,
      ease: "none",
    });
  }
}

gsap.to(".team__list-title", {
  y: () => document.querySelector(".team__list").offsetHeight / 1.7,
  ease: "none",
  scrollTrigger: {
    trigger: ".team__list",
    start: "top top",
    end: "bottom center",
    scrub: true,
  },
});

if (matchMedia("(min-width: 992px)").matches) {
  gsap.to(".residents-info__img", {
    ease: "none",
    scale: 1.5,
    scrollTrigger: {
      trigger: ".residents-info",
      start: "top top",
      end: "center center",
      scrub: true,
    },
  });
}

const revealLinesTitle = gsap.utils.toArray("[data-line-text]");

if (revealLinesTitle) {
  revealLinesTitle.forEach((line, i) => {
    const parent = line.closest("[data-line-text-block]");
    const anim = gsap.to(line, {
      x: () => -parent.offsetWidth * 2,
    });
    ScrollTrigger.create({
      trigger: parent,
      animation: anim,
      start: "top 10%",
      // end: "bottom bottom",
      scrub: true,
    });
  });
}

const revealBoxes = gsap.utils.toArray("[data-reveal-box]");

if (revealBoxes) {
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
      start: "top center",
      pin: false,
      invalidateOnRefresh: true,
    },
  });
});

gsap.utils.toArray("[data-bg-parallax]").forEach(function (container) {
  let image = container.querySelector("img");

  gsap.to(image, {
    y: () => image.offsetHeight - container.offsetHeight,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      scrub: true,
      start: "top center",
      pin: false,
      invalidateOnRefresh: true,
    },
  });
});

gsap.to(".about-hero__preview video", {
  scrollTrigger: {
    trigger: ".about-hero__preview",
    scrub: true,
    start: "center center",
    pin: false,
    invalidateOnRefresh: true,
    toggleClass: "is-rounded",
  },
});

gsap.to(".about-hero__preview video", {
  scale: 0.5,
  ease: "none",
  scrollTrigger: {
    trigger: ".about-hero__details",
    scrub: true,
    start: "center center",
    pin: false,
    invalidateOnRefresh: true,
  },
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

    _slideToggle(complexesDropdownList, 200);


  });
}

let houseFloors = document.querySelectorAll(".js-house-floor");
let mediaEvent;

if(window.matchMedia("(max-width: 1023px)").matches) {
  mediaEvent = "click";
} else {
  mediaEvent = "mouseenter";
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
      houseFloors.forEach((item) => {
        item.classList.remove("is-active");
      })
      houseInfo.forEach((item) => {
        item.classList.remove('is-open')
      })
      item.classList.add("is-active");
      item.getBoundingClientRect();
      let houseFloorInfo = document.querySelector(
        `.js-house-info[data-floor-info="${dataFloor}"]`
      );
      addClasses([houseFloorInfo], "is-open");
    });

    document.addEventListener("click", function (event) {
      if (!item.contains(event.target)) {
        item.classList.remove("is-active");
        let houseFloorInfo = document.querySelector(
          `.js-house-info[data-floor-info="${dataFloor}"]`
        );
        removeClasses([houseFloorInfo], "is-open");
      }
    });
    
    houseInfo.forEach((item) => {
      // let closeBtn = item.querySelector('.js-house-info-close');
      let overlay = item.querySelector(".js-house-info-overlay");

      item.addEventListener("mouseleave", function () {
        let houseFloorInfo = document.querySelector(
          `.js-house-info[data-floor-info="${dataFloor}"]`
        );
  
        removeClasses([houseFloorInfo], "is-open");
        removeClasses([houseFloorInfo], "is-active");
      });

      overlay.addEventListener("click", function () {
        item.classList.remove("is-open");
      });
    });
  });
}

let dragHint = document.querySelectorAll(".js-drag-hint");

if (dragHint) {
  dragHint.forEach((item) => {
    item.addEventListener("touchstart", () => {
      item.classList.add("is-hidden");
    });
  });
}

const videoSection = document.querySelector(".js-video");



if (videoSection) {
  const videoPlayCoursor = document.querySelector(".js-videoplay-mouse");
  const videoPlayer = videoSection.querySelector("video");

  if (videoPlayCoursor) {
    videoSection.addEventListener("mousemove", (e) => {
      const gap = 70;
      videoPlayCoursor.style.display = "flex";
      videoPlayCoursor.style.left = e.clientX - gap + "px";
      videoPlayCoursor.style.top = e.clientY - gap + "px";
    });

    videoSection.addEventListener("mouseleave", () => {
      videoPlayCoursor.style.display = "none";
    });
  }

  videoSection.addEventListener("click", function () {
    if (videoSection.classList.contains("is-playing")) {
      if (videoPlayCoursor) {
        videoPlayCoursor.classList.remove("is-active");
      }
      videoPlayer.pause();
      this.classList.remove("is-playing");
      this.classList.add("is-paused");
    } else {
      if (videoPlayCoursor) {
        videoPlayCoursor.classList.add("is-active");
      }
      videoPlayer.play();
      this.classList.add("is-playing");
      this.classList.remove("is-paused");
    }
  });
}

document.addEventListener('click', function(e) {
  let target = e.target;
  console.log(target);

  if(target == document.querySelector('.js-video')) {
    const videoSection = document.querySelector('.js-video');
    const videoPlayer = videoSection.querySelector('video');

    if (videoSection.classList.contains("is-playing")) {

      videoPlayer.pause();
      videoSection.classList.remove("is-playing");
      videoSection.classList.add("is-paused");
    } else {

      videoPlayer.play();
      videoSection.classList.add("is-playing");
      videoSection.classList.remove("is-paused");
    }
  }
})

const filterSearch = document.querySelector(".js-filter-search");

if (filterSearch) {
  const filterSearchBtn = document.querySelector(".js-filter-search-btn");
  filterSearchBtn.addEventListener("click", function () {
    filterSearch.classList.toggle("is-open");
  });
}

const filterSorting = document.querySelector(".js-filter-sorting");

if (filterSorting) {
  const filterSortingBtn = filterSorting.querySelector(
    ".js-filter-sorting-toggle"
  );
  filterSortingBtn.addEventListener("click", function () {
    filterSorting.classList.toggle("is-open");
  });

  const filterSortingValue = filterSorting.querySelector(
    ".js-filter-sorting-value"
  );
  const filterSortingTypes = filterSorting.querySelectorAll(
    ".js-filter-sorting-type"
  );

  filterSortingTypes.forEach((item) => {
    item.addEventListener("click", function () {
      item.setAttribute("checked", true);
      let itemType = item.dataset.type;
      filterSortingValue.textContent = itemType;
      filterSorting.classList.remove("is-open");
    });
  });
}

const tags = document.querySelectorAll(".js-tags");

if (tags) {
  const customEvent = window.matchMedia("(max-width: 992px)").matches
    ? "click"
    : "mousemove";

  tags.forEach((item) => {
    const tagsBtn = item.querySelector(".js-tags-btn");
    const tagsHidden = item.querySelector(".js-tags-hidden");

    tagsBtn.addEventListener(customEvent, function () {
      item.classList.toggle("is-show");
    });
  });
}

const locationCenteredScheme = document.querySelector(".js-centered-scheme");

if (locationCenteredScheme) {
  if (window.matchMedia("(max-width: 992px)").matches) {
    locationCenteredScheme.scrollLeft =
      locationCenteredScheme.scrollWidth / 2 -
      locationCenteredScheme.clientWidth / 2;
  }
}

const loactionWrapper = document.querySelector(".location__wrapper");

if (loactionWrapper) {
  if (window.matchMedia("(max-width: 992px)").matches) {
    loactionWrapper.scrollLeft =
      loactionWrapper.scrollWidth / 2 - loactionWrapper.clientWidth / 2;
  }
}

const locationObjectsPin = document.querySelectorAll(".location__object-point");
const locationObjectInfos = document.querySelectorAll(".location__object-info");

locationObjectsPin.forEach((item) => {
  const locationObjectId = item.dataset.id;
  const locationObjectInfo = document.querySelector(
    `.location__object-info[data-id="${locationObjectId}"]`
  );
  const locationPointWidht = item.clientWidth;
  const locationPointTop = item.offsetTop;
  const locationPointLeft = item.offsetLeft;
  const locationObjectInfoWidht = locationObjectInfo.clientWidth;
  const locationObjectInfoHeight = locationObjectInfo.clientHeight;

  if (window.matchMedia("(min-width: 992px)").matches) {
    item.addEventListener("mouseenter", () => {
      const coords = item.getBoundingClientRect();
      locationObjectInfos.forEach((item) => item.classList.remove("is-open"));
      locationObjectInfo.classList.add("is-open");
      locationObjectInfo.style = `left: ${locationPointLeft - locationObjectInfoWidht - locationPointWidht / 2}px; top: ${locationPointTop - locationObjectInfoHeight / 3}px;`;
    });

    item.addEventListener("mouseleave", () => {
      locationObjectInfo.classList.remove("is-open");
    });
  } else {
    item.addEventListener("click", () => {
      const coords = item.getBoundingClientRect();
      const loactionWrapperWidth = loactionWrapper.clientWidth;
      locationObjectInfo.classList.add("is-open");
      locationObjectInfo.style = `width: ${loactionWrapperWidth - 32}px; left: ${locationPointLeft - coords.left + locationPointWidht}px;`;
      loactionWrapper.style = "overflow: hidden";
    });
  }
});

const locationObjectInfoClose = document.querySelectorAll(
  ".location__object-info-close"
);

locationObjectInfoClose.forEach((item) => {
  item.addEventListener("click", () => {
    const locationObjectInfo = item.closest(".location__object-info");
    locationObjectInfo.classList.remove("is-open");
    loactionWrapper.style = `overflow: scroll;`;
  });
});

import $ from "jquery";

let $section = $();
let $image = $();
let $panels = $();
let $btnDown = $();
let $title = $();
let $info = $();

let initialScale;
let fullScale;

function transformScrollTopToStyles() {
  const fullScaleAtScrollTop = $image.offset().top;
  const scrollTop = $(window).scrollTop();

  const restScale = fullScale - initialScale;
  const scrollProgress =
    scrollTop < fullScaleAtScrollTop ? scrollTop / fullScaleAtScrollTop : 1;

  const initialBorderRadius = 16;

  return {
    newScale: initialScale + restScale * scrollProgress,
    newBorderRadius: initialBorderRadius * (1 - scrollProgress),
    newTitleOpacity: 1 - scrollProgress * 3,
  };
}

function updateScrollDeps() {
  const { newScale, newBorderRadius, newTitleOpacity } =
    transformScrollTopToStyles();

  $image.css({
    transform: `scale(${newScale})`,
  });

  $image[0].style.setProperty("--border-radius", newBorderRadius + "px");

  $section.toggleClass("intro-zhk--full-scale", fullScale - newScale < 0.1);

  $btnDown.toggleClass("active", newScale < 0.8 * fullScale);

  $title.css({
    opacity: newTitleOpacity,
  });
}

function toggleInactive() {
  const scrollTop = $(window).scrollTop();

  const isInactive = $section.outerHeight() < scrollTop + 700;

  $section.toggleClass("intro-zhk--inactive", isInactive);
}

function updateScaleVariables() {
  initialScale = parseFloat(
    getComputedStyle($image.get(0)).getPropertyValue("--initial-scale")
  );

  const windowHeight = $(window).height();

  if ($(window).width() >= 1000) {
    fullScale = 1;

    $section.get(0).style = "";
  } else {
    const imageRatio = 0.9339;
    const imageHeight = $(window).width() * imageRatio;

    fullScale = windowHeight / imageHeight;

    $section.outerHeight($image.offset().top + windowHeight);
  }
}

function handleWindowScroll() {
  console.log("handleWindowScroll");

  requestAnimationFrame(() => {
    updateScrollDeps();
    toggleInactive();
  });
}

function handleFloorClick(e) {
  closeActivePanels();
  const target = $(e.target).data("target");
  $(this).addClass("active");
  $(target).addClass("active");
}

function closeActivePanels() {
  $panels.filter(".active").removeClass("active");
  $(".intro-zhk__floors__item.active").removeClass("active");
}

function handleWindowLoad() {
  console.log("handleWindowLoad");

  updateScaleVariables();

  $section.addClass("intro-zhk--loaded");

  setTimeout(() => {
    $image.addClass("intro-zhk__image--no-transition");
    $(".page__locker").removeClass("active");
  }, 1200);
}

function handleWindowResize() {
  updateScaleVariables();
}

function handleScrollDown() {
  window.scroll({
    top: $image.offset().top,
    behavior: "smooth",
  });
}

function handleOutsideClick(e) {
  if ($(e.target).closest(".intro-zhk__floors, .intro-zhk__panel").length)
    return;
  closeActivePanels();
}

function handlePanelClose(e) {
  e.preventDefault();

  closeActivePanels();
}

$(function () {
  $section = $("#intro-zhk");
  $image = $section.find(".intro-zhk__image");
  $btnDown = $section.find(".intro-zhk__btn-down");
  $panels = $section.find(".intro-zhk__panel");
  $title = $section.find(".intro-zhk__h1");
  $info = $section.find(".intro-zhk__info");

  if ($section.length === 0) return;

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(window).on("scroll", handleWindowScroll);
      } else {
        $(window).off("scroll", handleWindowScroll);
      }
    });
  };

  const options = {
    // root: по умолчанию window, но можно задать любой элемент-контейнер
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe($section[0]);

  let customFloorEvent;

  if(window.matchMedia("(max-width: 992px)").matches) {
    customFloorEvent = "click";
  } else {
    customFloorEvent = "mouseenter";
  }

  $(document).on('click', function(e) {
    console.log(e.target);
  })

  $(document).on(customFloorEvent, ".intro-zhk__floors__item", handleFloorClick);
  $(document).on("click", ".intro-zhk__btn-close", handlePanelClose);
  $(document).on("click", ".intro-zhk__btn-down", handleScrollDown);
  $(document).on("click", ".intro-zhk", handleOutsideClick);

  window.addEventListener("load", handleWindowLoad);

  window.addEventListener("resize", handleWindowResize);
  screen.orientation.addEventListener("change", handleWindowResize);

  if(window.matchMedia("(min-width: 992px)").matches) {
    $('.intro-zhk__panel').on('mouseleave', () => {
      closeActivePanels();
    })
  }
});

function detailsCircleAnimation() {
  let trackingTimer = null;
  let isTrackingAllowed = false;
  let circlePosition;

  let $section = $();
  let $center = $();
  let $circle = $();

  function handleMouseMove(e) {
    if (!isTrackingAllowed) return;

    const { pageX, pageY } = e;

    animateCircleTo({
      top: pageY - $section.offset().top,
      left: pageX - $center.offset().left,
    });
  }

  function animateCircleTo(position) {
    gsap.to($circle.get(0), position);
  }

  function saveCirclePosition() {
    const { top, left } = getComputedStyle($circle.get(0));

    circlePosition = { top, left };
  }

  $(function () {
    if ($(".details").length === 0) return;

    $section = $(".details");
    $center = $section.find(".details__wrapper");
    $circle = $section.find(".details__circle");

    saveCirclePosition();

    if(window.matchMedia("(min-width: 992px)").matches) {
      $(document).on("mousemove", ".details", handleMouseMove);
    }

    window.addEventListener("load", () => {
      gsap.timeline({
        defaults: {
          ease: "none",
        },

        scrollTrigger: {
          trigger: ".details",
          start: "top center",
          end: "bottom top",
          onEnter: () => {
            // setTimeout cares about visibility of initial rotation
            trackingTimer = setTimeout(() => {
              isTrackingAllowed = true;
            }, 1000);
          },
          onLeaveBack: () => {
            clearTimeout(trackingTimer);

            isTrackingAllowed = false;

            // setTimeout required, because reset available
            // only when gsap completed tracking
            setTimeout(() => {
              animateCircleTo(circlePosition);
            }, 600);
          },
        },
      });

      gsap
        .timeline({
          defaults: {
            ease: "none",
          },
          scrollTrigger: {
            trigger: ".details__circle-text",
            start: "top bottom",
            end: "bottom+=200 top",
            scrub: 0.5,
            // markers: true,
          },
        })
        .addLabel("rotate")
        .from(
          ".details__circle-text",
          {
            scale: 0.8,
            duration: 1,
            delay: 1,
          },
          "rotate"
        )
        .to(
          ".details__circle-text",
          {
            rotate: 360,
            duration: 5,
          },
          "rotate"
        );
    });
  });
}

if (window.matchMedia("(min-width: 1023px)").matches) {
  detailsCircleAnimation();
}


import { debounce } from "throttle-debounce";

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}


class ImageMap {
  constructor(options) {
    this._options = options;

    this._rootEl = options.el;
    this._mapEl = options.el.querySelector(".map-location__box");
    this._data = $(options.el).data();

    this._scale;
    this._bounds;
    this._map;

    this._initialize();

    const debounced = debounce(500, this._handleWindowResize.bind(this));
    window.addEventListener("resize", debounced);
    screen.orientation.addEventListener("change", debounced);
  }

  _initialize() {
    this._scale = this._calculateImageScale();
    this._bounds = this._calculateImageBounds();

    this._map = L.map(this._mapEl, {
      zoomControl: false,
      scrollWheelZoom: false,
      zoom: 0,
      center: this._originalCoordsToScaled(this._data.center),
      maxBoundsViscosity: 1, // do not allow drag outside bounds
      crs: L.CRS.Simple,
    });

    this._map.setMaxBounds(new L.LatLngBounds(this._bounds));

    this._addCustomZoom();
    this._addImage();
    this._addMarkers();
    this._addLogo();

    this._map.on("click", this._showClickCoords.bind(this));
  }

  _handleWindowResize() {
    this._map.remove();

    this._initialize();
  }

  _originalCoordsToScaled(coords) {
    return [coords[0] * this._scale, coords[1] * this._scale];
  }

  _scaledCoordsToOriginal(coords) {
    return [coords[0] / this._scale, coords[1] / this._scale];
  }

  _calculateImageBounds() {
    const scaledImageSize = this._data.imageSize.map(
      (value) => value * this._scale
    );

    return [[0, 0], scaledImageSize.reverse()];
  }

  _calculateImageScale() {
    const containerSize = [this._rootEl.offsetWidth, this._rootEl.offsetHeight];

    return Math.max(
      containerSize[0] / this._data.imageSize[0],
      containerSize[1] / this._data.imageSize[1]
    );
  }

  _showClickCoords(e) {
    const { lat, lng } = e.latlng;

    const coords = this._scaledCoordsToOriginal([lat, lng]);
    const message = `You clicked at [${coords}]. Use this coords to bind points.`;
    console.log(message);
  }

  _addLogo() {
    const divIcon = L.divIcon({
      className: "map-location__logo",
      iconAnchor: [60, 60],
    });

    L.marker(this._originalCoordsToScaled(this._data.logoPosition), {
      icon: divIcon,
    }).addTo(this._map);
  }

  _addCustomZoom() {
    L.control
      .zoom({
        zoomInTitle: "",
        zoomOutTitle: "",
      })
      .addTo(this._map);
  }

  _addImage() {
    L.imageOverlay(this._data.imageUrl, [[0, 0], this._bounds]).addTo(
      this._map
    );
  }

  _addMarkers() {
    $.getJSON(this._data.pointsUrl)
      .done((points) => {
        const types = Object.keys(
          points.reduce((obj, point) => {
            obj[point.type] = true;
            return obj;
          }, {})
        );

        types.forEach((type) => {
          this._map.createPane(type + "Markers");
        });

        points.forEach((point) => {
          const divIcon = L.divIcon({
            className: "map-location__icon",
            html: `<svg class="icon">
                          <use
                              xlink:href="./img/icons/icons.svg#${point.type}"
                          ></use>
                      </svg>`,
            iconAnchor: [24, 48],
            popupAnchor: [0, -48],
          });

          L.marker(this._originalCoordsToScaled(point.coords), {
            icon: divIcon,
            pane: point.type + "Markers",
          })
            .bindPopup(
              `<aside class="panel-location">
                      <div class="panel-location__header">
                          <h2 class="panel-location__h1">
                              ${point.title}
                          </h2>
                      </div>
                      <div class="panel-location__desc">
                          ${point.description}
                      </div>
                  </aside>`
            )
            .addTo(this._map);
        });
      })
      .fail(function () {
        `Failed loading ${this._data.pointsUrl}`;
      });
  }

  filterPoints(filterBy) {
    const panes = this._map.getPanes();

    for (const [key, pane] of Object.entries(panes)) {
      if (!key.match(/Markers$/)) continue;

      pane.style.display =
        filterBy === "all" || key === filterBy + "Markers" ? "block" : "none";
    }

    this._map.closePopup();
  }
}

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadScript(
          "https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/leaflet.min.js",
          function (error, script) {
            if (error) {
              console.error(error);
            } else {
              $(".map-location").each(function () {
                const instance = new ImageMap({
                  el: this,
                });

                $(this).data("image-map", instance);
              });
            }
          }
        );

        observer.disconnect();
      }
    });
  },
  {
    rootMargin: "0px 0px 1000px 0px",
    threshold: 0,
  }
);

$(function () {
  document.querySelectorAll(".map-location").forEach((element) => {
    observer.observe(element);
  });
});

function filterPointsOnMap(filterBy) {
  const mapInstance = $("#section-location .map-location").data("image-map");

  mapInstance.filterPoints(filterBy);
}

function handleFilterClick(e) {
  e.preventDefault();

  $(this).closest("li").addClass("active").siblings().removeClass("active");

  const filterBy = $(this).data("filter");

  filterPointsOnMap(filterBy);
}

function handleSelectItem(e) {
  const filterBy = $(this).data("value");

  filterPointsOnMap(filterBy);
}

$(function () {
  if ($("#section-location").length === 0) return;

  $(document).on(
      "click",
      "#section-location .nav-category a",
      handleFilterClick
  );

  $(document).on(
      "click",
      "#section-location .select__option",
      handleSelectItem
  );
});


const numInputs = document.querySelectorAll('.js-input-num');
numInputs.forEach((input) => {
  input.addEventListener('input', function() {
    var value = input.value.replace(/\D/g, ''); // Удалить все ненумерые символы
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '); // Добавить пробел после каждого третьего символа
    input.value = value;
  });
})

function addSpaceAfterEveryThreeDigits(input) {
  input.addEventListener('input', function() {
    var value = input.value.replace(/\D/g, ''); // Удалить все ненумерые символы
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '); // Добавить пробел после каждого третьего символа
    input.value = value;
  });
}

function ImgUpload() {
  var imgWrap = "";
  var imgArray = [];

  $('.form-file__input').each(function (item) {
      $(this).on('change', function (e) {
          imgWrap = $(this).closest('.form-file').find('.form-file__list');
          var maxLength = $(this).attr('data-max-length');

          var files = e.target.files;
          var filesArr = Array.prototype.slice.call(files);
          var iterator = 0;
          filesArr.forEach(function (f, index) {

              if (imgArray.length > maxLength) {
                  return false
              } else {
                  var len = 0;
                  for (var i = 0; i < imgArray.length; i++) {
                      if (imgArray[i] !== undefined) {
                          len++;
                      }
                  }
                  if (len > maxLength) {
                      return false;
                  } else {
                      imgArray.push(f);

                      let size = Math.round(f.size / 1024)
                      let name = f.name;
                      let format = name.match(/\.([^.]+)$|$/)[1]
                      let preview;

                      var reader = new FileReader();
                      reader.onload = function (e) {
                          if (!f.type.match('image.*')) {
                              preview = '/local/media/images/cabinet/pdf.png';
                          } else {
                              preview = e.target.result;
                          }

                          var html = `<div class='form-file__item'><div class='form-file__item-info' data-file='${name}'><div class='form-file__item-remove'></div><div class='form-file__item-name'><span class='form-file__item-name-string'>${name}</span></div></div></div>`

                          $('.form-file__line span').html(imgArray.length)

                          imgWrap.append(html);
                          iterator++;
                      }
                      reader.readAsDataURL(f);
                  }
              }
          });
      });
  });
  console.log(imgArray);

  $('body').on('click', ".form-file__item-remove", function (e) {
      var file = $(this).parent().data("file");
      for (var i = 0; i < imgArray.length; i++) {
          console.log(imgArray[i].name)
          if (imgArray[i].name === file) {
              imgArray.splice(i, 1);
              break;
          }
      }
      $(this).parent().parent().remove();
  });
}
ImgUpload();


if(document.querySelector('.js-slider-root')) {
  const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting && entry.intersectionRatio >= 0.85) {
        document.querySelector('.active').classList.remove('active');
        // get id of the intersecting section
        const id = entry.target.getAttribute('id');
        // find matching link & add appropriate class
        const newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
      }
    });
  }
  
  const options = {
    threshold: 0.85
  }
  
  const observer = new IntersectionObserver(changeNav, options);
  
  // target the elements to be observed
  const sections = document.querySelectorAll('section');
  sections.forEach((section) => {
    observer.observe(section);
  });

  const windowHeight = document.documentElement.clientHeight;
  const introHeight = document.querySelector('.intro-zhk').offsetHeight;

  document.addEventListener('scroll' , () => {
    if(window.scrollY > (introHeight - windowHeight)) {
      document.querySelector('.js-slider-root').parentElement.parentElement.classList.add('darken') 
    } else {
      document.querySelector('.js-slider-root').parentElement.parentElement.classList.remove('darken')
    }
  })
}

