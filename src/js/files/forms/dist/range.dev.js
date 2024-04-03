"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rangeInit = rangeInit;

var noUiSlider = _interopRequireWildcard(require("nouislider"));

require("nouislider/dist/nouislider.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Підключення з node_modules
// Підключення стилів з scss/base/forms/range.scss
// у файлі scss/forms/forms.scss
// Підключення стилів з node_modules
function rangeInit() {
  // const priceSlider = document.querySelector('#range');
  // if (priceSlider) {
  // 	let textFrom = priceSlider.getAttribute('data-from');
  // 	let textTo = priceSlider.getAttribute('data-to');
  // 	noUiSlider.create(priceSlider, {
  // 		start: 0, // [0,200000]
  // 		connect: [true, false],
  // 		range: {
  // 			'min': [0],
  // 			'max': [200000]
  // 		},
  // 		/*
  // 		format: wNumb({
  // 			decimals: 0
  // 		})
  // 		*/
  // 	});
  // 	/*
  // 	const priceStart = document.getElementById('price-start');
  // 	const priceEnd = document.getElementById('price-end');
  // 	priceStart.addEventListener('change', setPriceValues);
  // 	priceEnd.addEventListener('change', setPriceValues);
  // 	*/
  // 	function setPriceValues() {
  // 		let priceStartValue;
  // 		let priceEndValue;
  // 		if (priceStart.value != '') {
  // 			priceStartValue = priceStart.value;
  // 		}
  // 		if (priceEnd.value != '') {
  // 			priceEndValue = priceEnd.value;
  // 		}
  // 		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
  // 	}
  // }
  var rangeBlocks = document.querySelectorAll(".filter-item__range");

  if (rangeBlocks) {
    rangeBlocks.forEach(function (item) {
      var formatForSlider = {
        from: function from(formattedValue) {
          return Number(formattedValue);
        },
        to: function to(numericValue) {
          return Math.round(numericValue);
        }
      };
      var rangeItem = item.querySelector(".range-slider");
      var min = Number(rangeItem.dataset.min);
      var max = Number(rangeItem.dataset.max);
      noUiSlider.create(rangeItem, {
        start: [min, max],
        connect: true,
        range: {
          min: min,
          max: max
        },
        format: formatForSlider
      });
      var inputMin = item.querySelector(".js-range-input-min");
      var inputMax = item.querySelector(".js-range-input-max");
      var inputs = [inputMin, inputMax];

      if (inputMax) {
        var setPriceValues = function setPriceValues() {
          var priceStartValue;
          var priceEndValue;

          if (inputMin.value != "") {
            priceStartValue = inputMin.value;
          }

          if (inputMax.value != "") {
            priceEndValue = inputMax.value;
          }

          rangeItem.noUiSlider.set([priceStartValue, priceEndValue]);
        };

        inputMin.addEventListener("change", setPriceValues);
        inputMax.addEventListener("change", setPriceValues);
        rangeItem.noUiSlider.on("update", function (values, handle) {
          inputs[handle].value = values[handle];
        });
      }
    });
  }
}

rangeInit();