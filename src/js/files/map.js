const officesMap = document.querySelector('[data-offices-map]') || false;

console.log('123')

if (officesMap) {
  const mapScript = document.createElement("script");
  mapScript.src = `https://api-maps.yandex.ru/2.1/?apikey=Ваш-Api-ключ&lang=ru_RU`;
  console.log('Проверка выполнена')

  document.body.append(mapScript);

  mapScript.addEventListener("load", () => {
    ymaps.ready(init);

    function init() {
      var map = new ymaps.Map("office-map", {
        center: [55.76, 37.64],
        zoom: 7,
        behaviors: ["default", "scrollZoom"],
      });

      var clusterer1 = new ymaps.Clusterer({
        preset: "islands#invertedOrangeClusterIcons",
        gridSize: 110,
      });

      var placemark1 = new ymaps.Placemark(
        [55.755831, 37.617673],
        {
          hintContent: "Balloon 1",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "./img/offices/map-placemark-img.webp",
          // Размеры метки.
          iconImageSize: [160, 60],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
        }
      );

      var placemark2 = new ymaps.Placemark(
        [55.751935, 37.599787],
        {
          hintContent: "Balloon 2",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "./img/offices/map-placemark-img.webp",
          // Размеры метки.
          iconImageSize: [160, 60],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
        }
      );

      clusterer1.add([placemark1, placemark2]);
      map.geoObjects.add(clusterer1);

      const officesItems = document.querySelectorAll(".js-offices-item");
      const officesList = document.querySelector(".js-offices-list");
      const mapCards = document.querySelectorAll(".js-map-card");
      const mapCardsClose = document.querySelectorAll(".js-map-card-close");
      const officesMap = document.querySelector(".js-offices-map");
      const officesMapClose = officesMap.querySelector(".js-offices-map-close");
      const officesItemBtns = document.querySelectorAll(
        ".js-offices-item-on-map"
      );
      const officesItemToggles = document.querySelectorAll(
        ".js-offices-item-toggle"
      );

      function showOnMap(el) {
        officesMap.classList.add("is-open");
        let lat = parseFloat(el.getAttribute("data-lat"));
        let lon = parseFloat(el.getAttribute("data-lon"));
        map.setCenter([lat, lon], 15);
      }

      if (window.matchMedia("(min-width: 992px)").matches) {
        officesItems.forEach(function (item) {
          item.addEventListener("click", function () {
            showOnMap(item);
            officesList.classList.add("is-hidden");
            document.querySelector(`.js-map-card[data-id="${item.dataset.id}"]`).classList.add("is-open");
          });
        });

      } else {
        officesItemBtns.forEach((item) => {
          item.addEventListener("click", function () {
            showOnMap(item);
          });
        });

        officesMapClose.addEventListener("click", function () {
          officesMap.classList.remove("is-open");
        });

        officesItemToggles.forEach((item) => {
          item.addEventListener("click", function () {
            const parent = this.closest(".offices__list-item");
            const parentInfo = parent.querySelector(".offices__list-item-info");
            parentInfo.classList.toggle("is-open");
            // _slideToggle(parentInfo);
          });
        });
      }

      mapCardsClose.forEach((item) => {
        item.addEventListener("click", function () {
          officesList.classList.remove("is-hidden");
          item.closest('.js-map-card').classList.remove("is-open");
        });
      })
    }
  });
}
