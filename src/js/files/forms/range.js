// Підключення з node_modules
import * as noUiSlider from 'nouislider';

// Підключення стилів з scss/base/forms/range.scss 
// у файлі scss/forms/forms.scss

// Підключення стилів з node_modules
import 'nouislider/dist/nouislider.css';

export function rangeInit() {
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

	let rangeBlocks = document.querySelectorAll('.filter-item__range');

	if(rangeBlocks) {
		
		rangeBlocks.forEach(function(item) {

			var formatForSlider = {
				from: function (formattedValue) {
						return Number(formattedValue);
				},
				to: function(numericValue) {
						return Math.round(numericValue);
				}
			};

			let rangeItem = item.querySelector('.range-slider')
			let min = Number(rangeItem.dataset.min);
			let max = Number(rangeItem.dataset.max);
			noUiSlider.create(rangeItem, {
				start:  [min, max],
				connect: true,
				range: {
					'min': min,
					'max': max
				},
				format: formatForSlider,
			});

			let inputMin = item.querySelector('.js-range-input-min');
			let inputMax = item.querySelector('.js-range-input-max');
			let inputs = [inputMin, inputMax];

			if(inputMax) {
				inputMin.addEventListener('change', setPriceValues);
				inputMax.addEventListener('change', setPriceValues);
				function setPriceValues() {
					let priceStartValue;
					let priceEndValue;
					if (inputMin.value != '') {
						priceStartValue = inputMin.value;
					}
					if (inputMax.value != '') {
						priceEndValue = inputMax.value;
					}
					rangeItem.noUiSlider.set([priceStartValue, priceEndValue]);
				}

				rangeItem.noUiSlider.on('update', function (values, handle) {
					inputs[handle].value = values[handle];
				});
			}
		})
	}


}
rangeInit();
