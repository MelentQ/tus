/* Маски для полів (у роботі) */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('input[type="tel"]');
if (inputMasks.length) {
	flsModules.inputmask = Inputmask('+7(999) 999-9999', {showMaskOnHover: false}).mask(inputMasks);
}