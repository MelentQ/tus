/*
(i) Код попадает в итоговый файл,
только когда вызвана функция,
например flsFunctions.spollers();
Или когда импортирован весь файл,
например, import "files/script.js";
Неиспользуемый (не вызываемый)
код в итоговый файл не попадает.

Если мы хотим добавить модуль
следует его раскомментировать
*/

// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = true;

// Подключение основного файла стилей
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функционал ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
/* (i) необходимо для корректного отображения webp из css */
flsFunctions.isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
// flsFunctions.addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
// flsFunctions.addLoadedClass();
/* Модуль для работы из меню (Бургер) */
flsFunctions.menuInit();
/* Учет плавающей панели на мобильных устройствах при 100vh */
// flsFunctions.fullVHfix();
/* Форматирование чисел */
// import './libs/wNumb.min.js';

flsFunctions.filterInit();

/*
Модуль "Спойлеры"
Сниппет (HTML): spollers
*/
flsFunctions.spollers();

/*
Модуль "Табы"
Сниппет (HTML): tabs
*/
// flsFunctions.tabs();

/*
Модуль "Показать еще"
Сниппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Модуль "До/После"
Сниппет (HTML): ba
*/
// import './libs/beforeafter.js';
/*

Модуль "Эффект волн"
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();

/*
Модуль "Кастомный курсор"
Документация:
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);

/*
Модуль "Попапы"
Сниппет (HTML): pl, pop
*/
import "./libs/popup.js";

/*
Модуль параллакса мышью
*/
// import './libs/parallax-mouse.js'

// ========================================================================================================================================================================================================================================================
// Робота з формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

import api from "./files/api.js";

/* Работа с полями формы */
// flsForms.formFieldsInit({
//   viewPass: false,
//   autoHeight: false,
// });
/* Отправка формы */
flsForms.formSubmit();

/* Модуль формы "количество" */
// flsForms.formQuantity();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Модуль работы по select. */
import './libs/select.js'

/* Модуль работы с календарем */
// import './files/forms/datepicker.js'

/* (В работе) Модуль работы с масками.*/
/*
Подключение и настройка выполняется в файле js/files/forms/inputmask.js
Документация по работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сниппет(HTML):
*/
import "./files/forms/inputmask.js";

/* Модуль работы с ползунком */
/*
Подключение и настройка выполняется в файле js/files/forms/range.js
Документация по работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сниппет (HTML): range
*/
import "./files/forms/range.js";

// ================================================ ================================================== ================================================== ================================================== ==================================================
// Работа со слайдером (Swiper) =========================================== ================================================== ================================================== ================================================== ================================================== ======
// ================================================ ================================================== ================================================== ================================================== ==================================================
/*
Настройка подключения плагина слайдера Swiper и новых слайдеров выполняется в файле js/files/sliders.js
Документация плагина: https://swiperjs.com/
Сниппет(HTML): swiper
*/
import "./files/sliders.js";

// ================================================ ================================================== ================================================== ================================================== ==================================================
// Модули работы с прокруткой страницы =========================================== ================================================== ================================================== ================================================== ================================================== =====
// ================================================ ================================================== ================================================== ================================================== ==================================================

/*
Изменение дизайна скроллбара
Документация по работе в шаблоне: В HTML добавляем в блок атрибут data-simplebar
Документация плагина: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сниппет(HTML):
*/
// import './files/scroll/simplebar.js';

// Ленивая (отложенная) загрузка картинок
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сниппет(HTML):
// import './files/scroll/lazyload.js';

// Наблюдатель за объектами с атрибутом data-watch
// Сниппет(HTML):
// import './libs/watcher.js'

// Модуль поэкранной прокрутки
// Сниппет(HTML):
// import './libs/fullpage.js'

// Модуль параллакса
// Сниппет(HTML):
// import './libs/parallax.js'

// Функции работы скролом
import * as flsScroll from "./files/scroll/scroll.js";

// Плавная навигация по странице
// flsScroll.pageNavigation();

// Функционал добавления классов к хедеру во время прокрутки
// flsScroll.headerScroll();

// Модуль анимации цифрового счетчика
// Сниппет(HTML):
// flsScroll.digitsCounter();

// ================================================ ================================================== ================================================== ================================================== ==================================================
// Галерея ================================================ ================================================== ================================================== ================================================== ================================================== =
// ================================================ ================================================== ================================================== ================================================== ==================================================
/*
Документация по работе в шаблоне:
Документация плагина: https://www.lightgalleryjs.com/docs/
Сниппет(HTML):
*/
// import "./files/gallery.js";

// ================================================ ================================================== ================================================== ================================================== ==================================================
// Масонри сетка =============================================== ================================================== ================================================== ================================================== ================================================== ==
// ================================================ ================================================== ================================================== ================================================== ==================================================
/*
Документация по работе в шаблоне:
Документация плагина:
Сниппет(HTML):
*/
// import "./files/isotope.js";

// ================================================ ================================================== ================================================== ================================================== ==================================================
// Другие плагины =============================================== ================================================== ================================================== ================================================== ================================================== ================================================== ====
// ================================================ ================================================== ================================================== ================================================== ==================================================

/* Динамический адаптив */
// import "./libs/dynamic_adapt.js";

// ================================================ ================================================== ================================================== ================================================== ==================================================
// Другое =============================================== ================================================== ================================================== ================================================== ================================================== =
// ================================================ ================================================== ================================================== ================================================== ==================================================
/* Подключение карты */
// import loadAndInitMap from "./files/map.js";
// loadAndInitMap();

/* Подключаем файлы со своим кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================
