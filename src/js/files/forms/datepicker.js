/* Календар */

// Підключення модуля
import AirDatepicker from "air-datepicker";
import 'air-datepicker/air-datepicker.css';
import { isMobile } from "../functions.js";

function initDatepickers() {
  const datepickers = document.querySelectorAll("[data-datepicker]");

	const options = {
		isMobile: false,
	}

	if(window.matchMedia("(max-width: 767px)").matches) {
		options.isMobile = true;
	}

  if (datepickers.length) {
    datepickers.forEach((datepicker) => {
      new AirDatepicker(datepicker, options);
    });
  }
}

initDatepickers();
